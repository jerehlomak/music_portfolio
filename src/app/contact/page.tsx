import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Contact",
  description: "",
};

export default function Page() {
  return (
    <>
      <section className="contact-header padding-vertical padding-xxlarge"><div id="w-node-_3a795e71-b890-956e-1ad7-04182a8361d2-9f6af482" data-w-id="3a795e71-b890-956e-1ad7-04182a8361d2" className="contact-marquee-inner"><h1 className="contact-marquee-text">Contact</h1><h1 className="contact-marquee-text">Contact</h1></div></section><section className="get-in-touch background-color-primary padding-xlarge"><div className="w-layout-blockcontainer max-width-xxlarge w-container"><div className="get-in-touch-inner"><h2 className="heading-style-h3 text-weight-normal">Get in touch via email</h2><div className="email-addresses-wrapper"><a href="mailto:projects@elpassion.com" className="email-address w-inline-block"><h3 className="heading-style-h3 email-button">events@label.com</h3><div className="email-link-nudge contact-page"><p className="link email-button">for show booking</p><img src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg" loading="lazy" alt="Arrow right" /></div></a><a href="mailto:projects@elpassion.com" className="email-address w-inline-block"><h3 className="heading-style-h3 email-button">business@label.com</h3><div className="email-link-nudge contact-page"><p className="link email-button">for collabs and promotions</p><img src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644131ef0f7c992b2fe5dff2_Arrow Right Icon.svg" loading="lazy" alt="Arrow right" /></div></a></div></div></div></section>
    </>
  );
}
