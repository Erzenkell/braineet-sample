import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
    position: relative;
`;
export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 45px;
    height: 25px;
    border-radius: 15px;
    background: #000000;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 19px;
        height: 20px;
        margin: 3px;
        background: #ffffff;
        transition: 0.2s;
    }
`;

export const CheckBox = styled.input`
    opacity: 0;
    width: 50px;
    height: 15px;
    &:checked + ${CheckBoxLabel} {
        background: #44c452;
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 19px;
            height: 20px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;

// export const LabelText = styled.text`
//     color: #44C452;
//     font: 1em, poppins;
// `;
