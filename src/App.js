import React from 'react';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <div className="App">
            <header className="bg-cover bg-center h-max" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            {/* Your content here */}
                <div className="flexn items-center justify-center h-full">
                    <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold mb-6">Search properties for sale in Pakistan</h1>

                        <SearchForm />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

