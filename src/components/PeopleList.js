import React, { useState } from 'react';
import Member from './Member';
import MemberCard from './MemberCard';
import './Styles.css';

const PeopleList = ({ text, people }) => {
    const [query, setQuery] = useState('');

    const allPeople = people
        .filter((member) =>
            member.name.first.toLowerCase().includes(query.toLowerCase())
        )
        .map((member, index) =>
            text === 'view_list' ? (
                <MemberCard key={index} member={member} />
            ) : (
                <Member key={index} member={member} />
            )
        );

    const filteredData = people.filter((item) => item.gender === 'male');
    const countMen = filteredData.length;

    return (
        <div className="container-fluid mt-3">
            <form className="row">
                <div id="searchWrap" className="col-10 offset-1">
                    <i className="material-icons prefix">search</i>
                    <input
                        id="search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                        placeholder="Search users"
                    />
                </div>
            </form>
            <div className="row ml-auto" id="numbMF">
                Male: {countMen} Female: {15 - countMen}
            </div>
            <div>
                {allPeople}
            </div>
        </div>
    );
};

export default PeopleList;

