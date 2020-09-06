// import React from 'react';
import React,{Component} from 'react';
import './search-panel.css';




export default class SearchPanel extends Component{
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
    render(){
        const searchText = 'type to search';
        const style = {
            fontSize: '16px'
        }
        return (
                <input 
                    type = "text"
                    placeholder = {searchText}
                    className = 'search form-control'
                    style = {style}
                    value = {this.state.term}
                    onChange = {this.onSearchChange}
                />
        )    
    }
}










// const SearchPanel =()=>{
// 	const searchText='enter search text';
// 	const style={
// 		fontSize:'18px',
// 		width:'100%'
// 	}
// 		return(
// 			<input className='form-control search-input' placeholder={searchText} style={style}/>
// 		)
// }

// export default SearchPanel