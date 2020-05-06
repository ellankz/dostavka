import React from 'react';
import ServiceList from './ServiceList';
import ListCategories from './ListCategories';


const Content = (props) => {
    return (
      <div className="ui container services-list content vertical segment stripe">
        <div className="ui grid">
          <div className="sixteen wide mobile ten wide tablet twelve wide computer column">
          <ServiceList urlparams={props.urlparams} />
          </div>
          <div className="mobile hidden six wide tablet four wide computer column">
            <ListCategories urlparams={props.urlparams} position="content"/>
          </div>
        </div>
      </div>
    );
}

export default Content;