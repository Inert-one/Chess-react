import css from './App.module.css';
import ConnectBoard from './components/Board';
import ConnectedSettings from './components/Settings';
import Footer from './components/Ribbon';

function App() {
    return ( 
        <div className = {css.container}>
            <ConnectedSettings />
            <ConnectBoard />
            <Footer/>
        </div>
    );
}

export default App;