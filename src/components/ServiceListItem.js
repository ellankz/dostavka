import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getCategories } from '../actions';
import { Link } from 'react-router-dom';
import ServiceCategoriesTags from './ServiceCategoriesTags';

const ServiceListItem = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    
    return (
        <div className="item" key={props.service.id}>
            <div className="image">
            <img src={props.service.picture} alt={props.service.name} />
            </div>
            <div className="content">
            <h4><Link to={`/service/${props.service.id}`} >{props.service.name}</Link></h4>
            <div className="meta">
                <span className="address">{props.service.contact.address}</span>
            </div>
            <div className="description">
                <p></p>
            </div>
            <div className="extra">
                <Link to={`/service/${props.service.id}`} className="ui right floated primary button teal">
                    Открыть
                <i className="right chevron icon"></i>
                </Link>
                <ServiceCategoriesTags service={props.service} categories={props.categories} />
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories,
        service: ownProps.service
    };
}

export default connect(mapStateToProps, {})(ServiceListItem);