import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterState, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mkl-portfolio';
  stars: any[] = new Array(60);

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
  ) {
    this.handleRouteEvents();
  }

  ngOnInit(): void {
    // this.getLocation();
    this.getIPAddress();
    // console.log(this.getPlatform());
    // this.postVisiter();
    this.getVisiters();
  }

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href,
        });

        console.log('page_title', title)
        console.log('page_path', event.urlAfterRedirects)
        console.log('page_location', this.document.location.href)
      }
    })
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];

    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }

    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }

    return data;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log('latitude:', latitude);
          console.log('longitude:', longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getIPAddress() {
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        const ipAddress = response.data.ip;
        console.log('Your IP Address:', ipAddress);
      })
      .catch(error => {
        console.error('Error getting IP address:', error);
      })
  }

  getPlatform() {
    const platformData: string[] = [];

    for (const [key, value] of Object.entries(this.platform)) {
      if (value && key[0] !== '_') platformData.push(key);
    }

    return platformData;
  }

  async postVisiter() {
    const data = {
      'ipAdress': '62.210.95.50'
    };

    const response = await axios.post('https://127.0.0.1:3000/api/visitors', data)
      .catch((error) => {
        console.error('Error posting visitor', error);
      });

    console.log('response', response);
  }

  async getVisiters() {
    const response = await axios.get('https://localhost:3000/api/visitors')
      .catch((error) => {
        console.error('Error getting visitors', error);
      });

    console.log('response', response);
  }
}
