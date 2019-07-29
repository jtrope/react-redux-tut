import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        const key =  'no_no_no';
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: {query: term},
                headers: {
                    'Authorization':'Client-ID ' + key
                }
            }
        ).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App
