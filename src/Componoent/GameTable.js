import React, {Component} from 'react';
import './Gametable.css'

class  GameTable extends Component {
    render() {
        const {list, onAdd } = this.props;

        return(
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Appropriate Age</th>
                            <th>Price</th>
                            <th>Sale</th>
                            <th>BUY!!!</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.appropriateAge}</td>
                                    <td>{item.price}</td>
                                    <td>{item.sale}</td>
                                    <td>
                                        <button onClick={() => {
                                            onAdd(index);
                                        }}>
                                            <i>Add to collection</i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            );
    }
}
export default GameTable;