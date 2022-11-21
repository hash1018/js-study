/*
const component = <h1>리액트 기본</h1>
const container = document.getElementById('root')

ReactDOM.render(component, container)
*/


/*
const name = '구름'
const imgUrl = 'http://placedog.net/400.200'
const component = <div>
    <h1>{name}님 안녕하세요!</h1>
    <img src ={imgUrl} />
</div>
const container = document.getElementById('root')


ReactDOM.render(component, container)
*/

/*

class App extends React.Component {
    render() {
        return <h1>리액트 기본</h1>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    render() {
        return <div>
            <h1>{this.props.name}님 안녕하세요!</h1>
            <img src = {this.props.imgUrl} />
        </div>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App name = "구름" imgUrl = "http://placedog.net/400/200" />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    render () {
        return <h1>{this.state.time.toLocaleTimeString()}</h1>
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.countUp = this.countUp.bind(this)
    }

    render () {
        return <div>
            <h1>클릭한 횟수: ${this.state.count}</h1>
            <button onClick = {this.countUp}>클릭</button>
        </div>
    }

    countUp (event) {
        this.setState({
            count: this.state.count + 1
        })
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/


/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render () {
        return <div>
            <h1>클릭한 횟수: ${this.state.count}</h1>
            <button onClick = {(e) => this.countUp(e)}>클릭</button>
        </div>
    }

    countUp (event) {
        this.setState({
            count: this.state.count + 1
        })
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render () {
        return <div>
            <h1>클릭한 횟수: ${this.state.count}</h1>
            <button onClick = {this.countUp}>클릭</button>
        </div>
    }

    countUp = (event) => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text:''
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    render () {
        return <div>
            <input value = {this.state.text}
            onChange = {this.handleChange} />
            <h1>{this.state.text}</h1>
        </div>
    }

    handleChange (event) {
        this.setState({
            text: event.target.value
        })
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        const textStyle = {
            color: this.state.checked ? 'blue' : 'red'
        }

        return <div>
            <input type = "checkbox"
            onClick = {this.handleClick} />
            <h1 style={textStyle}>글자</h1>
        </div>
    }

    handleClick (event) {
        this.setState({
            checked: event.target.checked
        })
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    render() {
        const list = [
            <li>사과</li>,
            <li>바나나</li>,
            <li>배</li>,
            <li>귤</li>
        ]

        return <ul>{list}</ul>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: ['사과', '바나나', '배', '귤']
        }
    }
    
    render () {
        const list = this.state.fruits.map((item) => {
            return <li>{item}</li>
        })

        return <ul>{list}</ul>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/