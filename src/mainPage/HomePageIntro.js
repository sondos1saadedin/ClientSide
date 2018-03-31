/**
 * Created by sondo on 31/03/2018.
 */
import React from 'react';
import './HomePage.css';


class HomePageIntro extends React.Component {



    render() {
        return(
            <section id="intro">
                <div className="container-lg">
                    <h1>
                        WAT is here to help you test your web application
                    </h1>
                    <p class="common-BodyText">
                        WAT is the best software platform for testing your web app. We handle all ui testing methods.
                    </p>
                </div>
            </section>
        )
    }
}



export default HomePageIntro;

