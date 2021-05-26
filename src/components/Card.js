import React from 'react';

const Card = ({ name, username, id }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw shadow-5'> 
            <img alt='robots' src={`https://robohash.org/${id}?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
    );
}
// Added text center, bakground light green, dib?, boarder 3, padding3, margins 2, grow animation, bw?, shadow
export default Card;