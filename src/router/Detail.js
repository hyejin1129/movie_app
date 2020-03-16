import React from 'react';

class Detail extends React.Component{
    componentDidMount(props){
        const { location, history } = this.props;
        
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { state } = this.props.location;
        if(state){
            return(
                <div>
                    <h3>{state.title} - {state.year}</h3>
                    <img src={state.poster} title={state.title} alt={state.title} />
                    <ul>{state.genres.map( (genre, i) => 
                        <li key={i}>{genre}</li>
                    )}</ul>
                    <p>{state.summary}</p>
                </div>
            );
        }else{
            return null;
        }

    }
}

export default Detail;