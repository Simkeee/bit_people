import React from 'react';
import './Styles.css';


const Member = (props) => {
    const date = new Date(props.member.dob.date);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
    const genderMem = props.member.gender;

    return (
                <div className="card mb-3 members" >
                    <div  className="card membersCard">
                        <img src={props.member.picture.large} className="card-img-top imageCard" alt="/" ></img><h4 className='nameee'>{props.member.name.first} {props.member.name.last}</h4>
                        <div className="card-body cBody"style={{ backgroundColor: genderMem === 'male' ? 'white' : 'pink'}}>
                            <p className="card-text">{props.member.email}</p>
                            <p className="card-text">Birth date:{formattedDate}</p>
                        </div>
                    </div>
                </div>
    )
}
export default Member;