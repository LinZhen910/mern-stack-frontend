import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductModal = ({ show, onClose, onSubmit, initialValues, isEdit = false, loading = false }) => {
  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Product name is required')
      .min(2, 'Product name must be at least 2 characters'),
    image: Yup.string()
      .required('Banner is required')
      .url('Please enter a valid URL'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be a positive number')
      .min(0.01, 'Price must be greater than 0'),
  });

  const defaultValues = { title: '', image: '', description: '', price: '' };

  if (!show) return null;

  return (
    <div 
      className="modal show d-block" 
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(5px)'
      }} 
      onClick={onClose}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div 
          className="modal-content border-0 shadow-lg rounded-4"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="modal-header border-0 pb-0">
            <div>
              <h4 className="modal-title fw-bold text-dark mb-1">
                {isEdit ? (
                  <>
                    <i className="bi bi-pencil-square me-2 text-primary"></i>
                    Edit Product
                  </>
                ) : (
                  <>
                    <i className="bi bi-plus-circle me-2 text-success"></i>
                    Add New Product
                  </>
                )}
              </h4>
              <p className="text-muted mb-0">
                {isEdit ? 'Update your product information' : 'Create a new product for your inventory'}
              </p>
            </div>
            <button 
              type="button" 
              className="btn-close bg-light rounded-circle p-2" 
              onClick={onClose} 
              disabled={loading}
              style={{
                width: '40px',
                height: '40px',
                opacity: 0.8
              }}
            ></button>
          </div>

          <Formik
            initialValues={initialValues || defaultValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              onSubmit(values);
              setSubmitting(false);
              if (!isEdit) resetForm();
            }}
            enableReinitialize={true}
          >
            {({ isSubmitting, values, errors, touched }) => (
              <Form>
                <div className="modal-body px-4 py-4">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="bi bi-tag-fill me-2 text-primary"></i>
                        Product Name <span className="text-danger">*</span>
                      </label>
                      <Field 
                        name="title" 
                        className={`form-control form-control-lg rounded-3 border-0 shadow-sm ${errors.title && touched.title ? 'is-invalid' : ''}`} 
                        placeholder="Enter product name"
                        disabled={loading}
                        style={{
                          backgroundColor: 'rgba(248, 249, 250, 0.8)',
                          padding: '12px 16px'
                        }}
                      />
                      <ErrorMessage name="title" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="bi bi-image-fill me-2 text-success"></i>
                        Banner URL <span className="text-danger">*</span>
                      </label>
                      <Field 
                        name="image" 
                        className={`form-control form-control-lg rounded-3 border-0 shadow-sm ${errors.image && touched.image ? 'is-invalid' : ''}`} 
                        placeholder="https://example.com/image.jpg"
                        disabled={loading}
                        style={{
                          backgroundColor: 'rgba(248, 249, 250, 0.8)',
                          padding: '12px 16px'
                        }}
                      />
                      <ErrorMessage name="image" component="div" className="invalid-feedback" />
                      {values.image && !errors.image && (
                        <div className="mt-3">
                          <div className="rounded-3 overflow-hidden shadow-sm">
                            <img 
                              src={values.image} 
                              alt="Preview" 
                              className="img-fluid"
                              style={{ 
                                maxHeight: '120px', 
                                width: '100%',
                                objectFit: 'cover'
                              }} 
                              onError={(e) => { 
                                e.target.style.display = 'none'; 
                              }} 
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="bi bi-text-paragraph me-2 text-info"></i>
                        Description <span className="text-danger">*</span>
                      </label>
                      <Field 
                        as="textarea" 
                        name="description" 
                        rows="4" 
                        className={`form-control form-control-lg rounded-3 border-0 shadow-sm ${errors.description && touched.description ? 'is-invalid' : ''}`} 
                        placeholder="Enter product description..."
                        disabled={loading}
                        style={{
                          backgroundColor: 'rgba(248, 249, 250, 0.8)',
                          padding: '12px 16px',
                          resize: 'none'
                        }}
                      />
                      <ErrorMessage name="description" component="div" className="invalid-feedback" />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="bi bi-currency-dollar me-2 text-warning"></i>
                        Price <span className="text-danger">*</span>
                      </label>
                      <div className="input-group input-group-lg">
                        <span 
                          className="input-group-text border-0 shadow-sm rounded-start-3"
                          style={{
                            backgroundColor: 'rgba(248, 249, 250, 0.8)',
                            color: '#6c757d',
                            fontWeight: '600'
                          }}
                        >
                          $
                        </span>
                        <Field 
                          type="number" 
                          name="price" 
                          step="0.01" 
                          min="0" 
                          className={`form-control border-0 shadow-sm rounded-end-3 ${errors.price && touched.price ? 'is-invalid' : ''}`} 
                          placeholder="0.00"
                          disabled={loading}
                          style={{
                            backgroundColor: 'rgba(248, 249, 250, 0.8)',
                            padding: '12px 16px'
                          }}
                        />
                        <ErrorMessage name="price" component="div" className="invalid-feedback" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer border-0 pt-0 px-4 pb-4">
                  <div className="d-flex gap-3 w-100">
                    <button 
                      type="button" 
                      className="btn btn-light btn-lg rounded-pill px-4 flex-fill"
                      onClick={onClose} 
                      disabled={loading}
                      style={{
                        backgroundColor: 'rgba(248, 249, 250, 0.8)',
                        border: '2px solid #e9ecef',
                        color: '#6c757d',
                        fontWeight: '600'
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-lg rounded-pill px-4 flex-fill"
                      disabled={isSubmitting || loading}
                      style={{
                        background: isEdit 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          : 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
                        border: 'none',
                        color: 'white',
                        fontWeight: '600',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                      }}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          {isEdit ? 'Updating...' : 'Adding...'}
                        </>
                      ) : (
                        <>
                          <i className={`bi ${isEdit ? 'bi-check-circle' : 'bi-plus-circle'} me-2`}></i>
                          {isEdit ? 'Update Product' : 'Add Product'}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
