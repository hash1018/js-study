
/*
class App extends React.Component {
    render() {
        return <ul>
            <Item />
            <Item />
            <Item />
        </ul>
    }
}

class Item extends React.Component {
    render () {
        return <li>Item 컴포넌트</li>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

/*
class App extends React.Component {
    render () {
        return <ul>
            <Item value = "Item 컴포넌트 1번" />
            <Item value = "Item 컴포넌트 2번" />
            <Item value = "Item 컴포넌트 3번" />
        </ul>
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <li>{this.props.value}</li>
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
            time: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timerId)
    }

    render () {
        return <ul>
            <Item value = {this.state.time.toLocaleString()} />
            <Item value = {this.state.time.toLocaleString()} />
            <Item value = {this.state.time.toLocaleString()} />
        </ul>
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    render () {
        return <li>{this.state.value}</li>
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
            value: ''
        }
        this.changeParent = this.changeParent.bind(this)
    }

    render () {
        return <div>
            <CustomInput onChange = {this.changeParent} />
            <h1>{this.state.value}</h1>
        </div>
    }

    changeParent (event) {
        this.setState({
            value: event.target.value
        })
    }
}

class CustomInput extends React.Component {
    render () {
        return <div>
            <input onChange = {this.props.onChange} />
        </div>
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)
*/

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.load()

        this.textChange = this.textChange.bind(this)
        this.textKeyDown = this.textKeyDown.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.changeCheckData = this.changeCheckData.bind(this)
    }

    save() {
        localStorage.state = JSON.stringify(this.state)
    }

    load() {
        let output
        try {
            output = JSON.parse(localStorage.state)
        } catch (e) {}
        if (output !== undefined &&
            output.keyCount !== undefined &&
            output.currentValue !== undefined) {
                output = JSON.parse(localStorage.state)
        }
        else {
            output = {
                keyCount: 0,
                currentValue: '',
                todos: []
            }
        }
        return output
    }

    componentDidUpdate() {
        this.save()
    }

    render () {
        return <div>
            <h1>할 일 목록</h1>
            <input 
            value = {this.state.currentValue}
            onChange = {this.textChange}
            onKeyDown = {this.textKeyDown} />
            <button onClick = {this.buttonClick}>추가하기</button>
            <div>
                {this.state.todos.map((todo) => {
                    return <TodoItem dataKey = {todo.key}
                    isDone = {todo.isDone}
                    text = {todo.text}
                    removeItem = {this.removeItem}
                    changeCheckData = {this.changeCheckData} />
                })}
            </div>
        </div>
    }

    textChange (event) {
        this.setState({
            currentValue: event.target.value
        })
    }

    textKeyDown (event) {
        const ENTER = 13
        if (event.keyCode === ENTER) {
            this.buttonClick()
        }
    }

    buttonClick (event) {
        if (this.state.currentValue.trim() !== '') {
            this.setState({
                todos: [...this.state.todos, {
                    key: this.state.keyCount.toString(),
                    isDone: false,
                    text: this.state.currentValue
                }]
            })
            this.state.keyCount += 1
            this.state.currentValue = ''
        }
    }

    removeItem (key) {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.key !== key
            })
        })
    }

    changeCheckData (key, changed) {
        let target = [...this.state.todos]
        target.filter((todo) => todo.key === key)[0].isDone = changed
        this.setState({
            todos: target
        })
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDone: props.isDone
        }
        this.checkboxClick = this.checkboxClick.bind(this)
    }

    render () {
        const textStyle = {}
        textStyle.textDecoration = this.state.isDone? 'line-through' : ''
        return  (
            <div style = {textStyle}>
                <input 
                type = "checkbox"
                checked = {this.state.isDone}
                onChange = {this.checkboxClick} />
                
                <span>{this.props.text}</span>
                <button onClick = {() => this.props.removeItem(this.props.dataKey)}>제거</button>
            </div>
        )
    }

    checkboxClick () {
        const changed = !this.state.isDone
        this.props.changeCheckData(this.props.dataKey, changed)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.isDone !== this.props.isDone) {
            this.setState({
                isDone: this.props.isDone
            })
        }
    }
}

const container = document.getElementById('root')
ReactDOM.render(<App />, container)