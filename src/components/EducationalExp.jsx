import Input from './Input';

export default function EducationalExp() {
  return (
    <fieldset>
      <legend>Educational Experience</legend>
      <Input label={'School Name:'} type={'text'} placeholder={'School Name'} />
      <Input
        label={'Title Of Study:'}
        type={'text'}
        placeholder={'Title Of Study'}
      />
      <Input label={'Date Of Study:'} type={'date'} />
    </fieldset>
  );
}
