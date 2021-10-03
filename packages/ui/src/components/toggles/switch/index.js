import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxWrap, CheckBoxLabel, CheckBox } from './styles';

export const Switch = Prop => {
    const { checked } = Prop;
    const { label } = Prop;

    return (
        <div>
            <CheckBoxWrap>
                {checked === true ? (<CheckBox id="checkbox" type="checkbox" disabled />) : (<CheckBox id="checkbox" type="checkbox" />)}
                {/* <LabelText> */}
                {label}
                {/* </LabelText> */}
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrap>
        </div>
    );
};

Switch.propTypes = {
    checked: PropTypes.bool,
    label: "checked",
};

Switch.defaultProps = {
    label: 'This is a label',
};

export default Switch;
