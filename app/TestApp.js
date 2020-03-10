var React = require('react');


class TestApp extends React.Component {

    getInitialState() {
        this.setState({
            count: this.props.initialCount,
        })
    }


    _increment() {
        this.setState({count: this.state.count + 1});
    }


    componentDidMount() {
        this.getInitialState();
        console.log("123")
    }

    render() {
        let ele = this.state ? <span onClick={() => {
            this._increment()
        }}>{this.state.count}(Click here will update)</span> : <span>loading</span>;
        return (
            <div>
                <span>the count is: </span>
                {ele}
            </div>
        )
    }


};

module.exports = TestApp;
