import React from 'react';
import './App.css';
import Display from "./Display";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            timeInDeciSeconds: 0,
            timeInSeconds: 0,
            timeInMinutes: 0,
            timerRunning: false,
            initiateReset: false,
            timerInterval: 0
        };
    }

    showZero = currValue => {
        if(currValue < 10){
            return "0";
        }else{
            return "";
        }
    };

    startTimer = () => {
        let timerInterval = setInterval(()=>{
            this.setState({
                timeInDeciSeconds : (this.state.timeInDeciSeconds + 1)
            },()=>{
                if(this.state.timeInSeconds > 59){
                    this.setState({
                        timeInDeciSeconds : 0,
                        timeInSeconds: 0,
                        timeInMinutes: (this.state.timeInMinutes + 1)
                    });
                }
                if(this.state.timeInDeciSeconds >99){
                    this.setState({
                        timeInDeciSeconds : 0,
                        timeInSeconds: (this.state.timeInSeconds + 1)
                    });
                }
            });
        },10);

        this.setState({
            timerRunning : true
        });
        return timerInterval;
    };

    pauseTimer = () => {
        clearInterval(this.state.timerInterval);
        this.setState({
            timerRunning : false
        });
    };

    resetTimer = () => {
      this.pauseTimer();
        this.setState({
            timeInDeciSeconds : 0,
            timeInSeconds: 0,
            timeInMinutes: 0,
        });
    };

    showStartPause = () => {
        if(this.state.timerRunning){
            return "Pause";
        }else{
            return "Start";
        }
    };

    runStartPause = () => {
        if(this.state.timerRunning){
            this.pauseTimer();
        }else{
            this.setState({
                timerInterval: this.startTimer()
            });
        }
    };

    render() {
        return (
            <header className="App-header">
                <Display minZero = {this.showZero(this.state.timeInMinutes)}
                         secZero = {this.showZero(this.state.timeInSeconds)}
                         deciSecZero = {this.showZero(this.state.timeInDeciSeconds)}
                         timeInMinutes = {this.state.timeInMinutes}
                         timeInSeconds = {this.state.timeInSeconds}
                         timeInDeciSeconds = {this.state.timeInDeciSeconds}
                />
                <div>
                    <button onClick={this.runStartPause}>{this.showStartPause()} </button>
                    <button onClick={this.resetTimer}> Reset</button>
                </div>
            </header>
        );

    }
}

export default App;
