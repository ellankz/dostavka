import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCategoriesTags = ({ service, categories }) => {
    return (
        <React.Fragment>
            {service.deliverableGroups.map((group) => {
                const category = categories.find(element => element.nameKey === group);
            if (category){
                return <Link to={`/category/${category.nameKey}`} className="ui label" key={category.nameKey}>{category.title}</Link>;
            }
            return null;
            })}
        </React.Fragment>
    );

}

export default ServiceCategoriesTags;