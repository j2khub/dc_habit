import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    // this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
    // count 음수가 되지 않도록 const로 count 상수로 선언 후 기능은 호출될때 카운트를 -1 해줌
    // setState 처리는 count 값이 0보다 작을때는 0을 그렇지 않을경우 count 표시하도록
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={(this.handleIncrement = this.handleIncrement)}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={(this.handleDecrement = this.handleDecrement)}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={(this.handleDelete = this.handleDelete)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
