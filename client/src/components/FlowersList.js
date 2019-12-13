import React from 'react';
import axios from 'axios';

class FlowersList extends React.Component  {
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
        const flowers = this.state.flowers
        .map(flowers => {
            return (
                <tr key={flowers.COMNAME}>
                    <td onClick={() => this.props.updateFlower(flowers.COMNAME)}>
                        {flowers.GENUS}
                    </td>
                    <td onClick={() => this.props.updateFlower(flowers.COMNAME)}>
                        {flowers.SPECIES}
                    </td>
                    <td onClick={() => this.props.updateFlower(flowers.COMNAME)}>
                        {flowers.COMNAME} 
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <tr>
                    <th>
                      <b>Genus</b>
                    </th>
                    <th>
                      <b>Species</b>
                    </th>
                    <th>
                      <b>Common Name</b>
                    </th>
                </tr>
                {flowers}
            </div>
        )
    }

}

export default FlowersList;