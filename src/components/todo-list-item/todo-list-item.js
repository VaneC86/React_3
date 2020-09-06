import React,{Component} from 'react';

import './todo-list-item.css'


export default class TodoListItem extends Component{
	
	// state={
	// 	done:false,
	// 	important:false
	// }

	// onLabelClick = ()=>{
	// 	// console.log(`Done: ${this.props.label}`)
	// 	this.setState(({done})=>{
	// 		return{
	// 			done:!done
				
	// 		}
			
	// 	})
	// }

	// onMarkImportant =()=>{
	// 	this.setState(({important}) =>{
	// 		return {
	// 			important:!important
	// 		}
	// 	})
	// }


	render(){
		const {label,onDeleted,onToggleDone,onToggleImportant,done,important}=this.props;
		// const{done,important}=this.state;
		let classNames='todo-list-item '
		if(done){
			classNames+= 'done '
		}
		if(important){
			classNames+= 'important '
		}

		// const style = {
		// 		color:important?'red':'black',
		// 		fontWeight:important?'bold':'normal',

		// }
return (
		<span className={classNames}>
		<span className='todo-list-item-label' 
		onClick={onToggleDone}>{label}</span>

		<button type='button' className='btn btn-outline-success btn-sm float-right'
		onClick={onToggleImportant}>
			<i className='fa fa-exclamation'/>
		</button>

		<button type='button' className='btn btn-outline-danger btn-sm float-right'
		onClick={onDeleted}>
			<i className='fa fa-trash-o'/>
		</button>
		</span>
);

	}
}
// const TodoListItem =({label,important=false})=>{
// 	// console.log(props.label)
// 	// const{label,important}
// 	const style = {
// 		color:important?'red':'black',
// 		fontWeight:important?'bold':'normal',
// 	}
// 	return (
// 		<span className='todo-list-item'>
// 		<span style={style} className='todo-list-item'>{label}</span>

// 	<button type='button' className='btn btn-outline-success btn-sm float-right'>
// 		<i className='fa fa-exclamation'
// 	</button>

// 	<button type='button' className='btn btn-outline-danger btn-sm float-right'>
// 		<i className='fa fa-exclamation'
// 	</button>

// 	</span>
// );
// }

