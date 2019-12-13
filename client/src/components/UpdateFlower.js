import React from 'react';
import axios from 'axios';

class UpdateFlower extends React.Component  {
    state = {
		flower: {},
        species: '',
        genus: '',
        comname: ''
    }
	
	handleSubmit = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8080/api/flowers/${this.props.flower}/update`, {
            genus: this.state.genus,
			species: this.state.species,
			comname: this.state.comname
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
	}

    componentDidMount() {
		var flowerName = 0;
		
		if (this.props.flower)
			flowerName = this.props.flower;
		
        axios.get(`http://localhost:8080/api/flowers/${flowerName}`)
            .then(res => {
                const flower = res.data.data;
                this.setState({ flower });
        })
    }
	
	componentDidUpdate() {
		var flowerName = 0;
		
		if (this.props.flower)
			flowerName = this.props.flower;
		
        axios.get(`http://localhost:8080/api/flowers/${flowerName}`)
            .then(res => {
                const flower = res.data.data;
                this.setState({ flower });
        })
	}
	
	render() {
		if (this.state.flower)
			return(
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>
							Species:
							<input type="text" 
							id="species" 
							value={this.state.species} 
							placeholder={this.state.flower.SPECIES}
							onChange={event => this.setState({species: event.target.value})}
							/>
						</label>
						<label>
							Genus:
							<input type="text" 
							id="genus" 
							value={this.state.genus} 
							placeholder={this.state.flower.GENUS} 
							onChange={event => this.setState({genus: event.target.value})}
							/>
						</label>
						<label>
							Common Name:
							<input type="text" 
							id="comname" 
							value={this.state.comname} 
							placeholder={this.state.flower.COMNAME}
							onChange={event => this.setState({comname: event.target.value})}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			);
		else
			return (
				<div>
				</div>
			);
	}
}

export default UpdateFlower;