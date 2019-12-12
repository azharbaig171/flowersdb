import React from 'react';
import axios from 'axios';

class AddSighting extends React.Component  {
    state = {
        name:'',
        person: '',
        location: '',
        sighted: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/api/flowers/`, {
            name: this.state.name,
            person: this.state.person,
            location: this.state.location,
            sighted: this.state.sighted
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })


      }

	render() {
		return(
			<div className="">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text"
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={event => this.setState({name: event.target.value})}
                        required 
                        />
                    </label>
                    <label>
                        Person
                        <input type="text"
                        placeholder="Person"
                        value={this.state.person} 
                        onChange={event => this.setState({person: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Location
                        <input type="text"
                        placeholder="Location"
                        value={this.state.location} 
                        onChange={event => this.setState({location: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Date Sighted
                        <input type="text"
                        placeholder="Date Sighted"
                        value={this.state.sighted} 
                        onChange={event => this.setState({sighted: event.target.value})} 
                        />
                    </label>
                
                <input type="submit" value="Submit" />
                </form>
            </div>
		)
	}

}

export default AddSighting;