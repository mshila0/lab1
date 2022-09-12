import logo from './logo.svg';
import {Square} from "./components/Component"
import './App.css';

function OnlyEvenElement({a}) {
    if (a % 2 === 0)
        return <>{a}</>;
}

function OnlyEven({arr}) {
    return <>
        <h1>Задача №2</h1>
        {arr.map(
            item => <OnlyEvenElement a={item}/>)}
    </>;
}

function App() {
    return (
        <div className="App">
            {/*<h2><Square n={3} /></h2>*/}
            <h2><OnlyEven arr={[14, 5, 6, 12, 21, 2]}/></h2>
        </div>
    );
}

export default App;
