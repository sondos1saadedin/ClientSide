/**
 * Created by sondo on 30/03/2018.
 */
import React from 'react';
import HomePageNav from "./HomePageNav";
import HomePageHeader from "./HomePageHeader";


class HomePage extends React.Component{

    render() {
        return (
            <div>
                <HomePageNav/>
                <HomePageHeader/>
            </div>
        )
    }

}


export default HomePage;