import React, { Component } from "react";

class Resume extends Component {
    render() {
        const works = [
            {
                company: "Major League Hacking",
                title: "Open Source Fellowship",
                location: "Remote",
                years: "Sep 2020 - Present",
                description: [
                    "Contributing to wide open source projects in a pod of 10 remote developers from around the world.",
                ],
            },
            {
                company: "CAE Inc.",
                title: "Software Engineering Intern",
                location: "Montréal, Québec",
                years: "May 2020 - August 2020",
                description: [
                    "Awarded Certificate of Excellence for algorithmic optimization.",
                    "Designed, improved and tested C++ APIs and internal tools, shipping them successfully into production.",
                    "Led a project to use a Git open-source library to manage configuration files used across over 50 flight simulation training sites worldwide.",
                ],
            },
            {
                company: "Tactio Health Group",
                title: "IoT Software Engineering Intern",
                location: "Montréal, Québec",
                years: "May 2019 - August 2019",
                description: [
                    "Worked on IoT Bluetooth data syncing between medical devices.",
                    "Partook in the design of a new Zigbee protocol.",
                    "Redesigned Android library to allow for Bluetooth multi-streaming.",
                    "Improved Android client apps with over 4.5M users.",
                ],
            },
        ].map(function (work) {
            return (
                <div key={work.title}>
                    <h3>{work.title}</h3>
                    <p className="info">
                        {work.company}
                        <span>&bull;</span>
                        <em className="date">{work.years}</em>
                        <br />
                        <em className="date">{work.location}</em>
                    </p>
                    {work.description.map((item) => {
                        return <li>{item}</li>;
                    })}
                    <br />
                </div>
            );
        });

        const awards = [
            "2019 - CAE Certificate of Excellence",
            "2019 - Most Practical Award in 'McGill Women in CS Hackathon'",
            "2018, 2019 - McGill Tomlinson Engagement Award for Mentorship",
        ].map((award) => {
            return <li>{award}</li>;
        });

        const courses = [
            {
                type: "Extracurricular",
                list: [
                    "Intro to Shopify App Development with React, Node & GraphQL(Udemy Course)",
                    "Vue JS & Firebase Course (Youtube)",
                ],
            },
            {
                type: "Undergraduate",
                list: [
                    "Operating Systems",
                    "Fault Tolerant Systems",
                    "Software Requirements Engineering",
                    "Data Structures and Algorithms",
                    "Model-Based Programming",
                    "Systems Programming",
                    "Signals and Networks",
                    "Computer Organization",
                ],
            },
        ].map((course) => {
            return (
                <div>
                    <h1 className="info"> {course.type}</h1>
                    {course.list.map((item) => {
                        return <li>{item}</li>;
                    })}
                    <br />
                </div>
            );
        });

        const skills = [
            "Java",
            "C/C++",
            "JavaScript (NodeJS, VueJS, React)",
            "Go",
            "Python (Pandas, openCV, NumPy, Matplotlib)",
            "C#",
        ].map(function (skill) {
            return <li>{skill}</li>;
        });

        const education = [
            {
                school: "McGill University",
                degree: "Software Engineering (B.Eng)",
                graduated: "Sep 2016 - May 2021 (Expected)",
                location: "Montréal, Québec",
            },
        ].map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <div className="info">
                        {education.degree}
                        <br />
                        <em className="date">{education.graduated}</em>
                        <br />
                        <em className="date">{education.location}</em>
                    </div>
                </div>
            );
        });

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Internships</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{works}</div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Awards</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{awards}</div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Courses</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{courses}</div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p className="info">
                            Here are some languages that I use day-to-day during
                            my internships and projects:
                        </p>
                        <div className="skills">{skills}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
