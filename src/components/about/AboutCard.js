import React from "react";

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-img">
        {Icon && <Icon className='icon-img' size="sm" />}
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default AboutCard;