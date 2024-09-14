import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/0/d/c80dfdee1efab9e86569b10463237a02.jpg",
    },
    {
      id: 2,
      name: "Anh Thôi Nhân Nhượng",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/1/e/e/7/1ee7b8d8adc789fb53530b89b0a2e9a1.jpg",
    },
    {
      id: 3,
      name: "Trào Lưu Nhạc Hot",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/0/d/c80dfdee1efab9e86569b10463237a02.jpg",
    },
  ];

  return <div>
    <h3>Có Thể bạn sẽ thích đấy</h3>
    <AlbumList albumList = {albumList}/>
  </div>;
}

export default AlbumFeature;
