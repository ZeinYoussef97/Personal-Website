import { Component } from "react"
import './amazon.css';

export class Amazon extends Component {
    render() {
        return (
            <div class="amazon-container">
                <div class="amazon-body">
                    <img style={{ 'max-width': '322px' }} src="/amazon.png" alt="amazon"/>
                    <div>
                        <h2>Software Development Engineer I</h2>
                        <ul>
                            <li>
                                Researched, designed and implemented code for the back-end of an automated accounting system
                            </li>
                            <li>
                                Worked in an Agile environment where code was deployed frequently to production environments
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
