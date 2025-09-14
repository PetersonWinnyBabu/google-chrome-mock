import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GoDownload } from "react-icons/go";
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";

import "./AnimatedFeatures.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedFeatures = () => {
  const headlineContainer = useRef();
  const jumplist = useRef();
  const navbarContainer = useRef();
  const mosaicItemContainer = useRef();
  const sectionRef = useRef();
  const textRef = useRef(null);
  const newtextRef = useRef();
  const keyframesObjects = useRef();

  var tml = gsap.timeline();
  useGSAP(() => {
    tml.to(headlineContainer.current, {
      opacity: 1,
      delay: 0.5,
      duration: 2,
      y: -20,
      ease: "power3.out",
    });
  });

  useGSAP(() => {
    const triggerConfig = {
      trigger: ".mosaic-main-container",
      scroller: "body",
      start: "0%",
      end: "-100%",
      scrub: true,
      pin: true,
    };

    gsap.to(jumplist.current, {
      opacity: 1,
      delay: 0.5,
      duration: 2,
      y: 40,
      stagger: 3,
      ease: "power4.out",
      scrollTrigger: triggerConfig,
    });
    gsap.to(navbarContainer.current, {
      opacity: 1,
      delay: 0.5,
      duration: 2,
      stagger: 3,
      y: -50,
      ease: "power4.out",
      scrollTrigger: triggerConfig,
    });
  });

  useGSAP(() => {
    const triggerConfig = {
      trigger: ".mosaic-main-container",
      start: "top center",
      end: "bottom center",
      scrub: 3,
    };

    gsap.from(".mosaic1", {
      x: "23%",
      y: "-22%",
      opacity: 1,
      scale: 1,
      delay: 0.4,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: triggerConfig,
    });

    gsap.from(".mosaic2", {
      x: "0%",
      y: "50%",
      opacity: 1,
      scale: 1,
      delay: 0.4,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: triggerConfig,
    });
    gsap.from(".mosaic3", {
      x: "0%",
      y: "8%",
      opacity: 1,
      scale: 1,
      delay: 0.4,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: triggerConfig,
    });

    gsap.from(".mosaic4", {
      x: "52%",
      y: "-26%",
      opacity: 1,
      scale: 1,
      delay: 0.4,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: triggerConfig,
    });

    gsap.from(".mosaic5", {
      x: "24%",
      y: "-12%",
      opacity: 1,
      scale: 1,
      delay: 0.4,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: triggerConfig,
    });
  });

  const text = "update";

  useGSAP(() => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.from(letters, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".update-timer-icon", {
      rotate: -360,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      repeat: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const newtext = "Yours";

  useGSAP(() => {
    const letters = newtextRef.current.querySelectorAll("span");
    gsap.from(letters, {
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: newtextRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".yours-section-heading-main-pill-container-logo", {
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      repeat: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: newtextRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to(".updates-section-gallery-card-chrome-ball", {
      x: 350,
      opacity: 1,
      duration: 1,

      scrollTrigger: {
        trigger: ".updates-section-gallery-card-headline",
        start: "top 60%",
      },
    });
  }, []);

  return (
    <>
      <section className="hero-section" id="hero">
        <div ref={navbarContainer} className="navbar-main">
          <div className="logo-container">
            <img
              className="chrome-logo"
              src="https://www.google.com/chrome/static/images/fallback/chrome-logo-2023.png"
              alt="chrome-logo"
            />
          </div>
          <div className="nav-links-container">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a
                  className="navigation-link"
                  href="https://www.google.com/intl/en_in/chrome/safety/"
                  target="__blank"
                >
                  Safety
                </a>
              </li>
              <li className="nav-list-item">
                <a
                  className="navigation-link"
                  href="https://www.google.com/intl/en_in/chrome/browser-tools/"
                  target="__blank"
                >
                  By Google
                </a>
              </li>
              <li className="nav-list-item">
                <a
                  className="navigation-link"
                  href="https://chromewebstore.google.com/category/extensions"
                  target="__blank"
                >
                  Extensions
                  <MdOutlineArrowOutward />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="parent-container">
          <div className="jumplinksContainer">
            <ul ref={jumplist} className="jumplinks-list">
              <li className="jumplist-link-items">
                <a className="jumplink" href="#updates">
                  <span>Updates</span>
                </a>
              </li>
              <li className="jumplist-link-items">
                <a className="jumplink" href="#yours">
                  <span>Yours</span>
                </a>
              </li>
              <li className="jumplist-link-items">
                <a className="jumplink" href="#yours">
                  <span>Safe</span>
                </a>
              </li>
              <li className="jumplist-link-items">
                <a className="jumplink" href="#yours">
                  <span>Fast</span>
                </a>
              </li>
              <li className="jumplist-link-items">
                <a className="jumplink" href="#yours">
                  <span>By Google</span>
                </a>
              </li>
              <li className="jumplist-link-items">
                <button className="jumplinkButton" type="button">
                  <GoDownload aria-label="download" /> Download
                </button>
              </li>
            </ul>
          </div>
          <div className="hero-main-container">
            <div className="hero-container-main-flex">
              <div ref={headlineContainer} className="hero-container-flex">
                <div className="hero-logo-container">
                  <img
                    src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                    role="img"
                    alt="Google Chrome logo."
                    width="63"
                    height="63"
                  ></img>
                </div>
                <h1 className="hero-grid-heading-main">
                  The browser <br /> built to be yours
                </h1>
                <div className="hero-download-section-main">
                  <div className="hero-dowmload-section">
                    <button className="hero-section-download-button">
                      <GoDownload aria-label="download" />
                      Download Chrome
                    </button>
                    <div className="download-section-text-area">
                      <a
                        className="update-chrome-link"
                        href="https://www.google.com/intl/en_in/chrome/update/"
                        target="__blank"
                      >
                        I want to update Chrome
                      </a>
                    </div>
                    <div className="update-chrome-device-version-text">
                      <p className="chr-caption">For Windows 11/10 64-bit</p>
                    </div>
                    <div className="update-section-checkbox-item-container">
                      <input
                        id="checkbox"
                        type="checkbox"
                        className="checkbox"
                      ></input>
                      <label htmlFor="checkbox" className="checkbox-label">
                        Help make Google Chrome better by automatically sending
                        usage statistics and crash reports to Google.
                        <a
                          href="https://www.google.com/support/chrome/bin/answer.py?answer=96817&amp;hl=en"
                          target="__blank"
                        >
                          <span className="chr-link__label">Learn more</span>
                        </a>
                      </label>
                    </div>
                    <p className="download-terms-para">
                      By downloading Chrome, you agree to the{" "}
                      <a
                        className="download-terms-links"
                        href="https://policies.google.com/terms"
                        target="__blank"
                      >
                        Google Terms of Service
                      </a>
                      <a
                        className="download-terms-links"
                        href="/intl/en_in/chrome/terms/"
                        target="__blank"
                      >
                        Chrome and ChromeOS Additional Terms of Service
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mosaic-main-container">
            <div ref={mosaicItemContainer} className="mosaic-items-container">
              <div className="mosaic-item-container mosaic1">
                <div className="mosaic-item-image-container ">
                  <img
                    className="mosaic-image-type1"
                    src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp"
                    width="727"
                    height="424"
                    alt="mosaicImages"
                  />
                </div>
              </div>
              <div className="mosaic-item-container  mosaic2">
                <div className="mosaic-item-image-container mosaic-image-container--border">
                  <img
                    className="mosaic-image-type2"
                    src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp"
                    width="220"
                    height="424"
                    alt="mosaicImages"
                  />
                </div>
              </div>
              <div className="mosaic-item-container  mosaic3">
                <div className="mosaic-item-image-container ">
                  <img
                    className="mosaic-image-type1"
                    src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp"
                    width="727"
                    height="424"
                    alt="mosaicImages"
                  />
                </div>
              </div>
              <div className="mosaic-item-container  mosaic4">
                <div className="mosaic-item-image-container mosaic-image-container--border ">
                  <img
                    className="mosaic-image-type2"
                    src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp"
                    width="220"
                    height="424"
                    alt="mosaicImages"
                  />
                </div>
              </div>
              <div className="mosaic-item-container  mosaic5">
                <div className="mosaic-item-image-container ">
                  <img
                    className="mosaic-image-type1"
                    src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp"
                    width="727"
                    height="424"
                    alt="mosaicImages"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="updates-section" id="updates">
        <div className="updates-section-parent-container">
          <h2 className="updates-section-headline-main">
            Discover the latest
            <br />
            <span className="updates-pill-container">
              <MdOutlineUpdate className="update-timer-icon" />
              <span ref={textRef} className="updates-timer-text">
                {text.split("").map((char, index) => (
                  <span key={index} style={{ display: "inline-block" }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </span>
            from Chrome
          </h2>
        </div>
        <div className="updates-section-gallery-container-main">
          <ul className="updates-section-gallery-items-list">
            <li className="updates-section-gallery-list-item">
              <div className="updates-section-gallery-card1">
                <div className="updates-section-gallery-card-cover-container">
                  <h3 className="updates-section-gallery-card-cover-eyebrow">
                    Updates
                  </h3>
                  <h4 className="updates-section-gallery-card-headline">
                    Automatic updates{" "}
                  </h4>
                  <div className="updates-section-gallery-card-text-wrapper">
                    <p className="updates-section-gallery-card-text-para1">
                      There’s a new Chrome release every four weeks, making it
                      easy to have the newest features and a faster, safer web
                      browser.
                    </p>
                    <a
                      className="updates-section-gallery-card-links"
                      href="https://www.google.com/intl/en_in/chrome/update/"
                      target="__blank"
                    >
                      Learn about automatic updates
                    </a>
                  </div>
                </div>
                <div className="updates-section-gallery-card-images-container">
                  <img
                    className="updates-section-gallery-card-image"
                    src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates-2x.png"
                    alt="gallery-item-image"
                  />
                </div>
              </div>
            </li>
            <li className="updates-section-gallery-list-item2">
              <div className="updates-section-gallery-card2">
                <div className="updates-section-gallery-card-cover-container">
                  <h3 className="updates-section-gallery-card-cover-eyebrow">
                    Latest
                  </h3>
                  <h4 className="updates-section-gallery-card-headline">
                    New from Chrome
                  </h4>
                  <div className="updates-section-gallery-card-text-wrapper">
                    <p className="updates-section-gallery-card-text-para1">
                      Chrome regularly updates with tools and features that make
                      it faster and easier to use.
                    </p>
                    <a
                      className="updates-section-gallery-card-links"
                      href="https://www.google.com/intl/en_in/chrome/update/"
                      target="__blank"
                    >
                      Learn what's new on Chrome <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
                <div className="updates-section-gallery-card-images-container">
                  <div className="updates-section-card2-cover-image-wrapper">
                    <div className="updates-section-card2-cover-image-wrapper2">
                      <img
                        className="updates-section-gallery-card-chrome-ball"
                        src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                        alt="gallery-item-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="yours-section" id="yours">
        <div className="yours-section-main-container">
          <div className="yours-section-container-2">
            <div className="yours-section-container-3">
              <div className="yours-section-heading-main-container">
                <h2 className="yours-section-heading-main">
                  Make it
                  <span className="yours-section-heading-main-pill-container">
                    <div className="yours-section-heading-main-pill-container-logo-container">
                      <span className="yours-section-heading-main-pill-container-logo">
                        <FaPaintRoller />
                      </span>
                      <span
                        ref={newtextRef}
                        className="yours-section-heading-main-pill-container-text"
                      >
                        {newtext.split("").map((char, index) => (
                          <span key={index} style={{ display: "inline-block" }}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  </span>
                  and take it with you
                </h2>
              </div>
              <div className="yours-section-animation-mask-container">
                <div className="yours-section-animation-mask-container-image-container">
                  <img
                    className="yours-section-animation-mask-container-image-container-image1"
                    src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches-2x.webp"
                    alt="images1"
                  />
                </div>
                <div className="yours-section-animation-mask-container-image-container2">
                  <img
                    className="yours-section-animation-mask-container-image-container-image1"
                    src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp"
                    alt="images2"
                  />
                </div>
                <div className="yours-section-animation-mask-container-image-container3">
                  <img
                    className="yours-section-animation-mask-container-image-container-image2"
                    src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2-2x.webp"
                    alt="images3"
                  />
                </div>
              </div>
              <div className="yours-section-media-content-main">
                <div className="yours-section-media-content-container1">
                  <div className="yours-section-media-content-sub-container1">
                    <h3 className="yours-section-media-content-sub-container1-heading">
                      Extend your experience{" "}
                    </h3>
                    <p className="yours-section-media-content-sub-container1-para">
                      From shopping and entertainment to productivity, find
                      extensions to improve your experience in the Chrome Web
                      Store.
                    </p>
                    <a
                      className="yours-section-media-content-sub-container1-anchor"
                      href="https://chrome.google.com/webstore/category/extensions"
                      target="__blank"
                    >
                      Explore{" "}
                      <span className="yours-section-media-content-sub-container1-anchor-span">
                        extensions <MdOutlineArrowOutward />
                      </span>
                    </a>
                  </div>
                  <div className="yours-section-media-content-sub-container2">
                    <img
                      className="yours-section-media-content-sub-container2-image"
                      src="https://www.google.com/chrome/static/images/dev-components/extensions-ui-2x.png"
                      alt="mediacontentimages"
                    />
                    <div ref={keyframesObjects} className="keyframes-objects">
                      <div className="object1-shop">
                        <img
                          className="keyframeImages"
                          src="https://www.google.com/chrome/static/images/dev-components/extensions-shop-2x.png"
                          alt="shop"
                        />
                      </div>
                      <div className="object1-icon">
                        <img
                          className="keyframeImages"
                          src="https://www.google.com/chrome/static/images/dev-components/extensions-icon-2x.png"
                          alt="icon"
                        />
                      </div>
                      <div className="object1-video">
                        <img
                          className="keyframeImages"
                          src="https://www.google.com/chrome/static/images/dev-components/extensions-video-2x.png"
                          alt="video"
                        />
                      </div>
                      <div className="object1-paint">
                        <img
                          className="keyframeImages"
                          src="https://www.google.com/chrome/static/images/dev-components/extensions-paint-2x.png"
                          alt="paint"
                        />
                      </div>
                      <div className="object1-person">
                        <img
                          className="keyframeImages"
                          src="https://www.google.com/chrome/static/images/dev-components/extensions-person-2x.png"
                          alt="person"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedFeatures;
