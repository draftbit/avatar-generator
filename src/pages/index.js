import { graphql } from 'gatsby'
import Index from './indexReal.bs'
import React from 'react'

const AvatarGenerator = ({ data }) => {
  return <Index data={data} />
}

export default AvatarGenerator

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
