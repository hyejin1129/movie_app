import React from 'react';

class Detail extends React.Component{
    componentDidMount(props){
        const { location } = this.props;
        console.log(location.state);
    }
    render(){
        return(
            <div>Hello</div>
        );
    }
}

export default Detail;