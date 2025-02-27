import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      Here we will have the free version of learning to read is fun
      Plus option to purchase
      <iframe
      src="/presentation/index.html" // Path to your exported HTML
      title="Keynote Presentation"
      width="100%"
      height="100%"
      style={{ border: 'none' }}
      allowFullScreen
    />
    </div>
  );
};

export default ProductPage;