import React, { useEffect } from 'react';
import ListCategoryItem from './ListCategoryItem';
import { connect, useDispatch } from 'react-redux';
import { getCategories } from '../actions';
import { Link } from 'react-router-dom';


const ListCategories = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    
    return (
        <div className={props.position === "content" ? "ui vertical menu" : "ui inverted link list"}>
            <Link className={props.activeCategory || props.position === "footer" ? 'item' : 'active teal item'} to={`/`}>
                Все категории
                {props.position === "content" && 
                <div className={props.activeCategory ? 'ui label' : 'ui teal left pointing label'}>24</div>
                }  
            </Link>
            {props.categories.map((category) => <ListCategoryItem category={category} key={category.title} active={props.activeCategory === category.nameKey ? true : false} listPosition={props.position}/>)}  
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        activeCategory: state.activeCategory
    };
}

export default connect(mapStateToProps, {})(ListCategories);