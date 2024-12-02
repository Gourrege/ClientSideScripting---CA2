const app = document.getElementById('root');

// Create an image element for the logo and set its source
const logo = document.createElement('img');
logo.src = 'FormulaOne.png';

// Create a container div to hold the movie cards, set its class for styling
const container = document.createElement('div');
container.innerHTML = "";
container.setAttribute('class', 'container');

// Append the logo and container to the root element
app.appendChild(logo);
app.appendChild(container);

fetch('https://ergast.com/api/f1/2023/drivers.json')
  .then(response => response.json())
  .then(data => {
    const drivers = data.MRData.DriverTable.Drivers;
    drivers.forEach(driver => {
      console.log(`Name: ${driver.givenName} ${driver.familyName}`);
      console.log(`Number: ${driver.permanentNumber}`);
      console.log(`Nationality: ${driver.nationality}`);
      console.log(`More Info: ${driver.url}`);
      console.log('---');
      createCard(driver)
    });
  })
  .catch(error => console.error('Error fetching data:', error));

function createCard(driver) 
{
    const card = document.createElement('div');
    card.setAttribute('class', 'card'); // Styling class for each movie card
  
    const h1 = document.createElement('h1');
    h1.textContent = `Name: ${driver.givenName}`; // Set the title for each card
  
    //const director = document.createElement('h2')
    //director.textContent = movie.director 

    container.appendChild(card); // Append card to container
    card.appendChild(h1);
}