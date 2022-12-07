import React from "react";


class Input extends React.Component {
    render(){
        const { title, value, update } = this.props;
        return (
            <>
                <Text>{ title }</Text>
                <input
                    type="text"
                    value={value}
                    onChange={event => update(event.target.value)}
                    style={{height: 40, width: 200, fontSize: '2rem'}}
                />
            </>
        )
    }
}


class Text extends React.Component {
    render(){
        return <h1 style={{color: 'red'}}>{this.props.children}<br/></h1>
    }
}


export default Input;