import React, { Component } from "react";



import "./App.css";


import Team2 from "./team-2.jpg";
import Team3 from "./team-3.jpg";
import Team4 from "./team-4.jpg";
import p1 from "./p1.png";
import "./pages.css";

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

    class AboutUs extends Component {


        render() {
            return (
                <div className="App">

                    <head>

                        <title> About Us </title>
                        <meta charset="utf-8"/>
                        <meta name="viewport" content="width=devic-width,initial-scale=1"/>
                        <link rel="stylesheet" type="text/css"
                              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                        <link href="css/global.css" type="text/css" rel="stylesheet"/>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.main.js"/>
                        <script src="https://maxcdn.bootstrap.com/bootstrap/3.3.7/js/bootstrap.min.js"/>
                    </head>


                    <section className="about-us text-center">
                        <div className="container">
                            <h1 className="font"> About Us </h1>
                            <hr/>
                            <p className="lead"></p>
                            <p className="lead"></p>

                            <img className="img-thumbnail" src={p1}/>
                        </div>


                        <br/><br/><br/>
                        <b><h2>We know WAT </h2></b>
                        <div>WAT, we believe there is a better way to do testing . A more valuable, less invasive way
                            where customers are earned rather than bought.
                            <br/> We’re obsessively passionate about it, and our mission is to help people achieve it.
                            We focus on improvement the test automation testing .
                            <br/> We're excited to simplify testing for everyone through our website.
                        </div>
                        <p><br/><br/>
                            <br/>____________________________________________________________________________________________________________________________________________
                        </p>
                        <p><br/><br/></p>
                        <section calss="about-features text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <i className="fa fa-code fa-5x"></i>
                                        <h3> Requirements, Managed</h3>
                                        <p> Manage requirements, features, and use cases. Map tests to requirements to
                                            track test coverage. Drill down from requirements to tests and bugs.</p>
                                    </div>

                                    <div className="col-sm-4">
                                        <i className="fa fa-code fa-5x"></i>
                                        <h3> Tests, Sorted</h3>
                                        <p> Create, edit and execute test-cases with rich text editing. Test management
                                            for exploratory, automated, and manual tests with global scheduling. Support
                                            for templated and data-driven test cases.</p>
                                    </div>

                                    <div className="col-sm-4">
                                        <i className="fa fa-group fa-5x"></i>
                                        <h3> Bugs, Tracked</h3>
                                        <p> Track bugs, enhancements, risks and issues. Link bugs to test steps during
                                            test execution for full test traceability.</p>
                                    </div>


                                </div>
                            </div>


                        </section>


                    </section>

                    <center>
                    <section calss="about-features text-center   ">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <i className="fa fa-code fa-5x"></i>
                                    <h3> Trace It All</h3>
                                    <p> Need to manage requirements, defects, and test cases with full traceability and
                                        real time reporting? WAT has you covered. Powerful, straightforward, and
                                        flexible, WAT helps you get started fast.</p>
                                </div>

                                <div className="col-sm-4">
                                    <i className="fa fa-code fa-5x"></i>
                                    <h3> Visualize It All</h3>
                                    <p> Create and run all of your tests from a central platform: manual and automated.
                                        Seamless bug and issue tracking. Powerful and customizable reports let you check
                                        the health of your projects and tests at a glance.</p>
                                </div>


                            </div>
                        </div>
                        <br/><br/><br/>


                    </section></center>

                    <center><p><br/><br/>
                        <br/>_________________________________________________________________________________________________________________________________________
                    </p></center>

                    <div className="center">



                        <h2> feature </h2>
                        <p><b>user friendly </b><br/> WAT is easy to learn for use.<br/> <br/>
                            <b>flexibility</b> <br/> you can an automated test suite should run without any user.<br/>
                            intervention at all, you can run your test and go home.<br/>
                            <br/>
                            <b>Testing Improves Accuracy</b> <br/>
                            Even the most conscientious tester will make mistakes during monotonous manual
                            testing. <br/>
                            Automated tests perform the same steps precisely every time they are executed and
                            never <br/>
                            forget to record detailed results.<br/>
                            <br/>
                            <b>Reduce Redundancy</b><br/>
                            repeating these tests is costly and time consuming. Once created, automated tests can be run<br/>
                            over and over again at no additional cost and they are much faster than manual tests.<br/>
                            <br/>
                            <b>Minimal manual intervention</b><br/>Frameworks reduces the manual efforts to a
                            limit,<br/>
                            works can be completed with minimal user intervention<br/>
                            <br/>

                            <b>Reusability of code</b><br/>
                            Common library files can be reused when required, no need to develop them every time.<br/>
                            Thus it saves time of the team and improves the productivity.<br/>
                            <br/>

                            <b> Give easy Reporting</b><br/>
                            when  phase of automatization is completed you can see the report with sanity test run results<br/>
                            at any time you need to make sure that application is stable<br/>
                            <br/>
                            <b>  Maximum coverage</b><br/>
                            test coverage  will be heightened <br/>

                            <b>

                                <br/>
                                <b>  Help improve quality and Low-cost maintenance.</b><br/>



                            </b>
                        </p>

                    </div>


                    <p><br/><br/>
                        <center>
                            <br/> _________________________________________________________________________________________________________________________________________
                        </center>
                    </p>

                     <div id="team" className=" ">
                        <div className="container">
                            <div className="row">
                                <h2 className="wow fadeInUp">Meet our team </h2>
                                <p className="wow fadeInUp" data-wow-delay="0.4"> </p>
                                <div className="col-lg-3 col-md-3  wow fadeInLeft">
                                </div>
                                <div className="col-lg-3 col-md-3  wow fadeInLeft" data-wow-delay="1.6s">
                                    <img src={Team2} className="img-circle" alt=""/>
                                    <h4>Bayan Sandouka</h4>

                                    <b>CS student</b>

                                </div>
                                <div className="col-lg-3 col-md-3  wow fadeInLeft" data-wow-delay="1.2s">
                                    <img src={Team3} className="img-circle" alt=""/>
                                    <h4>Sondos saadedin</h4>
                                    <b>CS student</b>

                                </div>

                                <div className="col-lg-3 col-md-3  wow fadeInLeft">
                                    <img src={Team4} className="img-circle" alt=""/>
                                    <h4>Aseel Naimat</h4>
                                    <b>CS Student</b>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            );
        }
    }

export default AboutUs;
