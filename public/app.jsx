var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;

    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewName(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/>
        <textarea ref="message" placeholder="Enter message"></textarea>
        <button>Set Name</button>
      </form>
    );
  }
})

  var Greeter = React.createClass({
    getDefaultProps: function () {
      return {
        name: 'Denizen',
        message: 'I love 🍒 Princess BubbleGum!'
      };
    },
    getInitialState: function() {
      return {
        name: this.props.name,
        message: this.props.message
      };
    },

    handleNewName: function (updates) {
      this.setState(updates);
    },

    render: function () {
      var name = this.state.name;
      var message = this.state.message;

      return (
        <div>

        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
        </div>
      );
    }
  });

  var firstName = 'Patricia';
  var anotherMessage = "I love React"

  ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
  );
