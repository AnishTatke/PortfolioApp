'use client';
import { useState, useEffect } from 'react';
import { FormSubmitButton } from '@/app/components/FormSubmitButton';
import { UserProfileInterface } from '@/lib/interfaces';

import NamedField from '../components/NamedField';
import ListField from '../components/ListField';
import { SingleImage } from '../components/SingleImage';

const ProfileForm: React.FC<{ profile: UserProfileInterface | any, setProfile: any }> = ({ profile, setProfile }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Profile:', profile);
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex flex-col gap-4'>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={profile.name}
      onChange={handleChange}
      className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
    <input
      type="text"
      name="primary_profile"
      placeholder="Primary Profile"
      value={profile.primary_profile}
      onChange={handleChange}
      className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
    <input
      type="text"
      name="location"
      placeholder="Location"
      value={profile.location}
      onChange={handleChange}
      className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
    <input
      type="text"
      name="image"
      placeholder="Profile Image URL"
      value={profile.image}
      onChange={handleChange}
      className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
    <textarea
      name="about"
      placeholder="About"
      value={profile.about}
      onChange={handleChange}
      className="p-2 border-themeopacque border-[1px] bg-transparent text-white rounded" />
    <FormSubmitButton />
    </form>
  );
};

const ProfileCard: React.FC<{ profile: UserProfileInterface | any }> = ({ profile }) => {
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col'>
        <NamedField name='Name' value={profile.name} />
        <div className='w-2/3 flex flex-row'>
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

async function fetchProfile (setProfile: any, setError: any) {
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

export const Profile: React.FC<{ canEdit?: boolean }> = ({ canEdit }) => {
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

  if (canEdit) {
    return (
      <ProfileForm profile={profile} setProfile={setProfile} />
    );
  } else {
    return (
      <ProfileCard profile={profile} />
    )
  }
};