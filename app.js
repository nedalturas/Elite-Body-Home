
const Services = [

  {
    name: "Service 1",
    servicepic: "",
    description: "This is a service description for service 1"
  },
  {
    name: "Service 2",
    servicepic: "",
    description: "This is a service description for service 2"
  },
  {
    name: "Service 3",
    servicepic: "",
    description: "This is a service description for service 3"
  },
  {
    name: "Service 4",
    servicepic: "",
    description: "This is a service description for service 4"
  },

];


function createServiceCard(Services){

  return `
    <article>
      <h3>${Services.name}</h3>
      <p>${Services.description}</p>
    </article>
  `

}

const serviceContainer = document.getElementById('service_container')
Services.forEach((Services) => {

  serviceContainer.innerHTML += createServiceCard(Services);

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
