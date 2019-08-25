import React from 'react';

import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'


class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const key = 'e072b905f0a8ea3a142cc2554fb433d5ac7143eea705e0a9765c39e8925494d9';
        const response = await unsplash.get('search/photos', {
            params: {query: term}
        });

        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App
