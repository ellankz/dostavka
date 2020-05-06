import React from 'react';
import ServiceCategoriesTags from './ServiceCategoriesTags';

const ServiceContent = ({ service, categories }) => {
    const renderAddress = () => {
        return (
            <div className="item">
                <i className="home icon"></i>
                <div className="content">
                    <strong>Адрес: </strong>
                    {service.contact.address}
                </div>
            </div>
        );
    }
    const renderPhone = () => {
        return (
            <div className="item">
                <i className="phone icon"></i>
                <div className="content">
                    <strong>Телефоны:</strong>
                    <ul className="ui bulleted list">
                        {service.contact.phone.map((num) => <li key={num} className="item"><a href={`tel:${num}`}>{num}</a></li>)}
                    </ul>
                </div>
            </div>
        );
    }
    const renderCategories = () => {
        return (
            <div className="ui horizontal list">
                <ServiceCategoriesTags service={service} categories={categories} />
            </div>
        );
    }
    return (
    <div className="ui container service-single content vertical segment stripe">
        <h1>{service.name}</h1>
        <img src={service.picture} alt={service.name} className="ui image rounded" />
        <div className="ui divider"></div>
        <h3>Контакты</h3>
        <div className="ui list">
            <div className="item">
                <i className="users icon"></i>
                <div className="content">
                    <strong>Сайт: </strong>
                    <a href={service.website} rel="noopener noreferrer" target="_blank">{service.name}</a>
                </div>
            </div>
            {service.contact.address ? renderAddress() : null}
            {service.contact.phone ? renderPhone() : null}
        </div>
        {renderCategories()}       
      </div>
    );
}

export default ServiceContent;

