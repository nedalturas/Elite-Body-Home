window.addEventListener('scroll', function(){

  const navbar = document.getElementById('navbar');

  if (window.pageYOffset > 0) {

    navbar.style.boxShadow = '0px 0px 16px -4px rgba(0, 0, 0, 0.75)';
    navbar.style.transition = 'boxShadow 500ms';


  } else {
    navbar.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)';
  }

});

const Services = [

  {
    image: "assets/header.jpg",
    name: "Weight Management",
    description: "This is a service description for service 1"
  },
  {
    image: "assets/header.jpg",
    name: "Physiotherapy",
    description: "This is a service description for service 2"
  },
  {
    image: "assets/header.jpg",
    name: "Skin Care",
    description: "This is a service description for service 3"
  },
  {
    image: "assets/header.jpg",
    name: "Home Care",
    description: "This is a service description for service 3"
  },
  {
    image: "assets/header.jpg",
    name: "Home Lab Test",
    description: "This is a service description for service 3"
  },
  {
    image: "assets/header.jpg",
    name: "IV Drips",
    description: "This is a service description for service 3"
  },
  {
    image: "assets/header.jpg",
    name: "Laser Hair Removal",
    description: "This is a service description for service 3"
  }
];


function createServiceCard(Services){

  return `
    <article class="service-card">
        <div>
          <img src=${Services.image} class="service-pic"/>
          <h5>${Services.name}</h5>
          <p>${Services.description}</p>
        </div>
        <a href="#" role="button">Learn More</a>
    </article>
  `;

}

const serviceContainer = document.getElementById('service_container')
let currentRow = document.createElement('div');
currentRow.classList.add('service_row');
serviceContainer.appendChild(currentRow);
let cardCount = 0;


Services.forEach((Services, index) => {

  // serviceContainer.innerHTML += createServiceCard(Services);

  // serviceContainer.style.margin = '2em';

  currentRow.innerHTML += createServiceCard(Services);
  cardCount++;

  if (cardCount > 3) {

    currentRow = document.createElement('div');
    currentRow.classList.add('service_row');
    serviceContainer.appendChild(currentRow);
    cardCount = 1;

  }

});


// fetch('services.json')
//   .then((response) => response.json())
//   .then((data) => {
//     renderCategories(data);
//   })
//   .catch((error) => console.error('Error:', error));

// function renderCategories(data) {
//   const categoryContainer = document.getElementById('category-container');
//   const serviceDetails = document.getElementById('service-details');

//   const categories = [...new Set(data.map((service) => service.category))];

//   categories.forEach((category) => {
//     const categoryItem = document.createElement('li');
//     categoryItem.classList.add('category-item');
//     categoryItem.style.listStyle = 'none';

//     const categoryTitle = document.createElement('h3');
//     categoryTitle.textContent = category;
//     categoryTitle.addEventListener('click', () => {
//       toggleServices(categoryItem);
//     });

//     const serviceList = document.createElement('ul');
//     serviceList.classList.add('service-list');

//     data
//       .filter((service) => service.category === category)
//       .forEach((service) => {
//         const serviceItem = document.createElement('li');
//         serviceItem.classList.add('service-item');

//         const serviceLink = document.createElement('a');
//         serviceLink.href = '#';
//         serviceLink.textContent = service.name;
//         serviceLink.addEventListener('click', () => {
//           scrollToService(service.id);
//         });

//         serviceItem.appendChild(serviceLink);
//         serviceList.appendChild(serviceItem);
//       });

//     categoryItem.appendChild(categoryTitle);
//     categoryItem.appendChild(serviceList);
//     categoryContainer.appendChild(categoryItem);

//     const serviceSection = document.createElement('div');
//     serviceSection.id = category;
//     serviceSection.classList.add('service-section');

//     data
//       .filter((service) => service.category === category)
//       .forEach((service) => {
//         const sectionTitle = document.createElement('h2');
//         sectionTitle.textContent = service.name;

//         const sectionDescription = document.createElement('p');
//         sectionDescription.textContent = service.description;

//         const sectionPrice = document.createElement('p');
//         sectionPrice.textContent = `Price: $${service.price}`;

//         serviceSection.appendChild(sectionTitle);
//         serviceSection.appendChild(sectionDescription);
//         serviceSection.appendChild(sectionPrice);
//       });

//     serviceDetails.appendChild(serviceSection);
//   });
// }

// function toggleServices(categoryItem) {
//   const serviceList = categoryItem.querySelector('.service-list');
//   if (serviceList.style.display === 'none') {
//     serviceList.style.display = 'block';
//   } else {
//     serviceList.style.display = 'none';
//   }
// }

// function scrollToService(id) {
//   const serviceElement = document.getElementById(id);
//   if (serviceElement) {
//     serviceElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }
