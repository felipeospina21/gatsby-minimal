import React from "react"
import styled from "styled-components"

const StyledIframe = styled.iframe`
  width: 100%;
  height: 60%;
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <StyledIframe
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
  />
)
export default Video
