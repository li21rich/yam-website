import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const WinnerBadge = ({ award }) => {
  const { color } = award;
  return (
    <div className="absolute bg-yellow-500 text-black rounded-full text-sm font-semibold shadow-md z-10 p-1">
      <div className="relative flex items-center justify-center w-6 h-6">
        <svg
          className="w-1 h-1 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 20 20"
          fill={color}
        >
          <path d="M 3.3933 1.0977 c 0.1125 -0.3453 0.6012 -0.3453 0.7131 0 l 0.4014 1.2345 a 0.375 0.375 90 0 0 0.3561 0.2586 h 1.2984 c 0.3633 0 0.5142 0.465 0.2205 0.6789 l -1.05 0.7626 a 0.375 0.375 90 0 0 -0.1365 0.4194 l 0.4014 1.2345 c 0.1125 0.3453 -0.2832 0.633 -0.5775 0.4194 l -1.05 -0.7626 a 0.375 0.375 90 0 0 -0.4407 0 l -1.05 0.7626 c -0.294 0.2136 -0.6894 -0.0738 -0.5772 -0.4194 l 0.4014 -1.2345 a 0.375 0.375 90 0 0 -0.1365 -0.4194 L 1.1175 3.27 c -0.2937 -0.2136 -0.1425 -0.6789 0.2205 -0.6789 h 1.2978 a 0.375 0.375 90 0 0 0.3567 -0.2586 l 0.4014 -1.2345 z" />
        </svg>
      </div>
    </div>
  );
};

export default function GridLayout(props) {
  return (
    <div className="grid-layout container align-items-center px-1 pt-3 pb-5">
      {props.images.length > 0 ? (
        <div className="row no-gutters gallery-row justify-content-center">
          {props.images.map((img) => {
            let id;
            if (img.youtubeLink) id = youtube_parser(img.youtubeLink);
            else id = /[^/]*$/.exec(img.imageURL)[0];
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch img-col relative" /*added relative*/
                id={id}
                key={id}
              >
                <Link
                  to={`/gallery/${props.category}/piece/${id}`}
                  className="d-flex align-items-stretch flex-row"
                >
                  {img.award && <WinnerBadge award={img.award} />}
                  <Image
                    cloudName="masonwang"
                    publicId={
                      img.youtubeLink
                        ? `https://img.youtube.com/vi/${id}/0.jpg`
                        : img.imageURL
                    }
                    className="img-fluid gallery-image"
                    style={{ backgroundColor: "#152828" }}
                  />
                  <div className="title">
                    <span>
                      <i>{img.title}</i> by <b>{img.artist}</b>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center pt-5">
          Sorry, there are no results matching your search.
        </p>
      )}
    </div>
  );
}

function youtube_parser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}
