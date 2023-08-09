import { Component } from "react"
import './header.css';


export class Header extends Component {
    render() {
        return (
            <div class="header-container">
                <a>My Experience</a>
                <a>Testimonials</a>
            </div>
        );
    }
}
