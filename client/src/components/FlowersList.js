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
                    <td>
                      <b>Genus</b>
                    </td>
                    <td>
                      <b>Species</b>
                    </td>
                    <td>
                      <b>Common Name</b>
                    </td>
                  </tr>
                {flowers}
            </div>
        )
    }

}

export default FlowersList;