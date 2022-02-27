export default function ({Component, pageProps}) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
        }

        * {
          font-family: Roboto;
        }

        @font-face {
          font-family: Roboto;
          src: url("/static/fonts/Roboto/Roboto-Light.ttf");
          font-weight: 100;
        }


      `}</style>
      <Component {...pageProps} />
    </>
  )
}

