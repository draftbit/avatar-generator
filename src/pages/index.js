import React from 'react'
import { graphql, Link } from 'gatsby'
import html2canvas from 'html2canvas'
import createHistory from "history/createBrowserHistory"
import btoa from 'btoa'
import atob from 'atob'

import App from '../re/App.bs'
import ColorSwatch from '../re/ColorSwatch.bs'
import AvatarGenerator from '../re/AvatarGenerator.bs'
import IconLink from '../re/IconLink.bs'
import Modal from '../re/Modal.bs'
import Icon from '../re/Icon.bs'
import Button from '../re/Button.bs'

import Layout from '../components/layout'

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

const DEFAULT_STATE = {
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

function mapQueryParams(params) {
  return Object.assign({}, DEFAULT_STATE, params)
}

function stringifyQueryParams(params) {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  return `?${queryString}`;
}

export default class IndexPage extends React.PureComponent {
  state = {
    config: DEFAULT_STATE,
    showModal: false,
  }

  componentDidMount() {
    this.history = createHistory()
    this.unlisten = this.history.listen((location, action) => {
      const params = getQueryParams(this.history.location.search)
      const config = mapQueryParams(params)
      const hash = btoa(JSON.stringify(config))
      console.log('hash', hash)
      const answer = atob(hash)
      console.log('answer', answer)
      this.setState({ config })
    })
  }

  _onChange = (key, value) => {
    const change = {[key]: value}
    const oldParams = mapQueryParams(getQueryParams(window.location.search))
    const newParams = mapQueryParams({...oldParams, ...change })
    const stringParams = stringifyQueryParams(newParams)
    this.history.push(`/${stringParams}`)
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
