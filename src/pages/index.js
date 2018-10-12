import React from 'react'
import { Link } from 'gatsby'
import html2canvas from 'html2canvas'
import ColorSwatch from '../re/ColorSwatch.bs'
import AvatarGenerator from '../re/AvatarGenerator.bs'
import IconLink from '../re/IconLink.bs'
import Modal from '../re/Modal.bs'
import Icon from '../re/Icon.bs'
import Button from '../re/Button.bs'

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
    showModal: false,
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
    const config = this.props.data.allDataJson.edges[0].node
    const urlState = this.state.config
    console.log('urlstate', urlState)
    return (
      <Layout>
        <App
          {...urlState}
          skinStyles={config.skinStyles}
          hairStyles={config.hairStyles}
          facialHairStyles={config.facialHairStyles}
          bodyStyles={config.bodyStyles}
          eyeStyles={config.eyeStyles}
          mouthStyles={config.mouthStyles}
          noseStyles={config.noseStyles}
          bgStyles={config.bgStyles}
          skinColors={config.skinColors}
          hairColors={config.hairColors}
          facialHairColors={config.facialHairColors}
          bodyColors={config.bodyColors}
          bgColors={config.bodyColors}
          disabledColors={config.bodyColors}
          onExport={this._exportImage}
          onChange={this._onChange}
        />
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
