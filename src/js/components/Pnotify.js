import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { error } from '@pnotify/core/dist/PNotify';

export default function () {
  error({
    title: 'Too many matches found.Please enter a more specific query.',
    delay: 1000,
  });
}
