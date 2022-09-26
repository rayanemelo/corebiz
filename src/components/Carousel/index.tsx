import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import bannerDesktop from "../../assets/banner.png";
import bannerMobile from "../../assets/banner-mobile.png";
import "./styles.css";
import "./flickity.css";

export const Carousel = () => {
  let width = window.innerWidth;
  console.log("width: ", width);

  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      <img
        src={width > 768 ? bannerDesktop : bannerMobile}
        className="banner-img"
      />
      <img
        src={width > 768 ? bannerDesktop : bannerMobile}
        className="banner-img"
      />
      <img
        src={width > 768 ? bannerDesktop : bannerMobile}
        className="banner-img"
      />
    </Flickity>
  );
};
