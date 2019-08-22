import React from 'react';

class SearchBar extends React.Component{

    state = {text: ''}

    onInputChange =(event)=>{
        console.log(event.target.value)
        
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        
        this.props.onSubmit(this.state.text)
    }

    render(){
        return(
            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form" >
                    <div className = "fields">
                        <label>Search Image</label>
                        <input type ="text" 
                        value = {this.state.text}
                        onChange = {e => this.setState({text: e.target.value})}></input>
                        
                    
                    </div>
                
                </form>
                
            </div>
        )
    }
}

export default SearchBar;