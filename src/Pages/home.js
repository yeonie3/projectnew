import React from 'react';
import '../css/App1_1.css';
import '../css/App1_2.css';
import '../css/App2.css';
import '../css/Home.css';
import Mback from "../components/Mback";
import App1_1 from "../components/App1_1";
import App1_2 from "../components/App1_2";
import App2 from "../components/App2";
import Board from '../Pages/Board';

function Home(props) {
    return (
        <>
            <Mback />
            <p>제일 먼저 보임</p>
            <div id="middle">
                <div id="middle-left">
                    <App1_1/>
                    <App1_2/>
                </div>
                <div id="middle-right">
                    <div id="middle-top">
                        <App2 />
                    </div>
                    <div id="middle-bottom">
                        <Board />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;