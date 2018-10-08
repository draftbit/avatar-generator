import React from 'react'
import { Link } from 'gatsby'
import ColorSwatch from '../re/ColorSwatch.bs'
import AvatarGenerator from '../re/AvatarGenerator.bs'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="body-bg-left" />
    <div className="body-bg-right" />
    <header className="Layout-header">
      <div className="Layout-left">
        <h1 className="Text-title">Persona</h1>
        <span className="Text-subtitle">Avatar Generator</span>
      </div>
      <div className="Layout-right">
        <h2 style={{ maxWidth: 320 }} className="Text-description">
          A playful avatar generator for the modern age.
        </h2>
      </div>
    </header>
    <main className="Layout-main">
      <AvatarGenerator />
    </main>
    <footer className="Layout-footer">
      <div className="Layout-left">
        <span className="Text-overline">Built by</span>
      </div>
      <div className="Layout-right">
        <span className="Text-marketing mb-4 d-block">
          Visually build robust native front-end apps with usable code.
        </span>
        <a
          className="Text-link"
          href="https://draftbit.com"
          title="Build fobust native front-end apps with usable code using Draftbit"
        >
          draftbit.com
        </a>
      </div>
    </footer>
  </Layout>
)

export default IndexPage
