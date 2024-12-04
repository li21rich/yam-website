import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import artists from "../../data/artists";
import {
  visualarts,
  photos,
  blm,
  creativewriting,
  music,
} from "../../data/galleries";

const WinnerBadge = ({ award }) => {
  const { category, color} = award;
  return (
    <>
      <span className="absolute top-0 right-2 -translate-y-6 bg-white px-1 rounded text-sm">
        {category}
      </span>
      <svg
        className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md w-1 h-1"
        viewBox="0 0 20 20"
        fill={color}>
        <path d="M 1.1311 0.3659 c 0.0375 -0.1151 0.2004 -0.1151 0.2377 0 l 0.1338 0.4115 a 0.125 0.125 90 0 0 0.1187 0.0862 h 0.4328 c 0.1211 0 0.1714 0.155 0.0735 0.2263 l -0.35 0.2542 a 0.125 0.125 90 0 0 -0.0455 0.1398 l 0.1338 0.4115 c 0.0375 0.1151 -0.0944 0.211 -0.1925 0.1398 l -0.35 -0.2542 a 0.125 0.125 90 0 0 -0.1469 0 l -0.35 0.2542 c -0.098 0.0712 -0.2298 -0.0246 -0.1924 -0.1398 l 0.1338 -0.4115 a 0.125 0.125 90 0 0 -0.0455 -0.1398 L 0.3725 1.09 c -0.0979 -0.0712 -0.0475 -0.2263 0.0735 -0.2263 h 0.4326 a 0.125 0.125 90 0 0 0.1189 -0.0862 l 0.1338 -0.4115 z" />
        <path d="M2.5 1.937 7.7 1.937 7.7 2.08 2.5 2.08 2.5 1.937" />
      </svg>
    </>
  );
};

export default function Piece() {
  const notFound = (
    <div className="404 page container text-center display-4">
      <div className="row">
        <div className="col mt-3">
          <span className="theme">404:</span> Not found.
        </div>
      </div>
    </div>
  );
  const pathTokens = useLocation().pathname.split("/");
  const category = pathTokens[2];
  const title = pathTokens[4];

  let data;
  if (category === "visualarts") data = visualarts;
  else if (category === "photography") data = photos;
  else if (category === "blm") data = blm;
  else if (category === "creativewriting") data = creativewriting;
  else if (category === "music") data = music;

  let piece;
  if (category === "music")
    piece = data.find((video) => video.youtubeLink.includes(title));
  else piece = data.find((image) => image.imageURL.endsWith(title));
  const artist = artists[piece.artist];
  const otherPiecesByArtist = data.filter((image) => {
    if (image.imageURL !== piece.imageURL) return image.artist === piece.artist;
    return false;
  });

  if (piece)
    return (
      <div className="piece page">
        <div className="main-container container">
          <div className="row d-none d-lg-block">
            <div className="col-12">
              <Link to={`/gallery/${category}`} className="button">
                <i className="fa fa-arrow-left"></i> Back to all
              </Link>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <Link
              to={`/gallery/${category}`}
              className="button d-block d-lg-none"
            >
              <i className="fa fa-arrow-left"></i> Back to all
            </Link>
            <div className="col-lg-6 col-12 text-center">
              <div
                className={
                  "card-gallery card-body text-center " +
                  (!piece.writing && !piece.youtubeLink && " text-lg-left")
                }
              >
                <h1>{piece.title}</h1>
                <h3> {/*anonymous compatible version*/}
                  By <span className="artist">{piece.artist}</span>
                  {piece.artist !== "Anonymous" && ` (${artist.age} as of first artwork exhibition on YAM)`}
                </h3>
                <p>{artist.school}</p> {/* was h1, h2, h3, now h1, h3, p*/}
                <a
                  href={piece.imageURL ? piece.imageURL : piece.youtubeLink}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {piece.youtubeLink ? "video" : "image"}{" "}
                  <i className="fa fa-external-link-square"></i>
                </a>
                <p className="description">{piece.description}</p>
                {piece.artist !== "Anonymous" && otherPiecesByArtist.length > 0 && (
                  <div className="other">
                    <p className="mb-2">
                      <b>
                        Other pieces by {piece.artist}:
                        <br />
                      </b>
                    </p>
                    {otherPiecesByArtist.map((otherPiece, index) => (
                      <span key={index} className="mb-2 block"> {/*changed from d-inline-block*/}
                        <Link
                          to={`/gallery/${category}/piece/${
                            otherPiece.imageURL.split("/").slice(-1)[0]
                          }`}
                        >
                          <span className="otherPiece">{otherPiece.title}</span>
                        </Link>
                      </span>
                    ))}
                  </div>
                )}
                {/*<h2>
                  By <span className="artist">{piece.artist}</span> (
                  {artist.age} at age of first exhibition)
                </h2>
                <h3>{artist.school}</h3>
                <a
                  href={piece.imageURL ? piece.imageURL : piece.youtubeLink}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {piece.youtubeLink ? "video" : "image"}{" "}
                  <i className="fa fa-external-link-square"></i>
                </a>
                <p className="description">{piece.description}</p>
                {otherPiecesByArtist.length > 0 && (
                  <div className="other">
                    <p className="mb-2">
                      <b>
                        Other pieces by {piece.artist}:
                        <br />
                      </b>
                    </p>
                    {otherPiecesByArtist.map((otherPiece, index) => (
                     <p> <span key={index} className="mb-2 d-inline-block">
                        <Link
                          to={`/gallery/${category}/piece/${
                            otherPiece.imageURL.split("/").slice(-1)[0]
                          }`}
                        >
                          <p> <span className="otherPiece">{otherPiece.title}</span> </p>
                        </Link>
                      </span> </p>
                    ))}
                  </div>
                )}*/}
              </div>
            </div>
            <div
              className={
                piece.writing || piece.youtubeLink
                  ? "img-col col-12 mt-4"
                  : "img-col col-lg-6 col-12 mt-4 mt-lg-0"
              }
            >

              <div className="relative">{piece.award && <WinnerBadge award={piece.award} />} </div>
              {piece.writing && (
                <div className="card-gallery px-2 py-4 writing">{piece.writing}</div>
              )}
              {!piece.writing && piece.imageURL && (
                <a
                  href={piece.imageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    cloudName="masonwang"
                    publicId={piece.imageURL}
                    className="img-fluid image"
                    style={{ backgroundColor: "#152828", maxwidth : "100%", height: "auto" }}
                  />
                </a>
              )}
              {piece.youtubeLink && (
                <div className="container card card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="screw-you-react-warnings"
                      className="embed-responsive-item"
                      src={`https://www.youtube.com/embed/${title}?rel=0`}
                      allowFullScreen
                      style={{ background: "#152828", borderRadius: "0.2em" }}
                    ></iframe>
                  </div>
                </div>
              )}
              {(piece.writing || piece.youtubeLink) && (
                <div className="text-center mt-2">
                  <Link to={`/gallery/${category}`} className="button">
                    <i className="fa fa-arrow-left"></i> Back to all
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  else return notFound;
}
