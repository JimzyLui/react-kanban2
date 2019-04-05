class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return {
      <div id = "{this.props.id}">
        <h1>{this.props.title}</h1>
        <div>{this.props.body}</div>
        <div>{this.props.priority}</div>
        <div>{this.props.status}</div>
        <div>{this.props.createdBy}</div>
        <div>{this.props.assignedTo}</div>
        <div><button>{this.props.prev}</button><button>{this.props.next}</button></div>
      </div>

    }
  }
}