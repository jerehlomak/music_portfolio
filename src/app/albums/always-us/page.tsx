import Link from "next/link";
import Image from "next/image";
import SvgIcon1 from "@/components/icons/SvgIcon1";

export const metadata = {
  title: "Musician Template",
  description: "",
};

export default function Page() {
  return (
    <>
      <div
        style={{ backgroundColor: "#eddd4b" }}
        className="album-page-content padding-xlarge"
      >
        <div className="back-to-albums-bar max-width-full">
          <Link
            aria-label="back to albums"
            href="/../music"
            className="back-to-albums w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg"
              loading="lazy"
              alt=""
              className="image-2"
            />
            <h5 className="text-style-allcaps">Back to albums</h5>
          </Link>
        </div>
        <div className="album-page-inner max-width-full w-container">
          <div className="album-title-container margin-bottom margin-xxlarge">
            <h2
              id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abbc-0871fb70"
              className="album-title"
            >
              Always us
            </h2>
          </div>
          <div className="album-page-wrapper">
            <div
              id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abc1-0871fb70"
              className="album-meta-wrapper"
            >
              <div className="album-meta-inner">
                <div
                  id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abc3-0871fb70"
                  className="cover-wrapper"
                >
                  <img
                    loading="lazy"
                    alt=""
                    src="/images/649975f0362d4092f12cb8bd_album-2.webp"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 94vw, (max-width: 991px) 35vw, 28vw"
                    className="cover-image"
                  />
                </div>
                <div className="release-date-ticker">
                  <div className="release-date-ticker-inner">
                    <div className="release-date-ticker-text-container">
                      <p className="text-mono text-color-silver">
                        &nbsp;LP ✦ 02.02.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;LP ✦ 02.02.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;LP ✦ 02.02.2020 ✦{" "}
                      </p>
                    </div>
                    <div className="release-date-ticker-text-container">
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                      <p className="text-mono text-color-silver">
                        &nbsp;EP ✦ 28.08.2020 ✦{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abd7-0871fb70"
                  className="album-links-wrapper"
                >
                  <a
                    href="https://elpassion.com/"
                    target="_blank"
                    className="button is-external-link text-color-black w-inline-block"
                  >
                    <p className="link-label is-external text-color-black">
                      Spotify
                    </p>
                    <div className="html-embed w-embed">
                      <SvgIcon1 />
                    </div>
                  </a>
                  <a
                    href="https://elpassion.com/"
                    target="_blank"
                    className="button is-external-link text-color-black w-inline-block"
                  >
                    <p className="link-label is-external text-color-black">
                      Apple Music
                    </p>
                    <div className="html-embed w-embed">
                      <SvgIcon1 />
                    </div>
                  </a>
                </div>
                <a
                  id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abe0-0871fb70"
                  href="https://elpassion.com/"
                  className="button text-color-primary w-button"
                >
                  BUY&nbsp;NOW
                </a>
              </div>
            </div>
            <div
              id="w-node-_6342704f-d944-4a6d-ab4c-6f431ad4abe2-0871fb70"
              className="album-page-tracklist-wrapper"
            >
              <div className="latest-release-video-wrapper margin-bottom margin-large">
                <div
                  style={{ paddingTop: "56.17021276595745%" }}
                  className="video-2 w-video w-embed"
                >
                  <iframe
                    className="embedly-embed"
                    src="http://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FaUXgKFEQugQ%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaUXgKFEQugQ&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaUXgKFEQugQ%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
                    scrolling="no"
                    allowFullScreen
                    title="Webflow Conf 2022 Keynote"
                  ></iframe>
                </div>
              </div>
              <div className="tracklist-wrapper">
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div
                      role="listitem"
                      className="tracklist-track-row w-dyn-item"
                    >
                      <div className="track-meta-wrapper">
                        <h6 className="track-number">1</h6>
                        <h6 className="track-title">Intro</h6>
                      </div>
                      <div className="track-links-wrapper">
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
                            loading="lazy"
                            alt="youtube logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
                            loading="lazy"
                            alt="spotify logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
                            loading="lazy"
                            alt="apple music logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="tracklist-track-row w-dyn-item"
                    >
                      <div className="track-meta-wrapper">
                        <h6 className="track-number">2</h6>
                        <h6 className="track-title">Always us, man</h6>
                      </div>
                      <div className="track-links-wrapper">
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
                            loading="lazy"
                            alt="youtube logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
                            loading="lazy"
                            alt="spotify logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
                            loading="lazy"
                            alt="apple music logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="tracklist-track-row w-dyn-item"
                    >
                      <div className="track-meta-wrapper">
                        <h6 className="track-number">3</h6>
                        <h6 className="track-title">Never them</h6>
                      </div>
                      <div className="track-links-wrapper">
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
                            loading="lazy"
                            alt="youtube logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
                            loading="lazy"
                            alt="spotify logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
                            loading="lazy"
                            alt="apple music logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="tracklist-track-row w-dyn-item"
                    >
                      <div className="track-meta-wrapper">
                        <h6 className="track-number">4</h6>
                        <h6 className="track-title">Holla</h6>
                      </div>
                      <div className="track-links-wrapper">
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
                            loading="lazy"
                            alt="youtube logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
                            loading="lazy"
                            alt="spotify logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
                            loading="lazy"
                            alt="apple music logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="tracklist-track-row w-dyn-item"
                    >
                      <div className="track-meta-wrapper">
                        <h6 className="track-number">5</h6>
                        <h6 className="track-title">Outro</h6>
                      </div>
                      <div className="track-links-wrapper">
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
                            loading="lazy"
                            alt="youtube logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          target="_blank"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
                            loading="lazy"
                            alt="spotify logo"
                          />
                        </a>
                        <a
                          href="https://elpassion.com/"
                          className="w-inline-block"
                        >
                          <img
                            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
                            loading="lazy"
                            alt="apple music logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer padding-horizontal padding-xlarge background-color-primary">
        <div className="max-width-xxlarge padding-top padding-huge w-container">
          <div className="footer-links-wrapper margin-bottom margin-xhuge">
            <div className="footer-links-left">
              <Link
                href="/"
                className="button is-link footer-link w-inline-block"
              >
                <div className="footer-link-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg"
                    loading="lazy"
                    alt="Arrow right"
                    className="footer-link-icon"
                  />
                </div>
                <p className="button is-link text-weight-medium">Home</p>
              </Link>
              <Link
                href="/../music"
                className="button is-link footer-link w-inline-block"
              >
                <div className="footer-link-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg"
                    loading="lazy"
                    alt="Arrow right"
                    className="footer-link-icon"
                  />
                </div>
                <p className="button is-link text-weight-medium">Music</p>
              </Link>
              <Link
                href="/../about"
                className="button is-link footer-link w-inline-block"
              >
                <div className="footer-link-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg"
                    loading="lazy"
                    alt="Arrow right"
                    className="footer-link-icon"
                  />
                </div>
                <p className="button is-link text-weight-medium">About</p>
              </Link>
              <Link
                href="/../contact"
                className="button is-link footer-link w-inline-block"
              >
                <div className="footer-link-icon-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg"
                    loading="lazy"
                    alt="Arrow right"
                    className="footer-link-icon"
                  />
                </div>
                <p className="button is-link text-weight-medium">Contact</p>
              </Link>
            </div>
            <div className="footer-links-right">
              <a
                data-w-id="59b250a7-577f-82d8-af0b-c539e248112e"
                href="#"
                className="button is-external-link text-color-black w-inline-block"
              >
                <p className="link-label is-external text-color-black">
                  Instagram
                </p>
                <div className="ext-link-icon-wrapper">
                  <div className="ext-link-arrow-inner">
                    <div className="ext-link-arrow-embed w-embed">
                      <SvgIcon1 />
                    </div>
                    <div className="ext-link-arrow-embed two w-embed">
                      <SvgIcon1 />
                    </div>
                  </div>
                </div>
              </a>
              <a
                data-w-id="59b250a7-577f-82d8-af0b-c539e248112e"
                href="#"
                className="button is-external-link text-color-black w-inline-block"
              >
                <p className="link-label is-external text-color-black">
                  Twitter
                </p>
                <div className="ext-link-icon-wrapper">
                  <div className="ext-link-arrow-inner">
                    <div className="ext-link-arrow-embed w-embed">
                      <SvgIcon1 />
                    </div>
                    <div className="ext-link-arrow-embed two w-embed">
                      <SvgIcon1 />
                    </div>
                  </div>
                </div>
              </a>
              <a
                data-w-id="59b250a7-577f-82d8-af0b-c539e248112e"
                href="#"
                className="button is-external-link text-color-black w-inline-block"
              >
                <p className="link-label is-external text-color-black">
                  YouTube
                </p>
                <div className="ext-link-icon-wrapper">
                  <div className="ext-link-arrow-inner">
                    <div className="ext-link-arrow-embed w-embed">
                      <SvgIcon1 />
                    </div>
                    <div className="ext-link-arrow-embed two w-embed">
                      <SvgIcon1 />
                    </div>
                  </div>
                </div>
              </a>
              <a
                data-w-id="59b250a7-577f-82d8-af0b-c539e248112e"
                href="#"
                className="button is-external-link text-color-black w-inline-block"
              >
                <p className="link-label is-external text-color-black">
                  Spotify
                </p>
                <div className="ext-link-icon-wrapper">
                  <div className="ext-link-arrow-inner">
                    <div className="ext-link-arrow-embed w-embed">
                      <SvgIcon1 />
                    </div>
                    <div className="ext-link-arrow-embed two w-embed">
                      <SvgIcon1 />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-artist-title">
            <h1 className="footer-heading-artist text-align-center">
              Paper boi
            </h1>
          </div>
          <div className="footer-bottom margin-vertical margin-medium">
            <a
              href="https://www.elpassion.com/"
              target="_blank"
              className="made-in-webflow w-inline-block"
            >
              <h6 className="link">Made in</h6>
              <img
                src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131d5d0136e6081c8c1f5_Webflow logo.svg"
                loading="lazy"
                alt="Webflow Logo"
                className="webflow-logo"
              />
              <p className="link text-weight-normal"> by EL&nbsp;Passion</p>
            </a>
            <div
              id="w-node-f96082f9-ed51-0c6c-123b-0c183fd9b8a0-3fd9b86f"
              className="bottom-links"
            >
              <Link
                href="/../documents/privacy-policy"
                className="link text-size-small text-weight-normal"
              >
                Privacy Policy
              </Link>
              <Link
                href="/../style-guide"
                className="link text-size-small text-weight-normal"
              >
                Styleguide
              </Link>
              <a href="#" className="link text-size-small text-weight-normal">
                License
              </a>
            </div>
            <div
              id="w-node-f96082f9-ed51-0c6c-123b-0c183fd9b8a9-3fd9b86f"
              className="copyright"
            >
              <img
                src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b1477f8f6845c39f3_Sticker 8.svg"
                loading="lazy"
                alt=""
                className="footer-barcode"
              />
              <p className="heading-style-h6 text-size-large">2023</p>
              <img
                src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b1477f8f6845c39f3_Sticker 8.svg"
                loading="lazy"
                alt=""
                className="footer-barcode"
              />
            </div>
          </div>
        </div>
        <img
          src="/images/644131d49f9ad6691a332a9a_Cassette.svg"
          loading="lazy"
          alt=""
          className="footer-bg-sticker"
        />
      </div>
    </>
  );
}
