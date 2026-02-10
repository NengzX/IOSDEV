// =========================
// APP DATA CONFIGURATION
// =========================

// APP LIST
// Logo URLs (external)
const KSIGN_LOGO = 'https://i.ibb.co/ccmHX4dW/ksign.png';
const ESIGN_LOGO = 'https://i.ibb.co/WvjVZkrq/Esign.png';

const ksignApps = [
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/03zH0o', img: KSIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'KSign PowerChina', url: 'https://api.khoindvn.io.vn/xuuKqO', img: KSIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'KSign PowerChina 1', url: 'https://api.khoindvn.io.vn/QdVVh3', img: KSIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'KSign PowerChina 2', url: 'https://api.khoindvn.io.vn/t1UK1D', img: KSIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'KSign PowerChina 3', url: 'https://api.khoindvn.io.vn/NU8PP6', img: KSIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'KSign', url: 'https://api.khoindvn.eu.org/XSCvQT', img: KSIGN_LOGO, descriptions: 'Qingdao Rural Commercial Bank Co., Ltd ' }, 
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/g65UJy', img: KSIGN_LOGO, descriptions: 'Commission on Elections ' },
  { name: 'KSign Com V1', url: 'https://api.khoindvn.io.vn/ZsgCVX', img: KSIGN_LOGO, descriptions: 'Commission on Elections ' },
  { name: 'KSign Com V2', url: 'https://api.khoindvn.io.vn/VNNlkL', img: KSIGN_LOGO, descriptions: 'Commission on Elections ' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/9VDZ4Y', img: KSIGN_LOGO, descriptions: 'Wasu Media & Network Co' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/h5YrG1', img: KSIGN_LOGO, descriptions: 'Luoyang Postal Administration' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/TsTFIu', img: KSIGN_LOGO, descriptions: 'Etisalat - Emirates Telecommunications Corporation' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/IUurbX', img: KSIGN_LOGO, descriptions: 'China National Heavy Duty Truck Group Co., Ltd' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/5PBonm', img: KSIGN_LOGO, descriptions: 'China Telecommunications Corporation' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/1H9iee', img: KSIGN_LOGO, descriptions: 'Tianjin University of Commerce' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/qYiNnB', img: KSIGN_LOGO, descriptions: 'VIETTEL GROUP' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/xwgru5', img: KSIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'KSign ChiBa V1', url: 'https://api.khoindvn.io.vn/KYD1nK', img: KSIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'KSign ChiBa V2', url: 'https://api.khoindvn.io.vn/EIpxft', img: KSIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'KSign ChiBa V3', url: 'https://api.khoindvn.io.vn/ZNciX8', img: KSIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'KSign ChiBa V4', url: 'https://api.khoindvn.io.vn/nBQF8h', img: KSIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/5dujHz', img: KSIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'KSign VN V1', url: 'https://api.khoindvn.io.vn/hZ8MlI', img: KSIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'KSign VN V2', url: 'https://api.khoindvn.io.vn/Fdty3X', img: KSIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'KSign VN V3', url: 'https://api.khoindvn.io.vn/AK7usE', img: KSIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'KSign VN V4', url: 'https://api.khoindvn.io.vn/oIV0oN', img: KSIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'KSign', url: 'https://api.khoindvn.io.vn/6DNLtD', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V1', url: 'https://api.khoindvn.io.vn/j7XAya', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V2', url: 'https://api.khoindvn.io.vn/qNkRtG', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V3', url: 'https://api.khoindvn.io.vn/mTt9ip', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V4', url: 'https://api.khoindvn.io.vn/RX7IAf', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V5', url: 'https://api.khoindvn.io.vn/tGeKc0', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V6', url: 'https://api.khoindvn.io.vn/Deq7RD', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'KSign GLOBAL V7', url: 'https://api.khoindvn.io.vn/kcvpWe', img: KSIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' }
];

// ESIGN LIST
const esignApps = [
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/IDcW4P', img: ESIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'ESign PowerChina', url: 'https://api.khoindvn.io.vn/NvH0ZF', img: ESIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'ESign PowerChina 1', url: 'https://api.khoindvn.io.vn/GKJa03', img: ESIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'ESign PowerChina 2', url: 'https://api.khoindvn.io.vn/lYSU81', img: ESIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'ESign PowerChina 3', url: 'https://api.khoindvn.io.vn/bzAdnw', img: ESIGN_LOGO, descriptions: 'PowerChina International Group Limited' },
  { name: 'ESign', url: 'https://api.khoindvn.eu.org/KXcveB', img: ESIGN_LOGO, descriptions: 'Qingdao Rural Commercial Bank Co., Ltd ' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/jAbzrt', img: ESIGN_LOGO, descriptions: 'Commission on Elections' },
  { name: 'ESign Com V1', url: 'https://api.khoindvn.io.vn/RzkRFk', img: ESIGN_LOGO, descriptions: 'Commission on Elections' },
  { name: 'ESign Com V2', url: 'https://api.khoindvn.io.vn/oC0s5H', img: ESIGN_LOGO, descriptions: 'Commission on Elections' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/ST2vo0', img: ESIGN_LOGO, descriptions: 'Luoyang Postal Administration' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/CbhJOR', img: ESIGN_LOGO, descriptions: 'Wasu Media & Network Co., Ltd' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/Zxycmb', img: ESIGN_LOGO, descriptions: 'Etisalat - Emirates Telecommunications Corporation' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/11jtJ7', img: ESIGN_LOGO, descriptions: 'China National Heavy Duty Truck Group Co., Ltd.' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/JJW6Nj', img: ESIGN_LOGO, descriptions: 'China Telecommunications Corporation' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/6xAzUM', img: ESIGN_LOGO, descriptions: 'Tianjin University of Commerce' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/Sco2A2', img: ESIGN_LOGO, descriptions: 'VIETTEL GROUP' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/Q9sxJb', img: ESIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'ESign ChiBa V1', url: 'https://api.khoindvn.io.vn/Bhqw0c', img: ESIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'ESign ChiBa V2', url: 'https://api.khoindvn.io.vn/9UqTrd', img: ESIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'ESign ChiBa V3', url: 'https://api.khoindvn.io.vn/BcUSW0', img: ESIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'ESign ChiBa V4', url: 'https://api.khoindvn.io.vn/4jftNL', img: ESIGN_LOGO, descriptions: 'CHIBA INSTITUTE OF TECHNOLOGY' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/z4nsG3', img: ESIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'ESign VN V1', url: 'https://api.khoindvn.io.vn/hMU3PR', img: ESIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'ESign VN V2', url: 'https://api.khoindvn.io.vn/OBr8Zi', img: ESIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'ESign VN V3', url: 'https://api.khoindvn.io.vn/gegf9d', img: ESIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'ESign VN V4', url: 'https://api.khoindvn.io.vn/a1Gr0d', img: ESIGN_LOGO, descriptions: 'VIETNAM JOINT STOCK COMMERCIAL BANK FOR INDUSTRY AND TRADE' },
  { name: 'ESign', url: 'https://api.khoindvn.io.vn/2nf4UO', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V1', url: 'https://api.khoindvn.io.vn/j6HQG8', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V2', url: 'https://api.khoindvn.io.vn/hvcTb2', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V3', url: 'https://api.khoindvn.io.vn/bJV2fn', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V4', url: 'https://api.khoindvn.io.vn/QQYC0K', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V5', url: 'https://api.khoindvn.io.vn/ylpuYQ', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V6', url: 'https://api.khoindvn.io.vn/vnAa35', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' },
  { name: 'ESign GlOBAL V7', url: 'https://api.khoindvn.io.vn/qYW0nK', img: ESIGN_LOGO, descriptions: 'GLOBAL TAKEOFF, INC' }
];

// =========================
// UI + RENDER
// =========================

const cloudIcon = `
<svg style="width:24px;height:24px;fill:currentColor" viewBox="0 0 1024 1024">
  <path d="M691.3 693.9c-24.7 0-44.8-20-44.8-44.8s20-44.8 44.8-44.8h40"/>
</svg>
`;

function renderItem(item) {
  return `
  <a href="${item.url}" class="app-row" target="_blank">
    <img src="${item.img}" class="app-icon" alt="${item.name}">
    <div class="app-text">
      <div class="app-title">${item.name}</div>
      <div class="app-sub">${item.descriptions}</div>
    </div>
    <div class="app-action">INSTALL</div>
  </a>
  `;
}

function renderList(selector, list) {
  const container = document.querySelector(selector);
  if (!container) return;
  list.forEach(item => {
    container.innerHTML += renderItem(item);
  });
}

// INIT
document.addEventListener('DOMContentLoaded', () => {

  // KSign / ESign
  renderList('#ksignList', ksignApps);
  renderList('#esignList', esignApps);

  const btnKsign = document.getElementById('ksignBtn');
  const btnEsign = document.getElementById('esignBtn');

  const ksignList = document.querySelector('#ksignList');
  const esignList = document.querySelector('#esignList');

  btnKsign.onclick = () => {
    btnKsign.classList.add('active');
    btnEsign.classList.remove('active');
    ksignList.classList.remove('hidden');
    esignList.classList.add('hidden');
  };

  btnEsign.onclick = () => {
    btnEsign.classList.add('active');
    btnKsign.classList.remove('active');
    esignList.classList.remove('hidden');
    ksignList.classList.add('hidden');
  };

});
