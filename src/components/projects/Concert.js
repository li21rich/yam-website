import React from "react";
import "../../styles/pages/projects.scss";


export default function Concert() {
    return (
        <div className="gray-bg speakers">
            <div className="container pb-5">
                <div className="section-header justify-content-center text-center" style={{ marginTop: "5%" }}>
                    <h1>YAM Community Concert 2025</h1>
                    <br/>
                    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
                        <h5>The YAM community concert aims to bring the community together to enjoy talented local musicians -- from instrumentalists to vocalists to dancers of all ages in celebration of music and gratitude.</h5>
                    </div>
                    <br/>
                    <br/>
                    <div style={{ width: "80%", margin: "20px auto", overflow: "hidden", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
                        <a
                            href="https://lh6.googleusercontent.com/d/1fXy0mIceVT2DA0U39XwUz2dX4PCXlh7T"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://lh6.googleusercontent.com/d/1fXy0mIceVT2DA0U39XwUz2dX4PCXlh7T"
                                alt="YAM Community Concert 2025"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    transition: "transform 0.4s ease",
                                }}
                                className="concert-image"
                            />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
}
