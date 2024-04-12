const biometricsText = document.getElementById("biometricsText");

const form = document.getElementById("biometricsForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  getBiometrics(name);
  biometricsText.focus();
});

async function getBiometrics(name) {
  const response = await fetch(
    `https://www.swapi.tech/api/people/?name=${name}`
  );
  const jsonResponse = await response.json();
  const props = jsonResponse.result[0]?.properties;
  const data = props
    ? `Name: ${props.name}
    Gender: ${props.gender}
    Birth Year: ${props.birth_year}
    Height: ${props.height}
    Mass: ${props.mass}
    Eye Color: ${props.eye_color}
    Hair Color: ${props.hair_color}
    Skin Color: ${props.skin_color}`
    : "Biometrics not found...";
  displayBiometrics(data);
}

function displayBiometrics(data) {
  biometricsText.innerText = data;
}
