import { onNavigate } from '../main.js';

export const Profile = () => {
  const ensayo = `
      <h1>Vista de profile</h1>`;

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = ensayo;
  return homeDiv;
};