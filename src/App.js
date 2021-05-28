import React , {useState} from 'react';
import axios from 'axios';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [username , setUsername] = useState('');
  console.log(username , 'username');
  const handleSubmit = (event) => {
      event.preventDefault();
      if(username !== '' && username !== undefined) {
        axios.post(`https://www.instagram.com/${username}?__a=1` ,{username}).then(res => console.log(res));
      }
  }
  return (
    <div className ="container">
      <div className="flex-row ">
        <div className="profile flex-grow-2">
          <img src="/profile.jpeg" alt="pick"/>
        </div>
      <div className="details flex-grow-3">
        <div className="flex-row">
          <input className="min-width-7" onChange={(event) => {setUsername(event.target.value)} } value={username} placeholder="username"/>
          <button type="submit" onClick={handleSubmit} className="ml-10 min-width-3">Submit</button>
        </div>
        <div className="flex-row max-width-7  items-center">
         <p className="flex-grow-2 font-35">One plus 7 </p>
         <button className="flex-grow-1 height-40 mx-10">
            Follow
         </button>
          <button className="flex-grow-1 height-40 mx-10 max-width-40">
             ^
         </button>
      </div>
        <div className="flex-row justify-between max-width-8">
           <p>3330 posts</p>
           <p>3.4m followers</p>
           <p>5.1m following</p>
        </div>
           <p className="my-4">Divyank Srivastava</p>
           <p className="my-4">The newest addition to flagship killer lineup <span style={{color : 'blue' }}>#one plus 8T</span> available now </p>
           <a href="https://www.oneplus.in/" target="blank" className="decoration">oneplusgofurther.com</a>
           <p className="font-14 pt-10 "> <span style={{color : 'grey'}}> Followed by </span> mark <span style={{color : 'grey'}}>and </span>  Jenny</p>
      </div>
     </div>
     <div className="tabs pt-100">
      <Tabs>
        <TabList>
          <Tab>POSTS</Tab>
          <Tab>IGTV</Tab>
         <Tab>TAGGED</Tab>
        </TabList>

      <TabPanel>
         <div className="flex-row">
           <img className = "flex-grow-1 mx-10" src="/profile.jpeg" alt="pick"/>
           <img className = "flex-grow-1 mx-10" src="/profile.jpeg" alt="pick"/>
           <img className = "flex-grow-1 mx-10" src="/profile.jpeg" alt="pick"/>
         </div >
      </TabPanel>
      <TabPanel>
        <div className="flex-row">
          <img className = "flex-grow-1 mx-10" src="/logo192.png" alt="pick"/>
          <img className = "flex-grow-1 mx-10" src="/logo192.png" alt="pick"/>
          <img className = "flex-grow-1 mx-10" src="/logo192.png" alt="pick"/>
      </div >
     </TabPanel>
     <TabPanel>
          <h2>This will be your page for tagged items</h2>
     </TabPanel>
  </Tabs>
    </div>
  </div>
  );
}

export default App;
