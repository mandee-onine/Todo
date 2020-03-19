import React from "react";
import { Input, List, DatePicker } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';

// Don't forget to include the css for antd!
import "antd/dist/antd.css";

export default class Todo extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: []
        };
    }

    handlePressEnter = e => {
        // Create a todo object containing its index, content,
        // as well as an empty date
        const todo = {
            index: this.state.todos.length,
            content: e.target.value,
            date: null,
            dateString: ""
        };

        // Add the new todo to our array
        const newTodos = this.state.todos.concat(todo);

        this.setState({
            todos: newTodos
        });

        // Clear input
        e.target.value = "";
    };

    removeTodo = index => {
        let newTodos = [...this.state.todos];

        // Remove element
        newTodos.splice(index, 1);

        // Decrement greater indexes
        for (let i = index; i < newTodos.length; i++) {
            newTodos[i].index -= 1;
        }

        // Update state
        this.setState({
            todos: newTodos
        });
    };

    setDate = (index, date, dateString) => {
        // Set the date of the given todo
        let newTodos = [...this.state.todos];
        newTodos[index].date = date;
        newTodos[index].dateString = dateString;

        // Initialize the state
        this.setState({
            todos: newTodos
        });
    };

    render() {
        return (
            <div className="todoContainer">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Date
			</button><br /><br />
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Todos</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Input
                                    placeholder="Enter Number"
                                    onPressEnter={this.handlePressEnter}
                                />

                                <List
                                    locale={{ emptyText: "No todo items" }}
                                    dataSource={this.state.todos}
                                    renderItem={item => (
                                        <TodoItem
                                            todo={item}
                                            removeTodo={this.removeTodo}
                                            setDate={this.setDate}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

class TodoItem extends React.Component {
    remove = () => {
        // Remove this TodoItem
        this.props.removeTodo(this.props.todo.index);
    };

    handleDateChange = (date, dateString) => {
        // Update the date when changed
        this.props.setDate(this.props.todo.index, date, dateString);
    };

    render() {
        return (
            <div className="container">
                <List.Item
                    actions={[
                        <DatePicker
                            format="MM/DD/YYYY"
                            onChange={this.handleDateChange}
                            value={this.props.todo.date}
                        />,
                        //   <Icon type="close-circle" theme="filled" onClick={this.remove} />
                        <button onClick={this.remove}>Delete</button>
                    ]}
                >
                    {this.props.todo.content}
                </List.Item>
            </div>
        );
    }
}
