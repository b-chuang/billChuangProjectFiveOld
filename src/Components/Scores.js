import React from 'react';
/* import './Scores.css' */

class Scores extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listOfNames.map(individualListItem => (
                        <li key={individualListItem.id}>
                            <h3>NAME:</h3>{individualListItem.currentTextValue} &#32; <h3>TIME:</h3> 
                            {individualListItem.count}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Scores;