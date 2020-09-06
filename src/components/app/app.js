// import React from 'react';
import React,{Component} from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component{
	maxId=1;
state={
	todoList:[
	this.createTodoItem('DrinkCoffe'),
	this.createTodoItem('Build React App'),
	this.createTodoItem('Drink Tea'),

	],
	term:'',
        filter:'all'
}
onSearchChange = (term) => {
        this.setState({term});
    }
    onFilterChange = (filter) => {
        this.setState({filter});
    }

    search(items,term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }



createTodoItem(label){
	return{
		label,
		important:false,
		done:false,
		id:this.maxId++
	}
}
deleteItem = (id)=>{
	this.setState(({todoList}) =>{
		const idx = todoList.findIndex((el)=>el.id===id)
		const left = todoList.slice(0,idx);
		const right = todoList.slice(idx + 1);
		const newArray = [...left,...right];
		return{
			todoList:newArray
		}
	})
}


// deleteItem = (id) => {
//         this.setState(({todolist}) => {
//             const idx = todolist.findIndex((el) => el.id === id);
//             const left = todolist.slice(0,idx);
//             const right = todolist.slice(idx+1);
//             const newArray = [...left,...right];
//             return {
//                 todolist:newArray
//             }
//         })
//     }





addItem=(text)=>{

	const newItem=this.createTodoItem(text)

	this.setState(({ todoList })=>{
	const newArray =[
		...todoList,
		newItem
	];
	return{
		todoList:newArray
	}
})
}
onToggleDone = (id)=>{
	//1. update object
this.setState(({todoList})=>{
	const idx = todoList.findIndex((el)=>el.id===id);
	const oldItem = todoList[idx];
	const newItem = {...oldItem,done:!oldItem.done}
	const newArray = [...todoList.slice(0,idx),newItem,...todoList.slice(idx + 1)];
	return{
		todoList:newArray
	}
})
	//2. constructor new array
	// before old item,newItem,after oldItem
}

onToggleImportant = (id)=>{
	 this.setState(({ todoList }) => {
            const idx = todoList.findIndex((el) => el.id === id);
            const oldItem = todoList[idx];
            const newItem = {...oldItem,important:!oldItem.important};
            const newArray = [...todoList.slice(0,idx),newItem,...todoList.slice(idx+1)];
            return{
                todoList : newArray
            }
        })
}

render(){
	const {todoList, term, filter} = this.state;
    const visibleItems = this.filter(this.search(todoList,term),filter)
	const doneCount = todoList.filter((item)=>item.done).length;
	const todoCount = todoList.length - doneCount;
	return(
	<div className='todo-app'>	
		
		<AppHeader toDo={todoCount} done={doneCount}/>
		<div className='top-panel d-flex'>
			<SearchPanel onSearchChange = {this.onSearchChange}/>
			<ItemStatusFilter 
                filter = {filter}
                onFilterChange = {this.onFilterChange}/>
		</div>
		<TodoList todos={visibleItems} 
		onDeleted ={this.deleteItem}
		onToggleDone ={this.onToggleDone}
		onToggleImportant={this.onToggleImportant}/>
		<ItemAddForm onItemAdded={this.addItem}/>
	</div>	

		)
}
}

// // const App = ()=>{
// // 	const todoList = [
// // 		{label:'Drink Coffee',important:false,id:1},
// // 		{label:'Build React App',important:true,id:2},
// // 		{label:'Drink Tea',important:false,id:3}
// // 	]

// // 	return(
// // 	<div className='todo-app'>	
		
// // 		<AppHeader toDo={1} done={3}/>
// // 		<div className='top-panel d-flex'>
// // 			<SearchPanel/>
// // 			<ItemStatusFilter/>
// // 		</div>
// // 		<TodoList todos={todoList} onDeleted ={(id)=>console.log(`Deleted: ${id}`)}/>
// // 	</div>	
// // 	)
// // }

// export default App;