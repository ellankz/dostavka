import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getCategories, getServices } from '../actions';
import { Link } from 'react-router-dom';


const NavCategories = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getServices());
    }, [dispatch]);

    const [showCategories, setShowCategories] = useState(false);
    
    return (
        <div 
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
            className={showCategories ? 'ui dropdown item visible active' : 'ui dropdown item'}
            tabIndex="0">
        Категории
          <i className="dropdown icon"></i>
          <div className={showCategories? 'menu transition visible' : 'menu transition hidden'} tabIndex="-1">
            {props.categories.map((category) => (
            <Link 
                to={`/category/${category.nameKey}`} 
                className={props.activeCategory === category.nameKey ? 'item active' : 'item'}
                key={category.nameKey}>
                {category.title}
            </Link>
            ))}
          </div>
        </div>  
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        activeCategory: state.activeCategory
    };
}

export default connect(mapStateToProps, {})(NavCategories);