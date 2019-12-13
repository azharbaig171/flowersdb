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
		var flowerList = [];
		for (var i = 0; i < this.state.flowers.length && i < 10; i++) {
			flowerList.push(
				<li key={i}>
					{this.state.flowers[i].NAME}&emsp; 
					{this.state.flowers[i].PERSON}&emsp; 
					{this.state.flowers[i].LOCATION}&emsp; 
					{this.state.flowers[i].SIGHTED}
				</li>
			);
		}
		
		return(
			<ol>
				{flowerList}
			</ol>
		)
	}

}

export default ViewFlower;