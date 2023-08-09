import { Component } from "react"
import './rocket-mortgage.css';

export class RocketMortgage extends Component {
    render() {
        return (
            <div class="rocket-mortgage-container">
                <div class="rocket-mortgage-body">
                    <div>
                        <h2>Associate Software Engineer</h2>
                        <ul>
                            <li>
                                Developed web applications using popular web technologies including Angular 12 and NodeJS
                            </li>
                            <li>
                                Worked with IAC to facilitate the automated deployment of code to production environments
                            </li>
                            <li>
                                Experienced with dotnet core and using it to make calls to an AWS RDS database
                            </li>
                        </ul>
                    </div>
                    <img style={{ 'max-width': '322px' }} src="/rocket-mortgage.png" alt="rocket-mortgage"/>
                </div>
            </div>
        );
    }
}
