import * as React from 'react';
import * as UI from 'material-ui';
import Card from 'material-ui/Card';

class ScenarioList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testScenarios: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8090/test-scenarios')
      .then(response => response.json())
      .then(data => this.setState({testScenarios: data, isLoading: false}), 1000);
  }

  render() {
    const {testScenarios, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>TestScenarios List</h2>
        {testScenarios.map((testScenario) =>
          <div>
            <Card>{testScenario}<br/></Card>
          </div>
        )}
      </div>
    );
  }
}

export default ScenarioList;