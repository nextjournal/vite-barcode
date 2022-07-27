import './style.css'
import BarcodeDetectorPolyfill from "barcode-detector-zbar/BarcodeDetectorPolyfill.min.js";


document.querySelector('#app').innerHTML = `
  <div>
    <h1>barcode-detector-zbar</h1>
    <p>Native api support: ${BarcodeDetectorPolyfill.checkBarcodeDetectorSupport()}</p>
  </div>
`

BarcodeDetectorPolyfill.setupPolyfill();
