import React, { Component } from "react";
import { Link } from "react-router-dom";
import squash from "../images/squash.jpg";
import volunteering from "../images/volunteering.jpg";
import iskender from "../images/iskender.jpg";
import falafel from "../images/falafel.jpeg";
import ripples from "../images/ripples.jpg";
import sanfrancisco from "../images/sanfrancisco.jpeg";
import egypt from "../images/egypt.jpeg";
import berlin from "../images/berlin.jpeg";
import lebanon from "../images/lebanon.jpeg";
import Egypt from "../Blog/Travel/Egypt.js";

class Interests extends Component {
    render() {
        const food = [
            {
                title: "Falafel St Jacques",
                category: "Quality Middle Eastern Vegetarian Cuisine",
                image: falafel,
                url: "/interests/food/falafel",
            },
            {
                title: "Ripples",
                category: "Montreal's award winning, best homemade ice cream",
                image: ripples,
                url: "/interests/food/ripples",
            },
            {
                title: "Kebab Express",
                category: "Authentic Turkish Cuisine",
                image: iskender,
                url: "/interests/food/kebabexpress",
            },
        ].map((item) => {
            return (
                <div key={item.title} className="columns portfolio-item">
                    <Link to={item.url}>
                        <div className="item-wrap">
                            <img alt={item.title} src={item.image} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{item.title}</h5>
                                    <h4>{item.category}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });

        const travel = [
            {
                title: "Local Travels",
                category:
                    "Tb to my summer 2016 in Egypt travelling with my highschool friends to Red Sea destinations and Luxor.",
                image: egypt,
                url: "/interests/travel/egypt",
            },
            {
                title: "Europe",
                category:
                    "Tb to my summer 2015 spent between Germany, France and Austria.",
                image: berlin,
                url: "/interests/travel/europe",
            },
            {
                title: "Middle East",
                category:
                    "A compiled album of my travels in the middle east to Lebanon, Algeria and Saudi Arabia.",
                image: lebanon,
                url: "/interests/travel/middleeast",
            },
            {
                title: "America",
                category:
                    "A Compiled album of my visits to New York, Florida and San Francisco",
                image: sanfrancisco,
                url: "interests/travel/america",
            },
        ].map((item) => {
            return (
                <div key={item.title} className="columns portfolio-item">
                    <Link to={item.url}>
                        <div className="item-wrap">
                            <img alt={item.title} src={item.image} />
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{item.title}</h5>
                                    <h4>{item.category}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });

        return (
            <section id="interests">
                <div className="row">
                    <div className="column">
                        <h1>Squash</h1>
                        <p>
                            Since I held my first racquet 8 years ago, I fell in
                            love with squash right away. I’ve been playing
                            regularly since then and Squash became a big part of
                            my life. Joining the McGill Varsity Squash team has
                            been one of the highlights of my college years.
                            Throughout the year, I participate in inter-school
                            varsity tournaments and travel with team to
                            represent McGill in the away tournaments. From time
                            to time, I also play for McGill in the Montreal
                            Squash League where I get to meet a lot of Quebec's
                            young talents and cool squash enthusiasts who share
                            my passion for the sport which gets me even more
                            thrilled about it day after day.
                        </p>
                    </div>
                    <div className="column">
                        <img
                            style={{
                                "max-height": "450px",
                                "border-radius": "15px",
                                padding: "10px",
                            }}
                            src={squash}
                        ></img>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="column">
                        <h1>Volunteering</h1>
                        <p>
                            During my time back in Egypt, I used to spend much
                            of my time volunteering at the Egyptian Charity
                            Organization for Supporting Cancer Patients. I
                            decided the join the organization shortly after
                            witnessing the daily struggles of that disease being
                            reflected in a close one in my family. I realized
                            that unlike a lot of people might think, patients
                            fighting this disease tend to struggle with moral
                            support and motivational drive more than the
                            physical therapy itself. I was in charge of planning
                            weekly bike rides for cancer patients to engage them
                            in building social connection and gain experience
                            and motivation from other fighters who’ve been
                            bravely fighting the disease for long years. I was
                            also in charge of the social media of the
                            organization to make it more representative and
                            informative for the followers.
                        </p>
                    </div>
                    <div className="column">
                        <img
                            style={{
                                "max-height": "450px",
                                "border-radius": "15px",
                                padding: "10px",
                            }}
                            src={volunteering}
                        ></img>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check out my food blog.</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {food}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check out my travel blog.</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {travel}
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <h1>Music</h1>
                    <div class="book-shelf">
                        <iframe
                            src="https://open.spotify.com/embed/playlist/44jwAWPFwRyjtfU4Sl4guW"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                        <iframe
                            src="https://open.spotify.com/embed/album/1jToVugwBEzcak8gJNZG2f"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                        <iframe
                            src="https://open.spotify.com/embed/album/5PVuX09frPq7AMYkkdcDfR"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                        <iframe
                            src="https://open.spotify.com/embed/album/1rVhockt4RAiZFaK3M3zPB"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                        <iframe
                            src="https://open.spotify.com/embed/playlist/73Tt0c2SXMJoF3tkmlQzmW"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                        <iframe
                            src="https://open.spotify.com/embed/playlist/14f9xlIENpOGspIQ3Vv3PP"
                            width="300"
                            height="380"
                            frameborder="0"
                            allowtransparency="true"
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interests;
