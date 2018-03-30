/**
 * Created by sondo on 18/03/2018.
 */
import React from 'react';
import ScenarioPageBar from './ScenarioPageBar';
import DemoBase from './ScenarioTable';



class ScenarioPage extends React.Component {


   render() {
       return(
           <div>
               <ScenarioPageBar/>
               <DemoBase/>
           </div>
       )
   }
}

export default ScenarioPage;