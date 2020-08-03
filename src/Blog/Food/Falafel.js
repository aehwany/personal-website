import React, { Component } from "react";
import falafel from "../../images/blog-falafel.jpg";

class Falafel extends Component {
    render() {
        return (
            <div id="interests">
                <div lassName="row">
                    <div className="column">
                        <h2>Falafel St Jacques</h2>
                        <br />
                        <p>
                            Do you ever feel so nostalgic that you would just
                            wish to go back in time and relive it again? Well,
                            if you’re an international student like me when I
                            first came to Montréal, then you definitely know
                            what I’m talking about.
                        </p>
                        <p>
                            Starting off your college life as an international
                            student is one of the most exciting times ever.
                            Although, the abrupt change in environment and
                            suddenly being thousands of miles away from home
                            might sometimes trigger a feeling of homesickness
                            and nostalgia. I have personally experienced this
                            feeling in my first couple of months in Montréal as
                            well as many other international students that I
                            met in my first year.
                        </p>
                        <p>
                            A very interesting fun fact I found out in my first
                            year was that food is one of the best things that
                            could make you still feel connected back to home and
                            to your loved ones. So in my case, I thought “hmm,
                            what food could possibly be better than Falafels to
                            make me feel home?!!” Only problem was all of the
                            falafels I had so far back then tasted nothing like
                            home, hence I couldn’t feel a connection. Until one
                            day, I went with a friend to a place called “Falafel
                            St Jacques”. You could tell from its name what I was
                            thinking. “Ah great.. another western falafel place
                            that had nothing to do with home. Surprisingly, this
                            time having breakfast there actually took me in a
                            trip back home, to the Middle East! With every
                            single bite, I could experience a memory, a place or
                            a person I was connected to. Sitting in their
                            terrace and smelling the hot falafel plates being
                            served felt just like home!
                        </p>
                        <p>
                            According to an article posted in 2018 by
                            <a
                                href="https://globalnews.ca/news/4106399/the-israeli-palestinian-duo-behind-falafel-st-jacques/"
                                target="_blank"
                            >
                                {" "}
                                globalnews.ca
                            </a>
                            , Falafel St. Jacques is owned by Ronen Baruch.
                            Baruch is Jewish and moved from Israel to Montreal
                            30 years ago. Always in the food business, he met
                            Saleh Seh in 2004. Seh is also from Israel but is an
                            Arab Muslim and identifies as a Palestinian. Baruch
                            quickly hired him and a few years ago, made Seh the
                            manager of his restaurant. The two say they realize
                            their relationship may seem odd, but for them, it’s
                            all they know. “The way we live everyday in Israel —
                            Israelis and Arabs they live together — day to day,”
                            said Baruch. The pair says their goal was to create
                            a space where every person, regardless of their
                            nationality or religion, can gather and eat. Though
                            the two won’t talk about politics, there is one
                            small thing they will both freely dispute. “That is
                            the big war, who the falafel belongs to,” laughed
                            Baruch.
                        </p>
                    </div>
                    <div className="column">
                        <img
                            style={{
                                "max-height": "600px",
                                "border-radius": "15px",
                                padding: "10px",
                            }}
                            src={falafel}
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Falafel;
