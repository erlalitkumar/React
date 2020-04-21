import React from 'react';
import {Container} from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import ProfileImage from "./components/ImageComponent";
import NameComponent from "./components/NameComponent";

class App extends React.Component {
    render() {
        return (
            <Container fluid="xl">
                <HeaderComponent/>
                <ProfileImage/>
                <NameComponent/>
            </Container>
        );
    }
}

export default App;
