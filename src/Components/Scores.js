import React from 'react';
/* import './Scores.css' */

class Scores extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listOfNames.map(individualListItem => (
                        <li key={individualListItem.id}>
                            👀{individualListItem.currentTextValue} &#32; ⏲️{
                                individualListItem.count
                            }
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Scores;