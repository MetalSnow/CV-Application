import cvIcon from '../assets/cv.png';

export default function Resume({ userInfo, isVisible }) {
  return (
    <div className={`cv-container ${isVisible ? 'show' : ''}`}>
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
            {userInfo.firstName} {userInfo.lastName}
          </h1>
        </div>
        <div>
          <h2>{userInfo.positionTitle}</h2>
        </div>
      </main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/curriculum-vitae"
          title="curriculum vitae icons"
        >
          CV icon created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}
