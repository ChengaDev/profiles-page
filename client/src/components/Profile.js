import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProfile } from '../state/profiles/thunks';

function Profile({ profile, onEdit }) {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteProfile(profile._id));
    };

    return (
        <Container>
            <Content>
                <Username>{profile.name}</Username>
                <Button onClick={onDelete} id='deleteButton' variant='danger'>
                    <span className='material-icons'>delete</span>
                </Button>
                <Button onClick={onEdit} id='editButton' variant='primary'>
                    Edit
                </Button>
            </Content>
        </Container>
    );
}

const Username = styled.div`
    left: 30px;
    position: absolute;
    font-size: 20px;
`;

const Container = styled.div`
    padding-right: 30px;
    padding-left: 30px;
    box-sizing: border-box;
    height: 70px;
    line-height: 70px;
    margin-top: 30px;
    flex-basis: 33.33%;

    @media (max-width: 1350px) {
        flex-basis: 50%;
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        flex-basis: 100%;
        padding-right: 0;
        padding-left: 0;
    }

    & button#editButton {
        margin-top: 15px;
        height: 40px;
        line-height: 20px;
        position: absolute;
        right: 30px;
    }

    & button#deleteButton {
        margin-top: 15px;
        height: 40px;
        line-height: 20px;
        position: absolute;
        right: 100px;
    }
`;

const Content = styled.div`
    height: 100%;
    background-color: lightgray;
    width: 100%;
    position: relative;
    margin-top: 30px;

    @media (max-width: 1030px) {
        width: 300px;
    }

    @media (max-width: 800px) {
        margin-top: 30px;
        width: 100%;
    }
`;

export default Profile;
