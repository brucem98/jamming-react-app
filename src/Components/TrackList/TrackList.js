import React from "react";
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* You will add a map method that renders a set of Track components  */}
                <ul>
                    <li>Enemies - Rich Brian</li>
                    <li>Sofia - Tiny Meat Gang</li>
                    <li>ZUU - Denzel Curry</li>
                </ul>
            </div>
        );
    }
}