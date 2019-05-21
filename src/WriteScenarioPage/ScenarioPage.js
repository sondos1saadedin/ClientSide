/**
 * Created by sondo on 18/03/2018.
 */
import React from 'react';
import ScenarioPageBar from './ScenarioPageBar';
import ScenarioTable from './ScenarioTable';



class ScenarioPage extends React.Component {


   render() {
       return(
           <div>
               <ScenarioPageBar/>
               <ScenarioTable/>
           </div>
       )
   }
}

export default ScenarioPage;