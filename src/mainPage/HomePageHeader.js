/**
 * Created by sondo on 29/03/2018.
 */
import React from 'react';
import './HomePage.css';


class HomePageHeader extends React.Component {


    render() {
        return (



            <div className="globalContent">

                <main>
                    <header>
                        <div id="stripes" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </header>


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
                </main>

            </div>

        )
    }

}


export default HomePageHeader;