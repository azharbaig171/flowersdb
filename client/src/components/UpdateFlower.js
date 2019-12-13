import React from 'react';
import axios from 'axios';

class UpdateFlower extends React.Component  {
    state = {
        flowers: []
    }

    componentDidMount() {
        var flowerName = 0;
		
		if (this.props.flower)
			flowerName = this.props.flower
		
        axios.get(`http://localhost:8080/api/flowers/${flowerName}/sightings`)
            .then(res => {
                const flowers = res.data.data;
                this.setState({ flowers });
        })
    }

	render() {
	console.log(this.state.flowers);
		return(
			<div>
			{this.state.flowers.map(flower => (
				<form onSubmit={this.handleSubmit}>
					<label>
						Species:
						<input type="text" id="species" value={flower.SPECIES} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			))}
			</div>
		);
	}

}

export default UpdateFlower;