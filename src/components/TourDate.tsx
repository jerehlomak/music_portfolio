import React from 'react';
import SvgIcon1 from "./icons/SvgIcon1";

interface TourDateProps {
  city: string;
  country: string;
  venue: string;
  date: string;
  ticketLink?: string;
  isSoldOut: boolean;
}

export default function TourDate({ city, country, venue, date, ticketLink, isSoldOut }: TourDateProps) {
  return (
    <div role="listitem" className="show-item w-dyn-item">
      <a
        style={{
          backgroundColor: "hsla(21.846153846153847, 100.00%, 61.76%, 1.00)",
          display: "none",
        }}
        href={ticketLink || "#"}
        className="show-hover-marquee-wrapper w-inline-block"
      >
        <div className="show-hover-marquee-inner">
          <div className="show-hover-marquee-segment">
            <h3 className="text-weight-medium text-style-allcaps">{date}</h3>
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">Buy Tickets</h3>
            <h3 className="text-weight-medium text-style-allcaps w-condition-invisible">
              Get info
            </h3>
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">{date}</h3>
          </div>
          <div className="show-hover-marquee-segment">
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">Buy Tickets</h3>
            <h3 className="text-weight-medium text-style-allcaps w-condition-invisible">
              Get Info
            </h3>
          </div>
          <div className="show-hover-marquee-segment">
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">{date}</h3>
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">Buy Tickets</h3>
            <h3 className="text-weight-medium text-style-allcaps w-condition-invisible">
              Get Info
            </h3>
            <img
              src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/644656e7f178cf7b6f742c85_star black.svg"
              loading="lazy"
              alt=""
            />
            <h3 className="text-weight-medium text-style-allcaps">{date}</h3>
          </div>
        </div>
      </a>
      <div className="location-wrapper">
        <h3
          style={{
            color: "hsla(21.846153846153847, 100.00%, 61.76%, 1.00)",
          }}
          className="heading-style-h5 text-style-allcaps text-color-primary"
        >
          {city}
        </h3>
        <h3
          style={{
            color: "hsla(21.846153846153847, 100.00%, 61.76%, 1.00)",
          }}
          className="location-country-style"
        >
          {country}
        </h3>
      </div>
      <p
        style={{
          color: "hsla(21.846153846153847, 100.00%, 61.76%, 1.00)",
        }}
        className="heading-style-h5 text-style-allcaps text-color-primary mobile-scale"
      >
        {venue}
      </p>
      <p
        style={{
          color: "hsla(21.846153846153847, 100.00%, 61.76%, 1.00)",
        }}
        className="heading-style-h5 text-style-allcaps text-color-primary mobile-scale"
      >
        {date}
      </p>
      <div className="tickets-info-wrapper">
        {!isSoldOut ? (
          <a
            href={ticketLink || "#"}
            className="button is-icon w-inline-block"
          >
            <div>Tickets</div>
            <div className="embed-icon-wrapper">
              <div className="icon-embed-xsmall w-embed">
                <SvgIcon1 />
              </div>
            </div>
          </a>
        ) : (
          <a href="#" className="sold-out w-inline-block">
            <div className="text-block">Sold Out.</div>
          </a>
        )}
      </div>
    </div>
  );
}
