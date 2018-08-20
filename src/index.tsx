import * as React from "react";
import * as ReactDOM from "react-dom";
import SocketClient from './socketClient';
import { Root } from "./components/root";

const socket = new SocketClient(`${location.protocol}//${location.host}/?token=abc`);

socket.on('data', data => {
    ReactDOM.render(
        <Root />,
        document.getElementById("root")
    );
});