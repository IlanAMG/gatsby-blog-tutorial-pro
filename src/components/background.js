import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img 
            fluid={data.placeholderImage.childImageSharp.fluid} 
            style={{ minHeight: '100vh' }}
        />
}

const Background = () => {
    return (
        <div
            style={{
                left: '0px',
                top: '0px',
                overflow: 'hidden',
                margin: '0px',
                padding: '0px',
                height: '100%',
                width: '100%',
                zIndex: '-999',
                position: 'fixed'
            }}
        >
            <Image />
        </div>
    )
}

export default Background