import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const WinnerBadge = ({ award }) => {
  const { category, year } = award;
  return (
    <div className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
      <div className="relative">
        <svg
          className="w-1 h-1 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 20 20"
          fill="orange"
        >
          <path d="M 1.1311 0.3659 c 0.0375 -0.1151 0.2004 -0.1151 0.2377 0 l 0.1338 0.4115 a 0.125 0.125 90 0 0 0.1187 0.0862 h 0.4328 c 0.1211 0 0.1714 0.155 0.0735 0.2263 l -0.35 0.2542 a 0.125 0.125 90 0 0 -0.0455 0.1398 l 0.1338 0.4115 c 0.0375 0.1151 -0.0944 0.211 -0.1925 0.1398 l -0.35 -0.2542 a 0.125 0.125 90 0 0 -0.1469 0 l -0.35 0.2542 c -0.098 0.0712 -0.2298 -0.0246 -0.1924 -0.1398 l 0.1338 -0.4115 a 0.125 0.125 90 0 0 -0.0455 -0.1398 L 0.3725 1.09 c -0.0979 -0.0712 -0.0475 -0.2263 0.0735 -0.2263 h 0.4326 a 0.125 0.125 90 0 0 0.1189 -0.0862 l 0.1338 -0.4115 z" />
          <path d="M 2.26 1.7072 L 7.54 1.7072 L 7.54 1.9448 L 2.26 1.9448 L 2.26 1.7072" />
        </svg>
        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-1 rounded">
          {category} {year}
        </span>
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
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch img-col"
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
