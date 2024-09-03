import Input from './Input';

export default function GeneralInfo({ handleChange }) {
  return (
    <fieldset>
      <legend>General Information</legend>
      <div>
        <Input
          label={'First Name:'}
          id={'firstName'}
          type={'text'}
          placeholder={'Enter First Name'}
          handleChange={handleChange}
        />
        <Input
          label={'Last Name:'}
          id={'lastName'}
          type={'text'}
          placeholder={'Enter Last Name'}
          handleChange={handleChange}
        />
        <Input
          label={'Phone Number:'}
          id={'phoneNum'}
          type={'tel'}
          placeholder={'Enter Phone Number'}
          handleChange={handleChange}
        />
        <Input
          label={'Email Address:'}
          id={'email'}
          type={'email'}
          placeholder={'Enter Email Adress'}
          handleChange={handleChange}
        />
      </div>
      <label>
        Profile:
        <textarea
          id="profile"
          maxLength={170}
          placeholder={'Tell us your profile'}
          onChange={handleChange}
        ></textarea>
      </label>
    </fieldset>
  );
}
