import React from 'react'
import { Link } from 'gatsby'
import ColorSwatch from '../re/ColorSwatch.bs'
import AvatarGenerator from '../re/AvatarGenerator.bs'
import IconLink from '../re/IconLink.bs'
import Modal from '../re/Modal.bs'
import Icon from '../re/Icon.bs'

import Layout from '../components/layout'

const Wordmark = () => (
  <a
    href="https://draftbit.com"
    title="Robust native front-end apps with usable code by Draftbit"
  >
    <Icon name="wordmark" />
  </a>
)

export default class IndexPage extends React.PureComponent {
  state = {
    showModal: true,
  }
  render() {
    return (
      <Layout>
        <div className="body-bg-left" />
        <div className="body-bg-right" />
        <header className="Layout-header">
          <div className="Layout-left">
            <Wordmark />
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
          <AvatarGenerator
            onToggleModal={() => this.setState({ showModal: true })}
          />
        </main>
        <footer className="Layout-footer">
          <div className="Layout-left">
            <span className="Text-overline">Built by</span>
            <br />
            <Wordmark />
          </div>
          <div className="Layout-right">
            <span className="Text-marketing mb-4 d-block">
              Visually build robust native front-end apps with usable code.
            </span>
            <IconLink
              className="Text-link"
              href="https://draftbit.com"
              title="Build fobust native front-end apps with usable code using Draftbit"
              label="draftbit.com"
              icon="arrow"
            />
          </div>
        </footer>
        <Modal
          visible={this.state.showModal}
          onToggle={() => this.setState({ showModal: !this.state.showModal })}
        />
      </Layout>
    )
  }
}
