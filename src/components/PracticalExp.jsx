import Input from './Input';

export default function PracticalExp({ handleChange }) {
  return (
    <fieldset>
      <legend>Practical Experience</legend>
      <Input
        label={'Company Name:'}
        type={'text'}
        placeholder={'School Name'}
        handleChange={handleChange}
      />
      <Input
        label={'Position Title:'}
        type={'text'}
        placeholder={'Title Of Study'}
        handleChange={handleChange}
      />
      <Input
        label={'Main Responsibilities:'}
        type={'text'}
        placeholder={'Job Responsibilities'}
        handleChange={handleChange}
      />

      <Input label={'Date From:'} type={'date'} handleChange={handleChange} />
      <Input label={'Until:'} type={'date'} handleChange={handleChange} />
    </fieldset>
  );
}
