import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <h1>Preview</h1>
      {/* Here we will have the free version of learning to read is fun
      Plus option to purchase */}
      <iframe
        src="/presentation/index.html" // Path to your exported HTML
        // src="/presentation/quicktest.pptx"
        title="Keynote Presentation"
        width="60%"
        height="500px"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default ProductPage;