import Document, {Head, Main, NextScript} from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import {injectGlobal} from 'styled-components'
import React from 'react'
import {styles, Head as _Head} from './_global'

let stylesInjected = false

export default class MyDocument extends Document {
  static async getInitialProps ({renderPage}) {
    if (!stylesInjected) {
      injectGlobal`${styles}`
      stylesInjected = true
    }
    const page = renderPage()

    const style = styleSheet.rules().map(rule => rule.cssText).join('\n')

    return {...page, style}
  }

  render () {
    return (
      <html>
        <_Head/>
        <Head>
          <style dangerouslySetInnerHTML={{__html: this.props.style}}/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}
