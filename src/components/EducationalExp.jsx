import Input from './Input';

export default function EducationalExp({ handleChange }) {
  return (
    <fieldset>
      <legend>Educational Experience</legend>
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
    </fieldset>
  );
}
