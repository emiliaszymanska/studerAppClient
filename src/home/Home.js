import React from 'react';
import Hero from "./common/Hero";
import Fundamentals from "./common/Fundamentals";
import FirstFeature from "./common/FirstFeature";
import SecondFeature from "./common/SecondFeature";
import Closing from "./common/Closing";

function Home() {
    return (
        <>
            <Hero />
            <Fundamentals />
            <FirstFeature />
            <SecondFeature />
            <Closing />
        </>
    );
}

export default Home;