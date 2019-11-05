import { Component, OnInit } from '@angular/core';

declare var cordova;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }
  uri: string;
  screenshot: any;
  scanInProgress: boolean;

  config: any = {
    qrReader: {
      buttons: {
        goToCode: {
          icon: 'icon_123',
          code: '14003',
          name: 'Código'
        },
        empty: {
          icon: '',
          code: '',
          name: ''
        },
        selectImageFromGallery: {
          icon: 'icon_image',
          code: '14007',
          name: 'Imagen'
        }
      },
      views: {
        unlockScooters: {
          title: 'Viajar',
          content: 'Encuentra el código QR aquí',
          imageName: 'scooter'
        },
        unlockScootersMuvo: {
          title: 'Viajar',
          content: 'Encuentra el código QR aquí',
          imageName: 'qr_muvo',
          theme: 'muvo'
        },
        pay: {
          title: 'Paga',
          content: '{0} {1}',
          imageName: ''
        },
        paymentFromHome: {
          title: 'Escanea QR',
          content: 'Escanea y paga al instante',
          imageName: ''
        }
      },
      timer: {
        goToCode: 30
      }
    },
  };

  ngOnInit() {
    this.screenshot = navigator['screenshot'];
  }

  doScreenShot() {
    this.screenshot.URI((error, res) => {
      console.log(res);

      if (error) {
        console.error(error);
      } else {
        this.uri = res.URI;
      }
    }, 50);
  }

  scanQR() {
    this.scanInProgress = true;

    const view = this.config.qrReader.views.pay;
    const button = this.config.qrReader.buttons.selectImageFromGallery;

    cordova.plugins.nequi.qrreader.launchQrReader(
      view,
      button,
      this.config.qrReader.timer.goToCode,
      (res) => {
        this.scanInProgress = false;
        console.log('success', res);
      },
      (error) => {
        this.scanInProgress = false;
        console.log('success', error);
      });
  }
}
