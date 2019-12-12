import React from 'react';
import axios from 'axios';

class ViewFlower extends React.Component  {
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
	
	componentDidUpdate() {
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
				<p>{flower.NAME}&emsp; {flower.PERSON}&emsp; {flower.LOCATION}&emsp; {flower.SIGHTED}</p>
			))}
			</div>
		)
	}

}

export default ViewFlower;