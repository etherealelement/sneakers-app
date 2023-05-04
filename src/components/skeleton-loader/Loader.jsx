import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader>
    speed={1}
    width={140}
    height={137}
    viewBox="0 0 140 107" backgroundColor="#f3f3f3" foregroundColor="#ecebeb"
    <rect x="30" y="10" rx="13" ry="22" width="150" height="100" />
    <rect x="20" y="185" rx="13" ry="13" width="90" height="24" />
    <rect x="140" y="180" rx="6" ry="6" width="32" height="32" />
    <rect x="20" y="120" rx="13" ry="13" width="150" height="15" />
    <rect x="20" y="142" rx="13" ry="13" width="93" height="16" />
  </ContentLoader>
);

export default Loader;
