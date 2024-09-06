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

  const submitForm = () => {
    setTimeout(() => {
      setResumeVisibility(true);
      window.scrollTo(0, 0);
    }, 400);
    setHomeVisibility(false);
    console.log(document.querySelector('.resume'));
  };

  const handleEdit = () => {
    setTimeout(() => setResumeVisibility(false), 400);
    setHomeVisibility(true);
  };

  return (
    <>
      <Home
        submitForm={submitForm}
        handleChange={handleChange}
        isVisible={isHomeVisible}
      />
      <Resume
        userInfo={userInfo}
        isVisible={isResumeVisible}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
