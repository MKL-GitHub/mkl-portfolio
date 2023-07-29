import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterState, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mkl-portfolio';
  stars: any[] = new Array(60);

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.handleRouteEvents();
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
}
