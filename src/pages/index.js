import { graphql } from 'gatsby'
import Index from './indexReal.bs'

export default ({ data }) => {
  return <Index data={data} />
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
