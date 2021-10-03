/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    ButtonStyled,
    Container,
    InputBar,
    LabelStyled,
    MyContainer,
    SubMenu,
    Title,
} from './styles';

const MyHome = ({ data }) => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState(data.data.getProject.title);

    useEffect(() => {
        setTitle(data.data.getProject.title);
    }, [data]);

    const change = e => {
        setTitle(e.target.value);
    };

    return (
        <>
            <LabelStyled htmlFor="myTitle">Choose your title</LabelStyled>
            <InputBar id="myTitle" value={title} onChange={change} />
            <Container>
                <Title>{title}</Title>
                <MyContainer>
                    <ButtonStyled onClick={() => setOpenModal(!openModal)}>
                        {openModal ? 'Close the modal' : 'Open the modal'}
                    </ButtonStyled>
                </MyContainer>
            </Container>
            {openModal ? (
                <SubMenu>
                    <ul>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                        <li>This is the sub menu</li>
                    </ul>
                </SubMenu>
            ) : null}
        </>
    );
};

MyHome.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MyHome;
