import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
    static defaultProps = {
        children: 'Enviar',
    };
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    };

    render() {
        return <a href="" onClick={this.props.onClick}>{this.props.children}</a>
    }
}

class App extends Component {
    handleClick() {
        alert('Botao clicado')
    }

    render() {
        return (
            <Fragment>
                <h1>Hello Rocketseat</h1>
                <Button onClick={() => { alert('Botao 1 clicado') }}/>
                <Button onClick={this.handleClick}>Salvar</Button>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById('app'))