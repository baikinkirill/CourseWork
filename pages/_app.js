export default function ({Component, pageProps}) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
        }

        
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

