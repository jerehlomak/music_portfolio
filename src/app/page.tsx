import { siteData } from "@/data/content";
import TourDate from "@/components/TourDate";
import TrackItem from "@/components/TrackItem";
import GalleryImage from "@/components/GalleryImage";
import MerchItem from "@/components/MerchItem";
import Link from "next/link";
import Image from "next/image";
import SvgIcon1 from "@/components/icons/SvgIcon1";
import SvgIcon2 from "@/components/icons/SvgIcon2";
import SvgIcon3 from "@/components/icons/SvgIcon3";

export const metadata = {
  title: "Webflow Template for Musicians • EL Passion",
  description:
    "Innovative, fully customisable and CMS-powered Webflow template for Musicians • EL Passion",
};

export default function Page() {
  return (
    <>
      <main className="main-wrapper">
        <div
          data-w-id="c902f203-10a8-b4ed-07a9-38df1e8cb46d"
          className="hero-wrapper"
        >
          <div className="hero">
            <div className="hero-text-wrapper">
              <div className="header-text-wrapper">
                <h1 className="text-color-primary hero-text">Paper boi</h1>
                <p className="text-size-large text-color-primary max-width-small">
                  I'm all about the hustle and hard work, but I'm also not
                  afraid to speak my mind and address the issues that matter. If
                  you haven't heard my music yet, you're missing out.
                </p>
              </div>
              <a
                href="#shows"
                data-w-id="0dd381e9-f65b-d050-f038-6082c10f8427"
                className="shows-scroll-button-wrapper w-inline-block"
              >
                <div
                  aria-label="See me live - click to view shows"
                  className="shows-scroll-button-inner"
                >
                  <div
                    aria-label="see me live"
                    data-w-id="e5b33d89-a9e3-531c-d585-9f69b4ca4d08"
                    style={{
                      WebkitTransform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(null) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(null) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(null) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      transform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(null) rotateY(0) rotateZ(0deg) skew(0, 0)",
                      transformStyle: "preserve-3d",
                    }}
                    className="see-live-text w-embed"
                  >
                    <SvgIcon2 />
                  </div>
                  <div className="see-live-arrow w-embed">
                    <SvgIcon3 />
                  </div>
                  <div
                    data-poster-url="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb rap_1-poster-00001.jpg"
                    data-video-urls="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb rap_1-transcode.mp4,https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb rap_1-transcode.webm"
                    data-autoplay="true"
                    data-loop="true"
                    data-wf-ignore="true"
                    className="shows-scroll-button-video w-background-video w-background-video-atom"
                  >
                    <video
                      id="f939ea95-7eec-8446-02d2-55d0b9678326-video"
                      autoPlay
                      loop
                      style={{
                        backgroundImage:
                          "url(https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb%20rap_1-poster-00001.jpg)",
                      }}
                      muted
                      playsInline
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source
                        src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb rap_1-transcode.mp4"
                        data-wf-ignore="true"
                      />
                      <source
                        src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64a554377c1c4f92aabf76d7_pexels-cb rap_1-transcode.webm"
                        data-wf-ignore="true"
                      />
                    </video>
                  </div>
                </div>
              </a>
            </div>
            <div className="hero-gallery-wrapper">
              <div className="hero-gallery-image-wrapper">
                <img
                  src="/images/64413055bfe3b50f39f7687a_1millidollars-z2wsjg-M8Po-unsplash.webp"
                  fetchPriority="high"
                  sizes="(max-width: 479px) 100vw, 33vw"
                  alt="Artist's photo from between his palms"
                  className="hero-image"
                />
              </div>
              <div className="hero-gallery-image-wrapper">
                <img
                  src="/images/64a51addbfb5071e34819356_hero-image.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, 33vw"
                  alt="The artist sitting on a chair relaxed"
                  className="hero-image"
                />
              </div>
              <div className="hero-gallery-image-wrapper">
                <img
                  src="/images/64413054bf6ece6c77c4feaa_1millidollars-QqWS59FyLVc-unsplash.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, 33vw"
                  alt="Artist's photo "
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shows">
          <div className="max-width-xxlarge w-container">
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64197e5b8f0602d40c48162c_globe sticker.svg"
              loading="lazy"
              alt=""
              className="sticker-globe-shows"
            />
            <div className="margin-bottom margin-huge">
              <h2 id="shows" className="text-color-primary margin-custom-shows">
                UPCOMING SHOWS
              </h2>
              <p className="text-color-primary max-width-small">
                Find me around the world on the new Paper&nbsp;Paper Tour → From
                🇺🇸 Atlanta to 🇵🇱 Warsaw!
              </p>
            </div>
            <div className="shows-wrapper">
              <div className="shows-list-wrapper w-dyn-list">
                <div role="list" className="shows-list w-dyn-items">
                  {siteData.home.shows.map((show) => (
                    <TourDate key={show.id} {...show} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links-bar background-color-black">
          <div
            data-w-id="3bb4c974-620b-1aed-bac7-6f3d3a58ea96"
            className="links-bar-inner"
          >
            <div className="links-bar-logo-list">
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc1c0aa3827476470a_Apple Music logo.svg"
                  loading="lazy"
                  alt="Apple Music logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc660d051e7d7968a2_YouTube logo.svg"
                  loading="lazy"
                  alt="Youtube logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc88caeb3758faf9ad_spotify logo.svg"
                  loading="lazy"
                  alt="Spotify logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc751f7385d24d827f_Tidal logo.svg"
                  loading="lazy"
                  alt="Tidal logo"
                />
              </a>
            </div>
            <div className="links-bar-logo-list">
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc1c0aa3827476470a_Apple Music logo.svg"
                  loading="lazy"
                  alt="Apple Music logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc660d051e7d7968a2_YouTube logo.svg"
                  loading="lazy"
                  alt="Youtube logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc88caeb3758faf9ad_spotify logo.svg"
                  loading="lazy"
                  alt="Spotify logo"
                />
              </a>
              <a
                href="#"
                target="_blank"
                className="streaming-service-link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/642596cc751f7385d24d827f_Tidal logo.svg"
                  loading="lazy"
                  alt="Tidal logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="gallery padding-horizontal padding-xlarge">
          <div
            data-w-id="d4ef5742-724b-1bd1-823b-489c22f718da"
            className="gallery-inner max-width-xxlarge w-container"
          >
            {siteData.home.gallery.map((img, index) => {
              const modifiers = ["_5", "_4", "_3", "_2", "_1"];
              return (
                <GalleryImage
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  classNameModifier={modifiers[index] || ""}
                />
              );
            })}
          </div>
        </div>
        <div className="merchandise padding-horizontal padding-xlarge">
          <div className="max-width-xxlarge w-container">
            <div className="merch-letters-container">
              <div
                data-w-id="e9630874-6e66-cc40-5bf6-b1a80cfe30d9"
                className="merch-heading-mask"
              ></div>
              <h2 className="merch-heading">
                <span>N</span>E<span className="m3">W</span>
                <span className="m4">E</span>
                <span className="m5">S</span>
                <span className="m6">T</span>&nbsp;<span className="m7">S</span>
                <span className="m8">T</span>
                <span className="m9">U</span>
                <span className="m10">F</span>
                <span className="m11">F</span>
              </h2>
              <div className="merch-images-container margin-bottom margin-xhuge">
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b79f33c9893eaf0be_Sticker 3.svg"
                  loading="lazy"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b331cce0386ae339d_Sticker 4.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="merchandise-item-list">
              {siteData.home.merch.map((item) => (
                <MerchItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
