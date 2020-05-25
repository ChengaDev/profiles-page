import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import { fetchProfiles } from '../state/profiles/thunks';
import Profile from './Profile';
import Header from './header/Header';
import EditProfileModal from './modal/EditProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { allProfilesSelector } from '../state/profiles/selectors';
import { updateProfile } from '../state/profiles/thunks';
import { showErrorAlertSelector } from '../state/alerts/selectors';

function App() {
    const dispatch = useDispatch();
    const [shouldDisplayEditModal, setShouldDisplayEditModal] = useState(false);
    const [profileForEdit, setProfileForEdit] = useState(null);
    const profiles = useSelector(allProfilesSelector);
    const showErrorAlert = useSelector(showErrorAlertSelector);

    useEffect(() => {
        dispatch(fetchProfiles());
    }, [dispatch]);

    const onEdit = (profile) => {
        setProfileForEdit(profile);
        setShouldDisplayEditModal(true);
    };

    const onModalClose = () => {
        setShouldDisplayEditModal(false);
    };

    const onModalApprove = (updatedProfile) => {
        dispatch(updateProfile(updatedProfile));
        setShouldDisplayEditModal(false);
    };

    return (
        <>
            {showErrorAlert && (
                <Alert variant='danger'>
                    An error occured while processing your request
                </Alert>
            )}
            <Header />
            <Content>
                {profiles &&
                    profiles.map((profile, index) => (
                        <Profile
                            onEdit={() => {
                                onEdit(profile);
                            }}
                            key={index}
                            profile={profile}
                        />
                    ))}
            </Content>
            {profileForEdit && (
                <EditProfileModal
                    profile={profileForEdit}
                    handleClose={onModalClose}
                    handleOK={onModalApprove}
                    show={shouldDisplayEditModal}
                />
            )}
        </>
    );
}

const Content = styled.div`
    padding-right: 10%;
    padding-left: 10%;
    background-color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    @media (max-width: 1200px) {
        margin-top: 30px;
        padding-right: 5%;
        padding-left: 5%;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

export default App;
