import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './style/App.css';

// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition((position)=>console.log(position),
//     (err)=>console.log(err));
//     return <div>Latitude:</div>;
// };

class App extends React.Component{

    //one way to initialize state
    // constructor(props){
    //     super(props);

    //     this.state={lat:null,errorMessage:''};

        
    // }

    // another way to initialize state
    state={lat:null,errorMessage:''};

    componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position=>
            this.setState({lat:position.coords.latitude}),
        err=>
            this.setState({errorMessage:err.message}))
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat)
       {
        return <div>Error:{this.state.errorMessage}</div>;
       }
       if(!this.state.errorMessage && this.state.lat)
       {
        return <SeasonDisplay lat={this.state.lat}/>;
       }
       return <Spinner message="Please accept loaction request"/>;
    }

    render(){
        return(
       <div className='border red'>
        {this.renderContent()}
       </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));