const Contact = () => {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        backgroundColor: '#f8f9fa',
        margin: 0,
        padding: '2rem',
        minHeight: '100%'
      }}
    >
      <div className="row" style={{ margin: 0 }}>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-4">Contact</h1>
          <p className="lead text-muted mb-4">
            Get in touch with us for any questions or support regarding ProdManage.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="bg-white rounded-3 p-4 shadow">
            <h4 className="mb-4">Contact Us</h4>
            <div className="mb-3">
              <strong>Address:</strong> 123 React Street, UI City, CA 90210
            </div>
            <div className="mb-3">
              <strong>Email:</strong> hello@prodmanage.com
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;