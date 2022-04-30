import Display from '../modules/Display'
import Button from '../modules/Button'
import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super()
        this.state = { memory: [0, 0], index: 0, op: '' }
        this.addDigit = this._addDigit.bind(this)
        this.clear = this._clear.bind(this)
        this.operation= this._operation.bind(this)
        this.equal= this._equal.bind(this)
    }
    _clear() {
        this.setState({ memory: [0, 0], index: 0, op: '' })
    }
    _addDigit(n) {
        let oldValue = this.state.memory[this.state.index]
        let newValue = this.state.memory
        if (n === '.' && oldValue.includes('.')) {
            return
        }
        if (oldValue === 0) {
            oldValue = n
        }
        else {
            oldValue += n
        }
        newValue[this.state.index] = oldValue
        this.setState({ memory: newValue })
    }
    _operation(op){
        if (this.state.op !== '' || op === ''){
            return
        }
        this.setState({op: op, index: 1})
    }
    _equal(){
        let value= [0, 0], mem= this.state.memory.map(Number)
        try {
            value[0]= eval(`${mem[0]} ${this.state.op} ${mem[1]}`)
        }catch(e){
            return
        }
        this.clear()
        this.setState({memory: value})
    }
    render() {
        let display= `${this.state.memory[0]} ${this.state.op} ${this.state.memory[1] === 0 ? '' : this.state.memory[1] }`
        return (
            <div className='calculator'>
                <Display value={display} />
                <Button label='c' triple click={this.clear} />
                <Button label='/' operation click={this.operation}/>
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='*' operation click={this.operation}/>
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' operation click={this.operation}/>
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' operation click={this.operation}/>
                <Button label='0' click={this.addDigit} double />
                <Button label='.' click={this.addDigit} />
                <Button label='=' operation click={this.equal} />
            </div>
        )
    }
}
export default Calculator;

// buttons = ['c','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','=']