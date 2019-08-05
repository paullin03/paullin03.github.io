import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="Contact">
                <h4>Contact</h4>
                <a class="footerLink" href="https://www.linkedin.com/in/paul-lin-3aa17b15a/" target="_blank">
                    <img src={require("./images/linkedin.png")}/>
                </a>

                <a class="footerLink" href="https://github.com/paullin03" target="_blank">
                    <img src={require("./images/github.png")}/>
                </a>

                <a class="footerLink" href="mailto:linpaul0328@gmail.com" target="_blank">
                    <img src={require("./images/email.png")}/>
                </a>
            </footer>
        );
    }
}

export default Footer;
