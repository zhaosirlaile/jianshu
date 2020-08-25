import React,{Component} from 'react';

import {connect} from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render(){
        return (
            <div>
                <div>
                    <input
                        value ={this.props.inputValue}    
                        onChange={this.props.handleInputChange}
                    ></input>
                    <button onClick={this.props.handleClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {
                        this.props.list.map((e,i)=>{
                            return (
                                <li 
                                    onClick={
                                        ()=> {
                                            this.props.handleDeleteItem(i)
                                        }}
                                    key={e}
                                >
                                    {e}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleInputChange(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleDeleteItem(index){
            const action ={
                type: 'delete_item',
                index,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);