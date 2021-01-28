import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {useState} from 'react';




    let yach=<tr></tr>;

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

function Tb(props)
{

}

let Colum = null;
let Row = null;

function App() {
    return (
        <div>
            <header>
                <form>
                    <table id="zakazTable">
                        <tr>
                            <td><p>Введите размерность таблицы &nbsp;&nbsp;&nbsp; </p></td>
                            <td>
                                <p>Столбцы</p>
                                <input value="" onChange={onchange} id="Col"></input>
                            </td>
                            <td>
                                <p>Строки</p>
                                <input value="" onChange={onchange} id="Row"></input>
                            </td>
                            <td>
                                <button onClick="{/*show()*/}">Вывод</button>
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
    Colum = document.getElementById("Col").value;
    Row = document.getElementById("Row").value;


}

// function show(){
//     alert(Colum);
//     alert(Row);
// }

export default App;
