import React from "react"
import styled from "styled-components"
import Video from "./Video"

const NewsContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`
const VideoContainer = styled(Video)`
  width: 100%;
  height: 100%;
`
const InfoContainer = styled.div`
  margin: 0;

`
const News = () => {
  return (
    <NewsContainer>
      <VideoContainer
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
      <InfoContainer>que hace</InfoContainer>
    </NewsContainer>
  )
}

export default News
