import React, { FC } from 'react';
import { MainButton } from "./style";

const Button = (props: { text?: string, classes?: string }) => {
    return (
        <button>
            <MainButton className={props.classes}>{props.text}</MainButton>
        </button>
    );
};

export default Button;