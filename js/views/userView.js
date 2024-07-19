import { elements } from "./base.js";

export const renderUser = ({
  avatar_url,
  html_url,
  public_repos,
  followers,
  following,
  github_location
}) => {

  let localizacao = "Desconhecido"
  if (github_location !== null) {
    localizacao = github_location;
  }

  const markup = `
    <div class="profile-header">
      <img src="${avatar_url}" alt="Avatar">
      <a href="${html_url}" target="_blank">Visitar perfil</a>
    </div>
    <ul class="profile-list">
      <li>Repositórios: ${public_repos}</li>
      <li>Seguidores: ${followers}</li>
      <li>Seguindo: ${following}</li>
      <li>Localização: ${localizacao}</li>
    </ul> 
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};
