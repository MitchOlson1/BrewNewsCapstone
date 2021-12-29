import React from 'react';
import Axios from 'axios'
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';





const style = {
  margin: 15,
marginLeft: 600
};
export default class  Register extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit=this.handleSubmit.bind(this);
}
handleSubmit(e) {
    e.preventDefault();
    var self = this;


    var data = new FormData();
    const payload = {
    id: self.refs.id.getValue(),
    studentName: self.refs.sname.getValue(),
    age: self.refs.age.getValue(),
    emailId: self.refs.emailId.getValue()
};
data.append("myjsonkey", JSON.stringify(payload));

fetch('https://localhost:44394/api/products', {
    method: 'POST',
    headers: {
    'Accept': 'application/json'
  },
    body: data
    
})
    
  .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }

render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div style={style}>
      <TextField ref='id'
      hintText="Enter Beer Name"
      floatingLabelText="id"
      />
      <br/>
      <TextField ref='name'
      hintText="Enter Brewery"
      floatingLabelText="Brewery/Location of origin"
      />
      <br/>
      <TextField ref='info'
      hintText="Enter Beer info"
      floatingLabelText="Type, Ingredients, Flavor"
      />
      <br/>

      <TextField ref='emailId'
      hintText="Enter your Email"
      floatingLabelText="emailId"
      />
      <br/>
      <br/>
      <input type="submit" />


      </div>
          </form>


    );
  }


}