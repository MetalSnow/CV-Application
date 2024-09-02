import cvIcon from '../assets/cv.png';
import EducationalExp from './EducationalExp';
import GeneralInfo from './GeneralInfo';
import PracticalExp from './PracticalExp';

export default function Home({ handleChange, submitForm, isVisible }) {
  return (
    <div className={`home-container ${isVisible ? '' : 'hide'}`}>
      <h1>
        <img src={cvIcon} className="cvIcon" alt="cv-icon" />
        CV/Resume Generator
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <GeneralInfo handleChange={handleChange} />
        <EducationalExp handleChange={handleChange} />
        <PracticalExp handleChange={handleChange} />
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
