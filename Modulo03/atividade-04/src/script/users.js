function fetchFromAPI(numberOfUsers = 3) {
  let URL = `https://randomuser.me/api/?results=${numberOfUsers}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderUserData(data.results))
    .catch((error) => alert(error));
}

function renderUserData(users) {
  let testimonialsContainer = document.querySelector(".cards__testimonials");
  testimonialsContainer.innerHTML = "";

  const testimonialsTexts = [
    "Minha relação com a comida mudou completamente, agora faço escolhas mais conscientes e saudáveis!",
    "Com o acompanhamento nutricional, alcancei meus objetivos de maneira sustentável e equilibrada.",
    "Nunca me senti tão bem com minha alimentação! O planejamento personalizado fez toda a diferença.",
  ];

  users.forEach((user, index) => {
    const testimonialCard = `
            <div class="card__test" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div class="testimonials__text">
                    <p>"${
                      testimonialsTexts[index % testimonialsTexts.length]
                    }"</p>
                </div>
                <div class="info__test">
                    <img class="testimonials__img" src="${
                      user.picture.large
                    }" alt="Foto de ${user.name.first} ${user.name.last}">
                    <p class="nome">${user.name.first} ${user.name.last}</p>
                    <p class="prof">Paciente de Nutrição</p>
                    <p class="redes">@${user.login.username}</p>
                </div>
            </div>
        `;

    testimonialsContainer.innerHTML += testimonialCard;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchFromAPI();
});
