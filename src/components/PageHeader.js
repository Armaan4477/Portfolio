import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
