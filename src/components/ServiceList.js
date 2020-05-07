import React, { useEffect } from 'react';
import ServiceListItem from './ServiceListItem';
import { getServices } from '../actions';
import {connect, useDispatch} from 'react-redux';


const ServiceList = (props) => {
    const dispatch = useDispatch();
    const category = props.category || null;

    useEffect(() => {
        dispatch(getServices(category));
        window.scrollTo(0, 0);
    }, [category, dispatch]);
    return (    
        <div className="ui divided items">
            {props.services.map((service) => <ServiceListItem service={service} key={service.id}/>)}
        </div>   
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        services: state.services,
        category: ownProps.urlparams,
    };
}

export default connect(mapStateToProps, {})(ServiceList);