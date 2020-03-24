import React from 'react';
import { InputNumber } from 'antd';

class QuestionDep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dependants: 0
        }   
    }

    handleInputChange(value) {
        this.setState({
          dependants: value
        });
      }

    render = () => (<div>
        <div>How many dependants do you have?</div>
        <div>
        <InputNumber name='dependants' min={0} max={100} value={this.state.dependants} onChange={this.handleInputChange.bind(this)} />
        </div>
    </div>);
}

export default QuestionDep;
