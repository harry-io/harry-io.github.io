import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = (props) => (
  <LazyLoadImage
    alt={props.alt}
    src={props.src}
    effect="blur"
    className={props.cn}
  />
);

export default Image;
