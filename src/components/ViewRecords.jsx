import React, { Component } from 'react';
import axios from 'axios';

export class ViewRecords extends Component {

    state = {
        data : '',
        error: ''
    }

    componentDidMount(){
        this.getData();
    }
    
    getData = () => {
        
        axios.get("/entries").then( dataFromService => {
            this.setState({data : dataFromService.data});
        }).catch(serviceError => {
            this.setState({error: serviceError});
        });

    }
    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     renderTableData() {
        return this.state.data.map((records, index) => {
   
           return (<tr key={records.appId}>
                    {
                        Object.entries(records).map( (k, i) => {
                            return <td key={k[0]+index}>{k[1]}</td>
                        })
                    }
                  </tr>)
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Records from DB</h1>
              {this.state.data.length ===  0 ? (
                  <div> Loading data </div>
              ) :  
                <table id='records'>
                    <tbody id='table-body'>
                        <tr id='table-header'>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            }
           </div>
        )
     }
}

export default ViewRecords
