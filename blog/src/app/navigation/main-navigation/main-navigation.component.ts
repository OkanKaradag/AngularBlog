import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

enum Pages {
  Home = '',
  Contact = 'contact',
  AboutMe = 'about-me',
}

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent implements OnInit {
  activePage: Pages;

  constructor(private router: Router) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        if (x.url.indexOf(Pages.AboutMe) > 0) this.activePage = Pages.AboutMe;
        else if (x.url.indexOf(Pages.Contact) > 0)
          this.activePage = Pages.Contact;
        else this.activePage = Pages.Home;
      }
    });
  }

  ngOnInit(): void {}
}
