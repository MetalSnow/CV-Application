import Input from './Input';
import { useState } from 'react';

export default function EducationalExp({ handleChange }) {
  const [showMore, setShowMore] = useState(false);

  const handlePlusBtn = () => {
    setShowMore(true);
  };

  return (
    <fieldset className="educationFieldSet">
      <legend>Educational Experience</legend>
      <div>
        <Input
          label={'School Name:'}
          id={'schoolName'}
          type={'text'}
          placeholder={'School Name'}
          handleChange={handleChange}
        />
        <Input
          label={'Title Of Study:'}
          id={'titleOfStudy'}
          type={'text'}
          placeholder={'Title Of Study'}
          handleChange={handleChange}
        />
        <Input
          label={'Date Of Study:'}
          id={'dateOfStudy'}
          type={'date'}
          handleChange={handleChange}
        />
      </div>
      <button className="addBtn" onClick={handlePlusBtn}>
        +
      </button>
      {showMore && (
        <EducationInputs idPrefix={'sec'} handleChange={handleChange} />
      )}
    </fieldset>
  );
}

function EducationInputs({ idPrefix, handleChange }) {
  return (
    <div>
      <Input
        label={'School Name:'}
        id={`${idPrefix}schoolName`}
        type={'text'}
        placeholder={'School Name'}
        handleChange={handleChange}
      />
      <Input
        label={'Title Of Study:'}
        id={`${idPrefix}titleOfStudy`}
        type={'text'}
        placeholder={'Title Of Study'}
        handleChange={handleChange}
      />
      <Input
        label={'Date Of Study:'}
        id={`${idPrefix}dateOfStudy`}
        type={'date'}
        handleChange={handleChange}
      />
    </div>
  );
}
