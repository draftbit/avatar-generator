import React from 'react'
import { Link, graphql, navigate, withPrefix } from 'gatsby'
import html2canvas from 'html2canvas'

import App from '../../re/App.bs'
import Layout from '../components/layout'

function getQueryParams(str = '') {
  if (!str) return {}
  const qs = str.split('?')[1]
  const pairs = qs.split('&')

  return pairs.reduce((obj, pair) => {
    const [key, value] = pair.split('=')
    obj[key] = value
    return obj
  }, {})
}

function mapQueryParams(params, defaultStyles) {
  return Object.assign({}, defaultStyles, params)
}

function stringifyQueryParams(params) {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return queryString;
}

function getRandom(list) {
  const l = list.length;
  return list[Math.floor(Math.random() * l)];
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
    bgColor: getRandom(config.bgColors)
  }
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
  constructor(props) {
    super(props);
      const config = this.props.data.allDataJson.edges[0].node
      const params = getQueryParams(this.props.location.search)
      const styles = Object.keys(params).length > 0 ? params : randomizeStyles(config)

      this.state = {
        styles,
        showModal: false,
      }
  }

  _onChange = (key, value) => {
    const change = {[key]: value}
    const styles = mapQueryParams({...this.state.styles, ...change })
    this.setState({ styles })

    const params = stringifyQueryParams(styles)
    window.history.pushState({}, null, `?${params}`)
  }

  _randomize = () => {
    const config = this.props.data.allDataJson.edges[0].node
    const styles = randomizeStyles(config)
    this.setState({ styles })

    const params = stringifyQueryParams(styles)
    window.history.pushState({}, null, `?${params}`)
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
        <App onToggleModal={() => this.setState({ showModal: false })} showModal={showModal} {...config} {...styles} onChange={this._onChange} onExport={this._exportImage} randomize={this._randomize} />
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
