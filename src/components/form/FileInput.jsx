
import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.fileInput = React.createRef();
    }  
    render() {
        const { values, handleChangeFile } = this.props;
      return (

        <Form.Group controlId="file" as={Row}>
          <Form.Label>
            Upload Resume:
            <input type="file"
             ref={this.fileInput}
             onChange={handleChangeFile('file')}/>
          </Form.Label>
        </Form.Group >
      );
    }
  }
export default FileInput;