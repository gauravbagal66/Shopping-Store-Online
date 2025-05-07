// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePay, faCcMastercard, faCcPaypal, faCcAmex, faApplePay } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

library.add(faGooglePay, faCcMastercard, faCcPaypal, faCcAmex, faApplePay, faMoneyBillWave);
