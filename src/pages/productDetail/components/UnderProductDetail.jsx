import React from "react";
import ArabicaMangDen from "./ArabicaMangDen";

export default function UnderProductDetail() {
  return (
    <div className="under-product-detail">
      <div className="bg-upd">
        <p className="content">
          Thôn Cầu Đất, <br /> Thành Phố Đà Lạt, <br />
          Tỉnh Lâm Đồng
        </p>
        <div className="bg-upd-1">
          <div className="content"></div>
        </div>
        <div className="bg-upd-2" style={{ padding: "60px 0 100px" }}>
          <ArabicaMangDen />
        </div>
      </div>
    </div>
  );
}
