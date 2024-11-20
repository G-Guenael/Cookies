// Références aux éléments HTML
const saveButton = document.getElementById("save-cookie-btn");
const showButton = document.getElementById("show-cookies-btn");
const cookieKeyInput = document.getElementById("cookie-key");
const cookieValueInput = document.getElementById("cookie-value");
const cookiesList = document.getElementById("cookies-list");
const titreList = document.getElementById("titreListCookies");

// Événement : Sauvegarder un cookie
saveButton.addEventListener("click", () => {
  const key = cookieKeyInput.value.trim();
  const value = cookieValueInput.value.trim();

  if (!key || !value) {
    alert("Veuillez remplir les deux champs !");
    return;
  }

  console.log(key+ " "+value);

  // Stocker le cookie
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  // document.cookie = encodeURIComponent(key)+"="+encodeURIComponent(value);

  // Effacer les champs
  cookieKeyInput.value = "";
  cookieValueInput.value = "";

  alert("Cookie enregistré !");
});

// Événement : Afficher les cookies
showButton.addEventListener("click", () => {
  // Effacer la liste existante
  cookiesList.innerHTML = "";
  titreList.style.display= "block";

  // Lire et afficher les cookies
  const cookies = document.cookie.split("; ");
  // resultat :
  // cookies (suite à la fonction split) =>  ["user=Arnaud","cookie2:light"];

  if (!cookies[0]) {
    cookiesList.innerHTML = "<li>Aucun cookie enregistré</li>";
    return;
  }

  cookies.forEach(cookie => {
    const [key, value] = cookie.split("=");

    // Ajouter chaque cookie à la liste
    const listItem = document.createElement("li");
    listItem.textContent = `${decodeURIComponent(key)} : ${decodeURIComponent(value)}`;
    cookiesList.appendChild(listItem);
  });
});