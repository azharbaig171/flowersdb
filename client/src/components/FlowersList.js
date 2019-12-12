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
                    <td>
                        {flowers.GENUS}
                    </td>
                    <td>
                        {flowers.SPECIES}
                    </td>
                    <td>
                        {flowers.COMNAME} 
                    </td>
                </tr>
            )
        })

        return (
            <div>
                {flowers}
            </div>
        )
    }

}

export default FlowersList;