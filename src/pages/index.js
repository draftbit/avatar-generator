import React from 'react'
import { Link, graphql } from 'gatsby'
import html2canvas from 'html2canvas'
import ColorSwatch from '../../re/ColorSwatch.bs'
import AvatarGenerator from '../../re/AvatarGenerator.bs'
import IconLink from '../../re/IconLink.bs'
import Modal from '../../re/Modal.bs'
import Icon from '../../re/Icon.bs'
import Button from '../../re/Button.bs'

import Layout from '../components/layout'

const Wordmark = () => (
  <a
    href="https://draftbit.com"
    title="Robust native front-end apps with usable code by Draftbit"
  >
    <Icon name="wordmark" />
  </a>
)

function getQueryParams(str) {
  if (!str) return {}
  const qs = str.split('?')[1]
  const pairs = qs.split('&')

  return pairs.reduce((obj, pair) => {
    const [key, value] = pair.split('=')
    obj[key] = value
    return obj
  }, {})
}

function mapQueryParams(params) {
  return Object.assign({}, DEFAULT_STYLES, params)
}

function stringifyQueryParams(params) {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return `?${queryString}`;
}

const DEFAULT_STYLES = {
  skin: 'Skin',
  skinColor: 'E4A070',
  hairColor: '362C47',
  hair: 'Bobbangs',
  facialHair: 'Mustache',
  facialHairColor: '362C47',
  body: 'Round',
  bodyColor: '456DFF',
  eyes: 'Sunglasses',
  mouth: 'Smile',
  nose: 'Wrinkles',
  bgColor: '93A7FF',
}

export default class IndexPage extends React.PureComponent {
  state = {
    styles: DEFAULT_STYLES,
    showModal: false,
  }

  _onChange = (key, value) => {
    const change = {[key]: value}
    const oldParams = mapQueryParams(getQueryParams(window.location.search))
    const styles = mapQueryParams({...oldParams, ...change })
    console.log('styles', styles)
    this.setState({ styles })
  }

  _exportImage = async () => {
    this.setState({ showModal: true })
    const node = document.getElementsByClassName(
      'AvatarGenerator-pngContainer'
    )[0]
    const canvas = await html2canvas(node)
    const dataUrl = canvas.toDataURL()

    const link = document.createElement('a')
    link.download = 'avatar.png'
    link.href = dataUrl

    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  render() {
    const { styles } = this.state
    const config = this.props.data.allDataJson.edges[0].node
    return (
      <Layout>
        <div className="body-bg-left" />
        <div className="body-bg-right" />
        <header className="Layout-header">
          <div className="Layout-left">
            <Wordmark />
            <h1 className="Text-title">Personas</h1>
            <span className="Text-subtitle">Avatar Generator</span>
          </div>
          <div className="Layout-right">
            <h2 className="Text-description">
              A playful avatar generator for the modern age.
            </h2>
          </div>
        </header>
        <main className="Layout-main">
          <AvatarGenerator onExport={this._exportImage} />
        </main>
        <footer className="Layout-footer">
          <div className="Layout-left">
            <span className="Text-overline">Built by</span>
            <br />
            <Wordmark />
          </div>
          <div className="Layout-right">
            <span className="Text-marketing mb-2">
              Visually build robust, native mobile apps with clean, reusable code.
            </span>
            <br />
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
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Button
            href="https://github.com/draftbit/avatar-generator"
            label="View on Github"
          />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ConfigQuery {
    allDataJson {
      edges {
        node {
          skinStyles
          hairStyles
          facialHairStyles
          bodyStyles
          eyeStyles
          mouthStyles
          noseStyles
          bgStyles
          skinColors
          hairColors
          facialHairColors
          bodyColors
          bgColors
          disabledColors
        }
      }
    }
  }
`
