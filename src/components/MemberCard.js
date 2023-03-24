import React from 'react';
import './Styles.css';


const MemberCard = (props) => {
    const date = new Date(props.member.dob.date);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
    const genderMem = props.member.gender;

    return (
        <div className="row">
            <div className="col-10 offset-1">
                <div className="row">
                    <div className="card mb-3" style={{ backgroundColor: genderMem === 'male' ? 'white' : 'pink' }}>
                        <div className="row g-0">
                            <div className="col-md-1 mt-2">
                                <img src={props.member.picture.medium} alt="/" />
                            </div>
                            <div className="col-md-11">
                                <div className="card-body">
                                    <h5 className="card-title">{props.member.name.first} {props.member.name.last}</h5>
                                    <p className="valign-wrapper">
                                        <i className="material-icons" dangerouslySetInnerHTML={{ __html: "email" }}></i> {props.member.email}
                                    </p>
                                    <p className="valign-wrapper">
                                        <i className="material-icons" dangerouslySetInnerHTML={{ __html: "cake" }}></i> {formattedDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MemberCard;