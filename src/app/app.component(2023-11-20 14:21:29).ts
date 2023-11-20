
import { Component } from '@angular/core';
import Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electron Angular OCR App';
  ocrResult = '';

  captureAndProcessImage() {
    // Code to capture the image from the window titled 'ss_demo.png' goes here
    // This is a placeholder as the actual code would require OS-specific APIs

    // Example of processing an image with Tesseract.js
    Tesseract.recognize(
      'path-to-image/ss_demo.png',
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      this.ocrResult = text;
    });
  }
}
