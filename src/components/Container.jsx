import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from '../lib/constants';

const Container = () => {
  const [text, setText] = useState('');

  const stats = {
    numberOfWords: text.split(/\s+/).filter((word) => word !== '').length,
    numberOfCharachters: text.length,
    facebookCharacters: FACEBOOK_MAX_CHARACTERS - text.length,
    instagramCharacters: INSTAGRAM_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
