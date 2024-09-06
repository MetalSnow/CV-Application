import Input from './Input';
import { useState } from 'react';

export default function PracticalExp({ handleChange }) {
  const [showMore, setShowMore] = useState(false);

  const handlePlusBtn = () => {
    setShowMore(true);
  };
  return (
    <fieldset className="practicalFieldSet">
      <legend>Practical Experience</legend>
      <div>
        <Input
          label={'Company Name:'}
          id={'companyName'}
          type={'text'}
          placeholder={'School Name'}
          handleChange={handleChange}
        />
        <Input
          label={'Position Title:'}
          id={'positionTitle'}
          type={'text'}
          placeholder={'Title Of Study'}
          handleChange={handleChange}
        />
        <Input
          label={'Main Responsibilities:'}
          id={'mainResponsibilities'}
          type={'text'}
          placeholder={'Job Responsibilities'}
          handleChange={handleChange}
        />

        <Input
          label={'Date From:'}
          id={'dateFrom'}
          type={'date'}
          handleChange={handleChange}
        />
        <Input
          label={'Until:'}
          id={'dateUntil'}
          type={'date'}
          handleChange={handleChange}
        />
      </div>
      <button className="addBtn" onClick={handlePlusBtn}>
        +
      </button>
      {showMore && (
        <PracticalInputs idPrefix={'sec'} handleChange={handleChange} />
      )}
    </fieldset>
  );
}

function PracticalInputs({ idPrefix, handleChange }) {
  return (
    <div>
      <Input
        label={'Company Name:'}
        id={`${idPrefix}companyName`}
        type={'text'}
        placeholder={'School Name'}
        handleChange={handleChange}
      />
      <Input
        label={'Position Title:'}
        id={`${idPrefix}positionTitle`}
        type={'text'}
        placeholder={'Title Of Study'}
        handleChange={handleChange}
      />
      <Input
        label={'Main Responsibilities:'}
        id={`${idPrefix}mainResponsibilities`}
        type={'text'}
        placeholder={'Job Responsibilities'}
        handleChange={handleChange}
      />

      <Input
        label={'Date From:'}
        id={`${idPrefix}dateFrom`}
        type={'date'}
        handleChange={handleChange}
      />
      <Input
        label={'Until:'}
        id={`${idPrefix}dateUntil`}
        type={'date'}
        handleChange={handleChange}
      />
    </div>
  );
}
