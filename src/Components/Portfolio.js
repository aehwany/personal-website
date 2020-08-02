import React, { Component, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import wisp from "../images/wisp.png";
import mizan from "../images/mizan.png";

class Portfolio extends Component {
    render() {
        const projects = [
            {
                title: "WISP Online",
                section: "wisp",
                description: [
                    "WISP Online is an online platform to track students' progress in Competitive Programming \
                    and provide gamification to facilitate the introduction of students to Competitive Programming. \
                    We hope to provide our own online judge in the near future. \
                    WISP is built with a Microservice Oriented Architecture on ExpressJS, with a VueJS frontend.",
                ],
                tech: ["Kubernetes - ", "ExpressJS - ", "MongoDB - ", "VueJS"],
                image: wisp,
                url:
                    "https://github.com/ding-ma/Projet-tude-de-cas-en-Qualit-de-l-air",
            },
            {
                title: "Marché Mizan (In Progress)",
                section: "mizan",
                description: [
                    "Mizan is a shopify website that I built for a local market to help them sustain their operations by facilitating remote online shopping \
                and minimize potential losses imposed by the COVID-19 situation. In addition to the website, I have also built a simplified user-friendly embedded application that acts as a customized admin panel  \
                to help manage running the store easily. The application interacts with the Shopify Admin API to carryout operations such as updating inventory, viewing received orders \
                and capturing authorized payments. We hope to post the application on the Shopify AppStore to be used by other local stores soon!",
                ],
                tech: [
                    "ReactJS - ",
                    "Polaris - ",
                    "NextJS - ",
                    "KoaJS - ",
                    "Google Maps Api",
                ],
                image: mizan,
                url: "https://github.com/ding-ma/Weather_Bulleting_Separator",
            },
            {
                title: "Treeple Tree Management System",
                section: "treeple",
                description: [
                    "Treeple is my first ever Web Project, it was developed as part of the ECSE 321 course at McGill University. \
                    It won Second Place out of over 20 groups during the semester \
                    Treeple is a system to manage trees and view sustainability information in the Greater Montreal Area. \
                    It has a monolithic Spring Boot Backend, a VueJS frontend and an Android Frontend!",
                ],
                tech: ["Spring Boot - ", "VueJS - ", "Android(Java)"],
                image:
                    "https://camo.githubusercontent.com/87bd964b9c19e914c17c9004f1e28f1f869f1031/68747470733a2f2f692e696d6775722e636f6d2f43367a466652682e706e67",
                url: "https://github.com/ding-ma/ECSE-223-Brick-Breaker",
            },
            {
                title:
                    "Automated Test Generation Techniques for Systems Engineering Tools",
                section: "dp",
                description: [
                    "As you can probably tell by the lengthy, descriptive title, this is a research project that I completed as part of my Capstone project. \
                    The objective of this project was to leverage the VIATRA Model Generator to improve the automation of tests for Systems Engineering tools. \
                    This project was a really great experience since I really love modelling and I had a chance to play around with models of a whole bunch of different languages as part of the project. \
                    We demonstrated, as a proof of concept, the use of the VIATRA Model Generator to help automate testing on Yakindu Statechart Tools. \
                    While I often hear complaints about how finnicky research is, and I got a taste of this during this project, I actually enjoyed that part of the process quite a bit - as it made the end-product quite a bit more enjoyable for me.",
                ],
                tech: [
                    "Eclipse Modelling Framework - ",
                    "Java (Xtend) - ",
                    "VIATRA - ",
                    "Constraint Programming",
                ],
                image: null,
                url: "https://github.com/ding-ma/mcgill-autoregistration",
            },
            {
                title: "Network Design CLI",
                section: "network",
                description: [
                    "This is a CLI I built for the final project for our course on Fault Tolerant Computing. \
                    It is a Python CLI that takes, as input, a list of network nodes and connections with various costs / reliabilities and outputs the optimal connected network design. \
                    This project was not necessarily the most difficutl I've had to do at my time at McGill, but I thoroughly enjoyed the course on Fault Tolerance and wanted to include it here!",
                ],
                tech: ["Python"],
                image: null,
                url: "https://github.com/ding-ma/portfolio",
            },
        ].map((project) => {
            return (
                <section id={project.section}>
                    <h1>{project.title}</h1>
                    {project.description.map((item) => {
                        return <p>{item}</p>;
                    })}
                    <p>
                        <b>Technologies: </b> {project.tech.map((item) => item)}
                    </p>
                    {project.image ? (
                        <img
                            style={{
                                "max-height": "450px",
                                "border-radius": "15px",
                                padding: "10px",
                            }}
                            src={project.image}
                            alt=""
                        ></img>
                    ) : null}
                    <hr />
                </section>
            );
        });

        return (
            <section id="portfolio">
                <nav id="nav-ver">
                    <ul>
                        <li>
                            <a className="smoothscroll" href="#wisp">
                                Wisp Online
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#mizan">
                                Marché Mizan
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#treeple">
                                TreePle
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#dp">
                                Capstone Project
                            </a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#network">
                                Network Designer
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="ten columns main-col">{projects}</div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
