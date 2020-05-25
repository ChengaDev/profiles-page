import React from 'react';
import { validationSchema } from '../../validationSchemas/ProfileForm';
import { Formik } from 'formik';
import { Button, Form, Col } from 'react-bootstrap';
import styled from 'styled-components';

function ProfileForm({ onSubmit }) {
    return (
        <FormWrapper>
            <Formik
                onSubmit={(values) => onSubmit({ ...values })}
                validationSchema={validationSchema()}
                initialValues={{
                    name: '',
                    bio: '',
                    fb_id: ''
                }}
            >
                {({ handleSubmit, values, handleChange, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} xs='2'>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.name}
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                            </Form.Group>
                            <Form.Group as={Col} xs='2'>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.bio}
                                    type='text'
                                    name='bio'
                                    placeholder='Bio'
                                    isValid={touched.bio && !errors.bio}
                                    isInvalid={!!errors.bio}
                                />
                            </Form.Group>
                            <Form.Group as={Col} xs='2'>
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.fb_id}
                                    type='text'
                                    name='fb_id'
                                    placeholder='Facebook id'
                                    isValid={touched.fb_id && !errors.fb_id}
                                    isInvalid={!!errors.fb_id}
                                />
                            </Form.Group>
                            <Button variant='success' type='submit'>
                                Create
                            </Button>
                        </Form.Row>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    .form-row {
        margin-right: 0;
        margin-left: 0;
    }

    padding-top: 25px;
    padding-left: 100px;
    & button {
        height: 48px;
        line-height: 20px;
    }
`;

export default ProfileForm;
