const gridObjects = [
  {
   name: 'Canva',
   link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png',
   about: 'Create compelling visuals for your marketing.'
  },
  {
    name: 'Mailchimp for Salesforce',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png',
    about: 'Sync your Mailchimp subscribers and Salesforce® leads across platforms.'
  },
  {
    name: 'Instagram',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
    about: 'Promote and share your Instagram posts in email campaigns.'
  },
  {
    name: 'Shopify',
    link: 'https://www.vcanaglobal.com/wp-content/uploads/2020/03/shopify-logo-png-transparent.png',
    about: 'Sync Shopify customers, products, and purchase data to Mailchimp.'
  },
  {
    name: 'Google Analytics',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/480px-Google_%22G%22_Logo.svg.png',
    about: 'Unlock powerful insights with campaign, website, or landing page data.'
  },
  {
    name: 'WooCommerce',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png',
    about: 'Power your ecommerce store with smart marketing features.'
  },
  {
    name: 'QuickBooks Online',
    link: 'https://cdn.shopify.com/app-store/listing_images/1c65094745e009d3b7622ae3b30b2dc0/icon/CK-GiqSsrfYCEAE=.png',
    about: 'Bring together your marketing tools and invoice data.'
  },
  {
    name: 'Squarespace Commerce',
    link: 'https://s3-us-west-1.amazonaws.com/companies.comparably.com/361717_logo_squarespace.png',
    about: 'Market your ecommerce business and drive sales.'
  },
  {
    name: 'Zapier',
    link: 'https://cdn.zapier.com/zapier/images/logos/social.png',
    about: 'Automatically pass data between web services without a single line of code'
  }
];
// integrations via JS
 const gridContainer = document.querySelector('.integrations__grid');
 const gridTemplate = document.querySelector('#card-template').content;

 const gridElement = (name, link, about) => {
 const card = gridTemplate.cloneNode(true);

  card.querySelector('.grid__object_image').src = link;
  card.querySelector('.grid__object_name').textContent = name;
  card.querySelector('.grid__object_about').textContent = about;

 return card;
 };

 function renderCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    const createCard = gridElement(gridObjects[i].name, gridObjects[i].link, gridObjects[i].about);
    gridContainer.append(createCard);
  }
 };
 renderCards(gridObjects);
//  /integrations via JS
//

// open and close popups
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

// integrations add
const addButton = document.querySelector('.integrations__add-button');
const popupAdd = document.querySelector('.popup__add');
const closeButton = document.querySelector('.popup__close-btn');
// open popup
const openAddProfile = () => {
  openPopup(popupAdd);
}
addButton.addEventListener('click', openAddProfile);
//  /open popup
// close popup
const closeProfile = () => {
  closePopup(popupAdd);
}
closeButton.addEventListener('click', closeProfile);
// /close popup

const formAdd = document.querySelector('.popup__add-form');
const inputLink = document.querySelector('.popup__input_type_link');
const inputName = document.querySelector('.popup__input_name');
const inputAbout = document.querySelector('.popup__input_about');

const addNewIntegr = () => {
  const name = inputName.value;
  const link = inputLink.value;
  const about = inputAbout.value;
  gridContainer.append(gridElement(name, link, about));
}

function handleAddFormSumbit (evt) {
  evt.preventDefault();
  addNewIntegr();
  closePopup(popupAdd);
  formAdd.reset();
 }
 formAdd.addEventListener('submit', handleAddFormSumbit);
