import './styles/App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import data from './components/intialData';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(data);

  const [isHomeVisible, setHomeVisibility] = useState(true);
  const [isResumeVisible, setResumeVisibility] = useState(false);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [key]: value });
  };

  console.log(userInfo);

  const submitForm = () => {
    setTimeout(() => setResumeVisibility(true), 400);
    setHomeVisibility(false);
  };
  return (
    <>
      <Home
        submitForm={submitForm}
        handleChange={handleChange}
        isVisible={isHomeVisible}
      />
      <Resume userInfo={userInfo} isVisible={isResumeVisible} />
    </>
  );
}

export default App;
