import React from 'react';
import ColorContext from '../contexts/ColorContext';
import { LanguageStore } from '../contexts/LanguageContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    render () {
        return (
            <div className='ui container'>
                <LanguageStore>
                <LanguageSelector/>
                <ColorContext.Provider value="red">
               <UserCreate />
                
            </ColorContext.Provider>
            </LanguageStore>
            <div className='ui container'></div>

            </div>      
        
        );

    }

}

export default App;