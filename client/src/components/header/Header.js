import React from 'react';
import styled from 'styled-components';
import ProfileForm from '../forms/ProfileForm';
import { createProfile } from '../../state/profiles/thunks';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();

    const profileFormSubmit = (values) => {
        dispatch(createProfile(values));
    };

    return (
        <Container>
            <ProfileForm onSubmit={profileFormSubmit} />
        </Container>
    );
}

const Container = styled.div`
    min-width: 1200px;
    color: white;
    position: sticky;
    height: 100px;
    background-color: black;
`;

export default Header;
