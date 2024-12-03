import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const WinnerBadge = ({ award }) => {
  const { category, year } = award;
  return (
    <div className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md flex items-center gap-2">
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      {category} {year}
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
