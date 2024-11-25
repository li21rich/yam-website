import React from "react";
import { Image } from "cloudinary-react";

export default function Profile(props) {
  let escapedName = props.name.replace(/\s+/g, "-").toLowerCase();
  let firstName = props.name
    .substring(0, props.name.indexOf(" "))
    .toLowerCase();
  let lastInitial = props.name
    .substring(1+props.name.indexOf(" "),2+props.name.indexOf(" "))
    .toLowerCase();
  const isCloudinary = props.imageURL?.includes('cloudinary') ?? true;

  return (
    <div className="col-lg-3 col-sm-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
          {isCloudinary ? (
            <Image
              cloudName="masonwang"
              publicId={
                props.imageURL
                  ? props.imageURL
                  : `https://res.cloudinary.com/masonwang/image/upload/v1595421639/yam-website/team/${escapedName}`
              }
              className="img-fluid"
              style={{ backgroundColor: "#152828" }}
            />
          ) : (
            <div className="local-profile">
              <img
                className="img-fluid"
                src={props.imageURL}
                alt=""
              />
            </div>
          )}
          <div className="social">
            {props.facebook && (
              <a
                href={props.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            )}
            {props.linkedin && (
              <a
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            )}
            {props.github && (
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            )}
            {props.instagram && (
              <a
                href={props.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            )}
            {props.instagram2 && (
              <a
                href={props.instagram2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            )}
            <a
              href={`mailto:${props.email || `${firstName}${lastInitial}.youthartsmovement@gmail.com`}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{props.name}</h4>
          <span>{props.position}</span>
        </div>
      </div>
    </div>
  );
}
