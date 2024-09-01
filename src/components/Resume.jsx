import cvIcon from '../assets/cv.png';

export default function Resume() {
  return (
    <div className="cv-container">
      <header>
        <h1>
          <img src={cvIcon} className="cvIcon" alt="cv-icon" />
          CV/Resume
        </h1>
        <div className="edit-btns">
          <button>Edit</button>
          <button>Download</button>
        </div>
      </header>
      <main>
        <div>
          <h1>
            {} {}
          </h1>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
