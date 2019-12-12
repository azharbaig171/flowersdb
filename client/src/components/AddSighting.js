import React from 'react';
import axios from 'axios';

class AddSighting extends React.Component  {
    state = {
        flowers: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/flowers/`)
            .then(res => {
                const flowers = res.data.data;
                this.setState({ flowers });
        })
    }

	render() {

		return(
			<div>
				<p>testing</p>
			</div>
		)
	}

}

export default AddSighting;