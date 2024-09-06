import cvIcon from '../assets/cv.png';
import Icon from '@mdi/react';
import { useState } from 'react';
import {
  mdiAccountOutline,
  mdiFileImagePlusOutline,
  mdiBriefcaseVariantOutline,
  mdiPhoneOutline,
  mdiEmailOpenOutline,
  mdiMapMarkerOutline,
  mdiTextBoxEditOutline,
} from '@mdi/js';

export default function Resume({ userInfo, isVisible, handleEdit }) {
  const [profilePicture, setProfilePicture] = useState();

  const upload = (e) => {
    const image = e.target.files[0];

    if (!image.type.includes('image')) {
      return alert('Only images are allowed!');
    }

    if (image.size > 10_000_000) {
      return alert('Maximum upload size is 10MB!');
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);

    fileReader.onload = (e) => {
      setProfilePicture(e.target.result);
    };
  };

  return (
    <div className={`cv-container ${isVisible ? 'show' : ''}`}>
      <section>
        <aside>
          <h1>
            <img src={cvIcon} className="cvIcon" alt="cv-icon" />
            CV/Resume
          </h1>
          <div className="edit-btns">
            <button onClick={handleEdit}>
              {' '}
              <Icon path={mdiTextBoxEditOutline} size={1} />
              Edit
            </button>
          </div>
        </aside>
        <main>
          <div className="resume">
            <div className="cv-header">
              <h1>
                {userInfo.firstName} {userInfo.lastName}
              </h1>
            </div>
            <div className="cv-main">
              <h2>{userInfo.positionTitle}</h2>
              <div className="profile-section">
                <h2>
                  <Icon
                    path={mdiAccountOutline}
                    title="User Profile"
                    size={1.2}
                    color="black"
                  />
                  Profile
                </h2>
                <p>{userInfo.profile}</p>
              </div>
              <div className="work-section">
                <h2>
                  <Icon path={mdiBriefcaseVariantOutline} size={1.2} /> Work
                  Experience
                </h2>
                <div>
                  <div className="work-period">
                    <p>{userInfo.dateFrom.slice(0, 4)}</p>
                    &ndash;
                    <p>{userInfo.dateUntil.slice(0, 4)}</p>
                  </div>
                  <div className="work-info">
                    <h3>{userInfo.companyName}</h3>
                    <h4>{userInfo.positionTitle}</h4>
                    <p>&#8226; {userInfo.mainResponsibilities}</p>
                  </div>
                </div>

                <div>
                  <div className="work-period">
                    <p>{userInfo.secdateFrom.slice(0, 4)}</p>
                    &ndash;
                    <p>{userInfo.secdateUntil.slice(0, 4)}</p>
                  </div>
                  <div className="work-info">
                    <h3>{userInfo.seccompanyName}</h3>
                    <h4>{userInfo.secpositionTitle}</h4>
                    <p>&#8226; {userInfo.secmainResponsibilities}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="personalInfo">
              <div
                className="profile-picture"
                style={{
                  backgroundImage: profilePicture && `url(${profilePicture})`,
                }}
              >
                <h1 className="upload-icon">
                  <Icon
                    path={mdiFileImagePlusOutline}
                    size={2}
                    color={'#207695'}
                  />
                </h1>

                <input
                  className="file-uploader"
                  type="file"
                  accept="image/*"
                  onChange={upload}
                />
              </div>
              <div>
                <p>
                  <Icon path={mdiPhoneOutline} size={1} /> {userInfo.phoneNum}
                </p>
                <p>
                  <Icon path={mdiEmailOpenOutline} size={1} /> {userInfo.email}
                </p>
                <p>
                  <Icon path={mdiMapMarkerOutline} size={1.2} />
                  {userInfo.address}
                </p>
              </div>
              <div className="education">
                <h2>
                  <span>Education</span>
                </h2>
                <div>
                  <h3>{userInfo.titleOfStudy}</h3>
                  <h4>{userInfo.schoolName}</h4>
                  <p>{userInfo.dateOfStudy}</p>
                </div>
                {userInfo.secschoolName ? (
                  <div>
                    <h3>{userInfo.sectitleOfStudy}</h3>
                    <h4>{userInfo.secschoolName}</h4>
                    <p>{userInfo.secdateOfStudy}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </main>
      </section>
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
