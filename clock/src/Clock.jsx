import React, {Component} from 'react';
import styles from "./Clock.module.scss";
import {ClockDetailed} from './ClockDetailed';

export class Clock extends React.Component {
    state = {
        dateTime: new Date(),
        iterator: 0,
        types: ['y/m/d h:m', 'yyyy-mm-dd hh:mm:ss', 'yyyy-MM-dd', 'yy-M-d', 'h:m:s', 'y-m-d h:m']
    };

    onClickChange() {
        let typesLength = this.state.types.length - 1;
        let iterator = this.state.iterator < typesLength ? this.state.iterator + 1 : 1;
        this.setState({dateTime: new Date()});
        this.setState({iterator: iterator});
    }

    renderClock() {
        const iterator = this.state.iterator;
        const types = this.state.types;
        const dateTime = this.state.dateTime;
        return <ClockDetailed {...{iterator, types, dateTime}}/>
    }

    render() {
        const clockJsx = this.renderClock();
        const iterator = 2;
        console.log(`${styles.control1}`);
        return <div className={`${styles.control2}`} onClick={() => this.onClickChange()}> {clockJsx}</div>;
    }
}


