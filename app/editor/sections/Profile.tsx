'use client';
import { useState, useEffect } from 'react';
import { FormSubmitButton } from '@/app/components/FormSubmitButton';
import { UserProfileInterface } from '@/lib/interfaces';

import { NamedField, NamedFormField, NamedFormTextArea } from '../components/NamedField';
import { ListField, ListFormField } from '../components/ListField';
import { SingleImage } from '../components/SingleImage';
import { EditCard } from '@/app/components/Cards';

const ProfileForm: React.FC<{
  profile: UserProfileInterface | any,
  setProfile: any, 
  setCanEdit: any
}> = ({ profile, setProfile, setCanEdit }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.name, e.target.value);
    setProfile((profile: any) => ({
      ...profile,
      [e.target.name]: e.target.value
    }));
    console.log(profile)

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Profile:', profile);
    setCanEdit(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4'
    >
      <NamedFormField name='name' value={profile.name} handleChange={handleChange} />
      <ListFormField name='emails' values={profile.emails} handleChange={handleChange} />
      <ListFormField name='phone_number' values={profile.phone_number} handleChange={handleChange} />
      <NamedFormField name='primary_profile' value={profile.primary_profile} handleChange={handleChange} />
      <ListFormField name='other_profiles' values={profile.other_profiles} handleChange={handleChange} />
      <NamedFormField name='location' value={profile.location} handleChange={handleChange} />
      <NamedFormTextArea name='about' value={profile.about} handleChange={handleChange} />
      <FormSubmitButton />
    </form>
  );
};

const ProfileCard: React.FC<{ profile: UserProfileInterface | any }> = ({ profile }) => {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-2/3'>
        <NamedField name='Name' value={profile.name} />
        <div className='flex flex-row'>
          <div className='w-1/2'>
            <ListField name="Email" values={profile.emails} />
            <ListField name="Phone" values={profile.phone_number} />
          </div>
          <div className='w-1/2'>
            <NamedField name='Primary Profile' value={profile.primary_profile} />
            <ListField name='Other Profiles' values={profile.other_profiles} />
            <NamedField name='Location' value={profile.location} />
          </div>
        </div>
        <NamedField name='About' value={profile.about} />
      </div>
      <div className='w-1/3 mx-auto justify-items-center'>
        <SingleImage image={profile.image} alt={profile.name} />
      </div>
    </div>
  );
}

const ProfileSection: React.FC<{
  profile: UserProfileInterface | any,
  setProfile: any,
  canEdit?: boolean,
  setCanEdit?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ profile, setProfile, canEdit, setCanEdit }) => {
  if (canEdit) {
    return <ProfileForm profile={profile} setProfile={setProfile} setCanEdit={setCanEdit} />;
  } else {
    return <ProfileCard profile={profile} />;
  }
};

async function fetchProfile(setProfile: any, setError: any) {
  try {
    const res = await fetch('/api/profile');
    if (!res.ok) {
      throw new Error('Failed to fetch profile');
    }
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    } else {
      setProfile(data);
    }
  } catch (err) {
    console.error(err);
    setError("Failed to fetch profile");
  }
}



export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfileInterface>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfile(setProfile, setError);
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <EditCard>
      <ProfileSection profile={profile} setProfile={setProfile}/>
    </EditCard>
  )
};