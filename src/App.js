import React, { Component } from 'react';
import Introduction from './Introduction';
import WorkExperience from './WorkExperience';
import Software from './Software';
import Hardware from './Hardware';
import RelevantCourses from './RelevantCourses';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="body">
        <NavigationBar/>

        <Introduction/>

        <WorkExperience/>

        <Software/>

        <Hardware/>

        <RelevantCourses/>

        <Footer/>
      </div>
    );
  }
}

export default App;
