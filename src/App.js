import React from 'react';
import styles from './App.module.css';

class App extends React.Component{
constructor(props) {
  super(props);
  this.state ={
    data: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    user:null,
  };

}


handleChange = e =>{


  this.setState({
           data:{
             ...this.state.data,
             [e.target.name]: e.target.value
           }
  })

};


handleSubmit = (e) =>{
  e.preventDefault();
  this.sendRequest();
};
sendRequest = e =>{
  const options ={
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(this.state.data)
  };

  fetch('http://192.168.0.106:3000/authorization/sign_up',options)
      .then( response => response.json() )
      .then( user => {
        this.setState(user =>{
          this.setState([user])
        });
      } )

      .catch(e =>{console.error(e)});
};


render() {
  return (
          <div className={styles.header}>
            Регистрация
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <input type="text" value={this.state.data.firstName} onChange={this.handleChange} name="firstName" placeholder="Name" className={styles.name}/>
          <input type="text" value={this.state.data.lastName} onChange={this.handleChange} name="lastName" placeholder="Surname" className={styles.surname}/>
          <input type="email" value={this.state.data.email} onChange={this.handleChange} name="email" placeholder="Email" className={styles.email}/>
          <input type="password" value={this.state.data.password} onChange={this.handleChange} name="password" placeholder="Password" className={styles.password}/>
          <input type="button" onClick={this.sendRequest} value={'Sign up'} className={styles.button} contextMen/>
        </form>
          </div>


  )
}

}

export default App;
