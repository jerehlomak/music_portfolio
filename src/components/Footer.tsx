import Link from "next/link";
import Image from "next/image";
import SvgIcon1 from "@/components/icons/SvgIcon1";

export default function Footer() {
  return (
    <div className="footer-background-wrapper">
      <div className="footer padding-horizontal padding-xlarge background-color-primary">
        <div className="max-width-xxlarge padding-top padding-huge w-container">
          <div className="footer-links-wrapper margin-bottom margin-xhuge">
            <div className="footer-links-left">
              <Link
                href="/"
                aria-current="page"
                className="button is-link footer-link w-inline-block w--current"
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
                href="/music"
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
                href="/about"
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
                href="/contact"
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
                href="/documents/privacy-policy"
                className="link text-size-small text-weight-normal"
              >
                Privacy Policy
              </Link>
              <Link
                href="/style-guide"
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
        <img
          src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b4e263c9ad1fea20d_Sticker 5.svg"
          loading="lazy"
          alt=""
          className="footer-section-sticker"
        />
      </div>
    </div>
  );
}
