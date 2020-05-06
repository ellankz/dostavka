import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getServices, getCategories } from '../actions';
import Navigation from './Navigation';
import ServiceContent from './ServiceContent';
import Footer from './Footer';

const ServicePage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServices());
        dispatch(getCategories());
    }, [dispatch]);
    if (props.services.length > 0){
        const service = props.services.find((element) => {
            return (element.id === props.id);
        });
        return (
            <React.Fragment>
                <Navigation />
                <ServiceContent service={service} categories={props.categories}/>
                <Footer />
            </React.Fragment>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        services: state.services,
        id: ownProps.match.params.id,
        categories: state.categories
    };
}

export default connect(mapStateToProps, {})(ServicePage);