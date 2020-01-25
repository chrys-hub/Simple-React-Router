import React from 'react'
import "../grid/simple-grid.min.css"


class JsonViewer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          data: require("../datajson/myjson.json"),
        };
      }
      render(){
          return(
            <div>
            <h1>This Will be Json Display Implementations</h1>
            <h1>JSON DISPLAY DATA MAP METHOD</h1>
            <h3>Edit Myjson.json on data page to edit this</h3>
            <table>
      <tbody>{this.state.data.map(function(item) {
             
               return (
                  <tr>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
            </div>
          );
      }
}


export default JsonViewer;
