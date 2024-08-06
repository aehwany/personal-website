import React, {Component} from 'react';

class Footer extends Component {
    render() {
        const networks = [
            {
                "name": "linkedin",
                "url": "https://www.linkedin.com/in/ahmed-elehwany",
                "className": "fa fa-linkedin-square"
            },
            {
                "name": "github",
                "url": "https://github.com/aehwany",
                "className": "fa fa-github"
            }
        ].map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}/></a>
            </li>
        });

        return (
            <footer className="footer">

                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"/></a></div>
                </div>
                <div className="row">
                    <p>Made with ❤️ by <b>Ahmed Elehwany</b> - ©️ 2022</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
