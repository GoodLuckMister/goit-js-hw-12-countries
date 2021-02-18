import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

export default function () {
  const myError = error({
    title: 'Too many matches found.Please enter a more specific query.',
    closer: false,
    sticker: false,
    icon: true,
    hide: true,
    delay: 1000,
  });
}
