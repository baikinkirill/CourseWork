import {EditorState, RichUtils, AtomicBlockUtils, ContentState, convertToRaw, convertFromRaw} from "draft-js";
import {stateToHTML} from 'draft-js-export-html';
import Editor from "draft-js-plugins-editor";
import createImagePlugin from "draft-js-image-plugin";
import * as React from "react";
import fetch from "isomorphic-unfetch";
import htmlToDraft from 'html-to-draftjs';

import styles from './Editor.module.scss'

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];


export default class RichEditorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty(), chips: [], edit: false, coverImage: null};

    this.onChange = (editorState) => {

      // export state
      // console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())))
      if(this.props.onChange)
        this.props.onChange(convertToRaw(this.state.editorState.getCurrentContent()))
      this.setState({editorState, done: false})
    };

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }


  componentDidMount() {

    if (this.props.firstState) {
      try{

        const blocksFromHTML = convertFromRaw(this.props.firstState);
        this.setState({editorState: EditorState.createWithContent(blocksFromHTML)})
      }catch (e){

      }
    }

    var url = window.location;
    const id = url.toString().split("/")[4]
    this.setState({edit: true})
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  checkFile(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      this.handleClick(reader.result)
      }
    reader.readAsDataURL(file)
  }

  checkEdit() {
    this.setState({done: false})
  }

  render() {
    const {editorState} = this.state;


    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div>

        <div>

          {this.props.onlyShow ? (
            <div >
              <Editor
                customStyleMap={styleMap}
                editorState={editorState}
                plugins={plugins}
                spellCheck={true}
                readOnly={true}
              />
            </div>
          ) : (
            <>
              <div className={styles.toolsContainer}
                   style={{position: "sticky", top: "110px", backgroundColor: "white"}}>
                <div>
                  <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                  />
                  <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                  />
                </div>
                <div className={styles.imageEditor}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      <i className="material-icons"><img src={"/static/images/copy.png"}/></i>
                      <input name="photo" accept="image/*,image/jpeg" onChange={(e) => this.checkFile(e)}
                             type={"file"}/>
                    </label>
                  </div>
                </div>

              </div>
              <div className={styles.editor} onClick={this.focus}>
                <Editor
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  onChange={this.onChange}
                  onTab={this.onTab}
                  plugins={plugins}
                  spellCheck={true}
                />
              </div>
            </>
          )}


        </div>

      </div>
    );
  }

  handleClick = (base64) => {
    const newEditorState = this.insertImage(this.state.editorState, base64);
    this.onChange(newEditorState);
  };

  insertImage = (editorState, base64) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      {src: base64},
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity},
    );
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
  };
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return styles.blockquote;
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className = styles.RichEditorActiveButton;
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className={styles.tools}>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className={styles.tools}>
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
