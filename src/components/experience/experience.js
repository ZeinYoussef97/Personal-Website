import { Component } from "react"
import { RocketMortgage } from "./rocket-mortgage/rocket-mortgage";
import { Amazon } from "./amazon/amazon";
import './experience.css';

export class Experience extends Component {
    render() {
        return (
            <div>
                <div class="experience-title">
                    <h1>My Experience</h1>
                </div>
                <RocketMortgage/>
                <Amazon/>
            </div>
        );
    }
}
