import React, {Component} from 'react';
import styles from "./Clock.module.scss";

export class ClockDetailed extends React.Component {
    format = function date2str(x, y) {
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
        }.bind(this));

        return y.replace(/(y+)/g, function (v) {
            return x.getFullYear().toString().slice(-v.length)
        });
    }.bind(this);

    render() {
        const { iterator, types, dateTime} = this.props;
        return (
            <section>
                <h1 className={styles.clock}>{this.format(dateTime, types[iterator])}</h1>
            </section>
        );
    };
}


