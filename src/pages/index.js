import { graphql } from 'gatsby'
import React from 'react'
import Index from './Index.bs'

export default ({ data }) => {
  return <Index data={data} />
}

export const pageQuery = graphql`
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
