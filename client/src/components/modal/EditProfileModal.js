import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { validationSchema } from '../../validationSchemas/ProfileForm';
import styled from 'styled-components';

function EditProfileModal({ handleClose, handleOK, show, profile }) {
    return (
        <Modal show={show} onHide={handleClose} animation={true} size='lg'>
            <Modal.Header closeButton>
                <Avatar
                    src={`https://graph.facebook.com/${profile.fb_id}/picture`}
                />
                <Modal.Title>Edit {profile.name}</Modal.Title>
            </Modal.Header>
            <Formik
                onSubmit={(values) => handleOK({ ...values, _id: profile._id })}
                validationSchema={validationSchema()}
                initialValues={{
                    name: profile.name,
                    bio: profile.bio,
                    fb_id: profile.fb_id
                }}
            >
                {({ handleSubmit, values, handleChange, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Modal.Body>
                            <Form.Group>
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
                            <Form.Group>
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
                            <Form.Group>
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
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant='primary' type='submit'>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
}

const Avatar = styled.img`
    border-radius: 50px;
    margin-right: 30px;
`;

export default EditProfileModal;
