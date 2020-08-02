import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Interests from "./Components/Interests";
import Portfolio from "./Components/Portfolio";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

class App extends Component {
    handleNotificationSuccess = () => {
        store.addNotification({
            title: "Email Sent!",
            message: "I will contact you as soon as possible!",
            type: "success",
            container: "top-right",
            insert: "bottom",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeout"],
            dismiss: {
                duration: 7000,
                showIcon: true,
                pauseOnHover: true,
            },
            width: 300,
        });
    };

    render() {
        return (
            <div className="App">
                <ReactNotification />
                <Header />
                <About handleNotification={this.handleNotificationSuccess} />
                <Resume />
                <Portfolio />
                <Interests />
                <Footer />
            </div>
        );
    }
}

export default App;
