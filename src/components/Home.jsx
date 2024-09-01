import cvIcon from '../assets/cv.png';
import EducationalExp from './EducationalExp';
import GeneralInfo from './GeneralInfo';
import PracticalExp from './PracticalExp';

export default function Home() {
  return (
    <div className="home-container">
      <h1>
        <img src={cvIcon} className="cvIcon" alt="cv-icon" />
        CV/Resume Generator
      </h1>
      <form>
        <GeneralInfo />
        <EducationalExp />
        <PracticalExp />
        <button>Submit</button>
      </form>
    </div>
  );
}
