import React, { Component } from 'react';
import './App.css';
import Form from './component/Form'
import Output from './component/Output'

//const API_Key = '1b4dc0db28affdee6bb9114702cf8c22'



class App extends Component {
  
  state= {
    tempreture:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getWether = async(e)=>{
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1b4dc0db28affdee6bb9114702cf8c22`)
   const data = await api.json()

    console.log(data)

    if (city && country){
      this.setState({
        tempreture:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    }else{
      this.setState({
        tempreture:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'error'
      })
    }

    }
   



  render(){
    return (
      <div className="wrapper">
         <div className='form-container'>
         <Form getWether={this.getWether} handelChange={this.handelChange}/>   
          <Output 
            tempreture={this.state.tempreture}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />  
           </div>     
      </div>
    );
  }
}

export default App;
