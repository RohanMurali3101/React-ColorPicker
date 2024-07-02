import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const arr = ["#cf0606", "#07ed1e", "#073ded", "#e9ed07", "#ed07ed", "#07ede9", "#faa716", "#91276a", "#fcd0c7", "#28a745", "#e65f05", "#087bc7", "#4a1b07", "#f57842", "#164266", "#b89c12", "#6495ed","#ccccff","#800080","#ffffff"];

export class Container extends Component {
    constructor() {
        super();
        this.state = {
            color: "#28a745",
            toggle: false
        };
    }

    handleColor = () => {
        this.setState({
            toggle: true
        });
    }

    checkColor = (e) => {
        this.setState({
            color: e.target.style.backgroundColor,
            toggle: false
        });
    }

    render() {
        // Split array into two rows
        const firstRow = arr.slice(0, Math.ceil(arr.length / 2));
        const secondRow = arr.slice(Math.ceil(arr.length / 2));

        return (
            <div className='container-lg mt-1 px-5' style={{ height: "700px", backgroundColor: "#bfa3cc" }}>
                <h2 className='pt-5 d-flex justify-content-center fw-bolder'>Color Picker</h2>
                <div className="container-lg mt-3 border" style={{ height: "550px", borderRadius: "20px", boxShadow: "2px 2px 8px black", backgroundColor: this.state.color }}>
                    <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                        {this.state.toggle &&
                            <>
                                <div className='d-flex'>
                                    {firstRow.map((item, index) => {
                                        return (
                                            <button key={index} onClick={this.checkColor} className='mx-2 my-2 border-0' style={{ width: "50px", height: "50px", backgroundColor: item, boxShadow: "2px 2px 10px #3b383a" }}></button>
                                        );
                                    })}
                                </div>
                                <div className='d-flex'>
                                    {secondRow.map((item, index) => {
                                        return (
                                            <button key={index} onClick={this.checkColor} className='mx-2 my-2 border-0' style={{ width: "50px", height: "50px", backgroundColor: item, boxShadow: "2px 2px 10px #3b383a" }}></button>
                                        );
                                    })}
                                </div>
                            </>
                        }
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button id="clickButton" className='text-light border-0 px-3 py-2 mb-5' onClick={this.handleColor} style={{ backgroundColor: "green" }}>Pick a color</button>
                    </div>
                </div>
            </div>
        );
    }
}
