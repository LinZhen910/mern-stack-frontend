import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// test
const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full Name is required'),
  
  email: Yup.string()
    .email('Must be a valid email format')
    .required('Email is required'),
  
  phone: Yup.string()
    .matches(/^\d{10,15}$/, 'Phone must contain 10 to 15 digits only')
    .required('Phone is required'),
  
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirm Password must match the Password field')
    .required('Confirm Password is required')
});

const Register = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // 模拟注册过程
    setTimeout(() => {
      console.log('Registration Data:', values);
      toast.success('Registration successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="card shadow-lg"
        style={{
          width: '100%',
          maxWidth: '500px',
          border: 'none',
          borderRadius: '15px'
        }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Sign Up</h2>
            <p className="text-muted">Create your account to get started</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                {/* Full Name Field */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-semibold">
                    <i className="bi bi-person me-2"></i>Full Name
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-control ${errors.fullName && touched.fullName ? 'is-invalid' : ''}`}
                    placeholder="Enter your full name"
                    style={{ borderRadius: '8px', padding: '12px' }}
                  />
                  <ErrorMessage name="fullName" component="div" className="invalid-feedback" />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    <i className="bi bi-envelope me-2"></i>Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                    placeholder="Enter your email"
                    style={{ borderRadius: '8px', padding: '12px' }}
                  />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>

                {/* Phone Field */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    <i className="bi bi-telephone me-2"></i>Phone
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`}
                    placeholder="Enter your phone number"
                    style={{ borderRadius: '8px', padding: '12px' }}
                  />
                  <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    <i className="bi bi-lock me-2"></i>Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                    placeholder="Enter your password"
                    style={{ borderRadius: '8px', padding: '12px' }}
                  />
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label fw-semibold">
                    <i className="bi bi-lock-fill me-2"></i>Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                    placeholder="Confirm your password"
                    style={{ borderRadius: '8px', padding: '12px' }}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 fw-semibold"
                  style={{
                    borderRadius: '8px',
                    padding: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    fontSize: '16px'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-person-plus me-2"></i>
                      Sign Up
                    </>
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <div className="text-center mt-4">
            <p className="text-muted mb-0">
              Already have an account? 
              <a href="#" className="text-decoration-none ms-1" style={{ color: '#667eea' }}>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;