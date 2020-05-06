import React from 'react';
import { Link } from 'react-router-dom';


const ListCategoryItem = (props) => {
    const { nameKey, title, count } = props.category;
    return (
        <Link className={!props.active || props.listPosition === "footer" ? 'item' : 'active teal item'} to={`/category/${nameKey}`} key={nameKey}>
            {title}
            {props.listPosition === "content" &&
                <div className={!props.active ? 'ui label' : 'ui teal left pointing label'}>{count}</div>
            }
        </Link>
    );
}

export default ListCategoryItem;