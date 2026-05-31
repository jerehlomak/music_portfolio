import Link from "next/link";
import Image from "next/image";
import SvgIcon1 from "@/components/icons/SvgIcon1";

export const metadata = {
  title: "About",
  description: "",
};

export default function Page() {
  return (
    <>
      <section className="about-header padding-xlarge">
        <div className="w-layout-blockcontainer max-width-xlarge grid-12 w-container">
          <h1
            id="w-node-e91ce003-c51a-07e4-c07e-80630e58b58b-98c37474"
            className="text-color-primary"
          >
            Paper BOI
          </h1>
          <div id="w-node-a80a9812-8626-40ca-73da-712502bdf7b8-98c37474">
            <div
              id="w-node-eacf64db-6c2e-21b5-050d-26636f3eec05-98c37474"
              className="margin-bottom margin-xsmall"
            >
              <p className="paragraph text-color-primary">
                Christian Jordan
                <br />
                Jackson
              </p>
            </div>
            <p className="paragraph text-color-primary">
              Jan 25th 1992
              <br />
              Los Angeles
            </p>
          </div>
          <p
            id="w-node-_714c246f-5c54-039b-7fc2-920a25a03ba9-98c37474"
            className="paragraph text-color-primary"
          >
            My music is all about keeping it real and staying true to my roots.
            I'm all about the hustle and hard work, but I'm also not afraid to
            speak my mind and address the issues that matter. If you haven't
            heard my music yet, you're missing out.
          </p>
        </div>
      </section>
      <section>
        <div className="w-layout-blockcontainer max-width-xxlarge w-container">
          <img
            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643e861cd0e5512f79697e5c_gallery img 1.webp"
            loading="lazy"
            sizes="(max-width: 1828px) 100vw, 1828px"
            alt="Selfie-style photo of the artist"
          />
        </div>
      </section>
      <section className="about-content-section padding-xlarge margin-bottom margin-xlarge">
        <div className="w-layout-blockcontainer max-width-xlarge grid-12 w-container">
          <div id="w-node-f320cfc4-470b-93d4-8ad6-23a59dd1bfd3-98c37474">
            <div
              id="w-node-f320cfc4-470b-93d4-8ad6-23a59dd1bfd4-98c37474"
              className="margin-bottom margin-large"
            >
              <p className="paragraph text-size-large text-color-primary">
                My music is all about keeping it real and staying true to my
                roots. I'm all about the hustle and hard work, but I'm also not
                afraid to speak my mind and address the issues that matter. If
                you haven't heard my music yet, you're missing out.
              </p>
            </div>
            <p className="paragraph text-size-large text-color-primary">
              If you haven't heard my music yet, you're missing out. My music is
              all about keeping it real and staying true to my roots. I'm all
              about the hustle and hard work, but I'm also not afraid to speak
              my mind and address the issues that matter.{" "}
            </p>
          </div>
          <div
            id="w-node-_6ff3dbcb-1bfc-8422-dc8d-58c5c8919c51-98c37474"
            className="sticker-wrapper"
          >
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/643eb18b4262c3e7d619b2ae_Sticker 7.svg"
              loading="lazy"
              id="w-node-d9eb2953-deae-a743-632a-6ab9d1742f9b-98c37474"
              alt=""
            />
          </div>
          <div
            id="w-node-_9c541d1b-da91-d5de-9420-a2fdf35c0ec8-98c37474"
            className="quote-and-links-content"
          >
            <div className="highlight-text-wrapper padding-vertical padding-xxsmall">
              <h2 className="text-style-allcaps text-color-primary quote heading-style-h6">
                When I&nbsp;joined the BRAIN&nbsp;DOWN&nbsp;DUMB&nbsp;
                FACE&nbsp;Family, the whole Community felt I found my place at
                exactly the right time. There is no better team to land at this
                moment in time.
              </h2>
            </div>
            <div className="about-links-list">
              <a
                href="#"
                className="button is-external-link text-color-primary w-inline-block"
              >
                <p className="link-label is-external text-color-primary">
                  Paper Boi YouTube
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
                href="#"
                className="button is-external-link text-color-primary w-inline-block"
              >
                <p className="link-label is-external text-color-primary">
                  BDDF YouTube
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
                href="#"
                className="button is-external-link text-color-primary w-inline-block"
              >
                <p className="link-label is-external text-color-primary">
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
                href="#"
                className="button is-external-link text-color-primary w-inline-block"
              >
                <p className="link-label is-external text-color-primary">
                  Store
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
          <div
            id="w-node-_1e1383f1-f0fa-8ba0-59b9-099fb58305de-98c37474"
            className="portrait-wrapper"
          >
            <img
              src="/images/644130559783e12f7ee03080_1millidollars-jRFb-rm88eI-unsplash.webp"
              loading="lazy"
              sizes="(max-width: 479px) 90vw, (max-width: 767px) 11vw, (max-width: 991px) 50.65625px, (max-width: 1919px) 5vw, 77.90625px"
              alt="artist profile photo"
            />
            <p className="paragraph text-color-primary">
              My music is all about keeping it real and staying true to my
              roots. I'm all about the hustle and hard work, but I'm also not
              afraid to speak my mind and address the issues that matter. If you
              haven't heard my music yet, you're missing out.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
