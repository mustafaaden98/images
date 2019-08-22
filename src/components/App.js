import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';




class App extends React.Component{

    // onSearchSubmit = (term) =>{
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID a2485ffe469d3702dd09bf433a84acff60e168d2784ff5507f0276d97be351f0'
    //         }
    //     }).then(response =>{
    //         console.log(response.data.results)
    //     })
    // }
    
    // async onSearchSubmit(term){
    //     const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID a2485ffe469d3702dd09bf433a84acff60e168d2784ff5507f0276d97be351f0'
    //         }
    //     });
    //     console.log(this)
    //     console.log(response.data.results)
    // }

    state = {images : []}

    onSearchSubmit= async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term},

        });


        this.setState({images: response.data.results})
    }   
    

    render(){
        return(
            <div className = "ui container"  style = {{marginTop : '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                Found: {this.state.images.length } images. 
                <ImageList images = {this.state.images}/>
            </div>
        )
    }
}

export default App;