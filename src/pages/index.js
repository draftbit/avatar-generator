import React from 'react'
import { Link, graphql, navigate, withPrefix } from 'gatsby'
import html2canvas from 'html2canvas'

import { make as App } from '../../re/App.bs'
import Layout from '../components/layout'

function getRandom(list) {
  const l = list.length
  return list[Math.floor(Math.random() * l)]
}

function randomizeStyles(config) {
  return {
    skin: 'Skin',
    skinColor: getRandom(config.skinColors),
    hairColor: getRandom(config.hairColors),
    hair: getRandom(config.hairStyles),
    facialHair: getRandom(config.facialHairStyles),
    facialHairColor: getRandom(config.facialHairColors),
    body: getRandom(config.bodyStyles),
    bodyColor: getRandom(config.bodyColors),
    eyes: getRandom(config.eyeStyles),
    mouth: getRandom(config.mouthStyles),
    nose: getRandom(config.noseStyles),
    bgColor: getRandom(config.bgColors),
  }
}
const DEFAULT_STYLES = {
  skin: 'Skin',
  skinColor: 'B16A5B',
  hairColor: 'E16381',
  hair: 'Balding',
  facialHair: 'Mustache',
  facialHairColor: '6C4545',
  body: 'Square',
  bodyColor: '5A45FF',
  eyes: 'Glasses',
  mouth: 'Pacifier',
  nose: 'Smallround',
  bgColor: 'FFCC65',
}

export default class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props)
    const config = this.props.data.allDataJson.edges[0].node

    this.state = {
      styles: DEFAULT_STYLES,
      showModal: false,
    }
  }

  _onChange = (key, value) => {
    const change = { [key]: value }
    this.setState({
      styles: {
        ...this.state.styles,
        ...change,
      },
    })
  }

  _randomize = () => {
    const config = this.props.data.allDataJson.edges[0].node
    const styles = randomizeStyles(config)
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
    const { styles, showModal } = this.state
    const config = this.props.data.allDataJson.edges[0].node

    return (
      <Layout>
        <App
          onToggleModal={() => this.setState({ showModal: false })}
          showModal={showModal}
          {...config}
          {...styles}
          onChange={this._onChange}
          onExport={this._exportImage}
          randomize={this._randomize}
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
