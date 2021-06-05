import React, { useState } from 'react';
import Articles from './components/Articles';
import User from './components/User';

// 5-Jun-2021 

const App = () => {

    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    //console.log(theme);

    return (
        <div className="App">
            <header>
                <h1>React Skeletons</h1>
                <div>
                    <h3>Theme Color :</h3>
                    <p onClick={handleTheme}>{theme}</p>
                </div>
            </header>

            <div className="content">
                <Articles theme={theme} />
                <User theme={theme} />
            </div>
        </div>
    );
};

export default App;