import React, { Component } from "react";
import profImg from "../images/profilepic.jpg";

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profImg} alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p align="justify">
                            
                            I was born and raised in Cairo, Egypt. Growing up, I used to travel a lot with my family, 
                            where I got to experience a variety of cultures, languages and most importantly food from around the world.
                            Therefore, I developed an appreciation and taste for pretty much everything new!
                            As I prepare to embark on this next chapter of my life, I hope this website can act as a brief summary of 
                            what I've done with my time (professionally and not) so far!
                        </p>

                        <p>
                        📣🚨Since the start of the COVID-19 Pandemic, I've been building Shopify Stores and Admin Panels free of charge for 
                        local businesses looking to transition to online platforms during this rough time. Please email me at ahmed.elehwany@mail.mcgill.ca
                        if you are a local business that have been negatively impacted by the COVID-19 Pandemic.<br/>
                        🌈 Ca va bien aller. 🌈
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Ahmed Elehwany</span>
                                    <br />
                                    <span>Montréal, Quebéc</span>
                                    <br />
                                    <span>4389273816</span>
                                    <br />
                                    <span>ahmed.elehwany@mail.mcgill.ca</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a
                                        href="https://mcgill-my.sharepoint.com/:b:/g/personal/ding_ma_mail_mcgill_ca/ES82qOpc0I1OkmsnucwAxA0BDsvpo_O5e-qOCzPbdsXtKw?e=akagpW"
                                        className="button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        See PDF Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
