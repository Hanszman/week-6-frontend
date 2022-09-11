import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './styles.css';

export default class Main extends Component {
    render() {
        return (
            <div id="main-container">
                <form action="">
                    <img src={logo} alt="" />
                    <input placeholder="Criar um box" />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}