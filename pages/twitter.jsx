import React from "react";
import Head from "../components/Head";

export default class Twitter extends React.Component {

    render = () => {
        return (
            <Head
                title="Twitter - APixel Visuals"
                description="Check out my Twitter."
                redirect="https://twitter.com/APixel_Visuals"
            />
        );
    };

};