import React from "react";

interface MerchItemProps {
  title: string;
  price: string;
  src: string;
  link?: string;
}

export default function MerchItem({ title, price, src, link }: MerchItemProps) {
  return (
    <div className="merch-item-card">
      <a
        href={link || "#"}
        className="merch-item-image-wrapper margin-bottom margin-medium w-inline-block"
      >
        <img
          src={src}
          loading="lazy"
          alt={title}
          className="merch-item-image"
        />
      </a>
      <a href={link || "#"} className="w-inline-block">
        <h3 className="text-color-white margin-bottom margin-xsmall">
          {title}
        </h3>
      </a>
      <p className="heading-style-h5 text-mono text-color-white margin-bottom margin-medium">
        {price}
      </p>
      <a href={link || "#"} className="button-merchandise-c2a w-button">
        BUY
      </a>
    </div>
  );
}
