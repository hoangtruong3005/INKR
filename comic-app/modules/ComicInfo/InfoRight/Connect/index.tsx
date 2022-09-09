import React from "react";

import QR from '@/public/svg/qr.svg';

declare interface ComicProps {}

const InfoRight: React.FC<ComicProps> = () => {
  return (
    <div className="connect">
      <div className="connect__des">
        <h5>Connect</h5>

        <div className="des">
          Love this title? Scan the QR code to continue reading right on your
          mobile devices.
        </div>
      </div>

      <div className="connect__bg" style={{ backgroundImage: `url(${QR.src})` }} />
    </div>
  );
};

export default InfoRight;
