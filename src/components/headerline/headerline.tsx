/* eslint-disable @typescript-eslint/no-useless-constructor */

import React, { Component } from "react";
import { HeaderLineContainer } from "./headerlineStyle";
import PropTypes from "prop-types";

interface ItempArr {
    fName: string,
    lName: string,
    email: string,
    age: number,
    onlineStatus: boolean,
}

interface HeaderLineProps {
    header: string;
    desc: string;
    tempArr: ItempArr[];
}


class HeaderLine extends Component<React.PropsWithChildren<HeaderLineProps>> {
    static propTypes = {
        header: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        tempArr: PropTypes.arrayOf(PropTypes.shape({
            fName: PropTypes.string.isRequired,
            lName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            onlineStatus: PropTypes.bool.isRequired,
        })).isRequired,
    }
    constructor(props: HeaderLineProps) {
        super(props);
    }
    render() {
        const { header, desc } = this.props;

        return (
            <HeaderLineContainer data-test="HeadlineComponent">
                {
                    header && <h1 data-test="header">{header}</h1>
                }
                {
                    desc && <p data-test="desc">{desc}</p>
                }
            </HeaderLineContainer>
        )
    }
}

export default HeaderLine;