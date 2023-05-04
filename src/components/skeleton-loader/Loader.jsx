import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={187}
    viewBox="0 0 150 187"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="22" ry="22" width="150" height="91" /> 
    <rect x="3" y="163" rx="13" ry="13" width="80" height="24" /> 
    <rect x="110" y="155" rx="6" ry="6" width="32" height="32" /> 
    <rect x="0" y="111" rx="13" ry="13" width="150" height="15" /> 
    <rect x="15" y="120" rx="0" ry="0" width="1" height="0" /> 
    <rect x="26" y="156" rx="0" ry="0" width="9" height="0" /> 
    <rect x="1" y="142" rx="13" ry="13" width="93" height="16" />
  </ContentLoader>
)

export default MyLoader