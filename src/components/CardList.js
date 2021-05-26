
import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <> 
        {
            robots.map((user, i) => {
                return (
                    <Card  
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        username={robots[i].username} 
                        class={robots[i].class} 
                        />
                );
                })
        }
        </>
    );
}
export default CardList;