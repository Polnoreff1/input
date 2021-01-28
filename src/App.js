import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import React, {Component} from "react";


let yach = <tr></tr>;

let row = <td></td>;


//var twiceNumbers = numbers.map(x => x * 2); // [ 2, 6, 10 ]


const numbers = [1, 2, 3, 4,];
const listItems = numbers.map((numbers) =>
    <div>
        <table>
            <tr>
                <td>lamel</td>
                <td>lamel</td>
                <td>lamel</td>
                <td>lamel</td>

            </tr>
        </table>
    </div>
);


let Colum = null;
let Row = null;

function TextField(props) {


    return (
        <div>
            <p>Столбцы</p>
            <input value={props.value} onChange={e => props.set_value(e.target.value) } id="Col"></input>
        </div>
    );
}


function App() {
    const [width, set_width] = useState("");
    const [height, set_height] = useState("");
    return (
        <div>
            <header>
                <form>
                    <table>
                        <tr>
                            <td><p>Введите размерность таблицы &nbsp;&nbsp;&nbsp; </p></td>
                            <td>
                                <TextField value = {height} set_value = {set_height} ></TextField>
                            </td>
                            <td>
                                <TextField value = {width} set_value = {set_width}></TextField>
                            </td>
                            <td>
                                <button onClick={()=>show(width,height)}>Вывод</button>
                            </td>
                        </tr>
                    </table>
                    <div>{
                        //ReactDOM.render(
                        //<div>{listItems}</div>,
                        //document.getElementById('root'))
                    }</div>
                </form>

            </header>
        </div>
    );

    // const numbers1 = [1, 2, 3, 4, 5];
    // const numbers2 = [1, 2, 3, 4, 5];
    //
    // const td = numbers1.map((numbers1) =>
    //     <td>{numbers1}</td>
    // );
    //
    // const tr = numbers2.map((numbers2) =>
    //     <tr>{td}</tr>
    // );
    //
    // ReactDOM.render(
    //     <table>{td}{tr}</table>,
    //     document.getElementById('root')
    // );

}

function show(width, height){
    alert(width);
    alert(height);
}

export default App;
