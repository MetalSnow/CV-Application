import Input from './Input';

export default function GeneralInfo({ handleChange }) {
  return (
    <fieldset>
      <legend>General Information</legend>
      <Input
        label={'First Name:'}
        type={'text'}
        placeholder={'Enter First Name'}
        handleChange={handleChange}
      />
      <Input
        label={'Last Name:'}
        type={'text'}
        placeholder={'Enter Last Name'}
        handleChange={handleChange}
      />
      <Input
        label={'Phone Number:'}
        type={'tel'}
        placeholder={'Enter Phone Number'}
        handleChange={handleChange}
      />
      <Input
        label={'Email Address:'}
        type={'email'}
        placeholder={'Enter Email Adress'}
        handleChange={handleChange}
      />
    </fieldset>
  );
}
