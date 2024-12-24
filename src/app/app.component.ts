import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AppointPlus';
  openMenu: boolean = false;
  activeContacts: boolean = false;
  activeNotifications: boolean = false;
  activePersonalization: boolean = false;
  activeDemo: boolean = false;
  currentTime: string = '';
  formattedDate: string = '';
  times: string[] = ['01:00', '01:30', '02:00', '02:30', '03:00', '03:30'];
  showLogo: boolean = true;

  navigateTop() {
    let page = document.getElementById('page');
    page!.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.activeContacts = false;
    this.activeDemo = false;
    this.activeNotifications = false;
    this.activePersonalization = false;
  }

  checkVideoTime() {
    let video = <HTMLVideoElement>document.getElementById('app-demo');
    if (video.currentTime == 0) {
      this.showLogo = true;
    } else {
      this.showLogo = false;
    }
  }

  openSideNav() {
    this.openMenu = true;
    document.body.style.overflow = 'hidden';
  }

  closeSideNav() {
    this.openMenu = false;
    document.body.style.overflow = 'visible';
  }

  playDemo() {
    let video = <HTMLVideoElement>document.getElementById('app-demo');
    video.play();
    this.showLogo = false;
  }

  navigateToContacts() {
    this.activeContacts = true;
    this.activeNotifications = false;
    this.activePersonalization = false;
    this.activeDemo = false;
    this.closeSideNav();
  }

  navigateToDemo() {
    this.activeContacts = false;
    this.activeNotifications = false;
    this.activePersonalization = false;
    this.activeDemo = true;
    this.closeSideNav();
  }

  navigateToNotifications() {
    this.activeContacts = false;
    this.activeNotifications = true;
    this.activePersonalization = false;
    this.activeDemo = false;
    this.closeSideNav();
  }

  navigateToPersonalization() {
    this.activeContacts = false;
    this.activeNotifications = false;
    this.activePersonalization = true;
    this.activeDemo = false;
    this.closeSideNav();
  }

  formatValue(value: number) {
    let formatted = '';
    if (value < 10) {
      formatted = '0' + value;
    } else {
      formatted = value.toString();
    }

    return formatted;
  }

  setCurrentTime() {
    let date = new Date();
    this.currentTime =
      this.formatValue(date.getHours()) +
      ':' +
      this.formatValue(date.getMinutes());
  }

  formatDate() {
    let date = new Date();
    this.formattedDate =
      this.formatValue(date.getDate()) +
      '/' +
      this.formatValue(date.getMonth() + 1) +
      '/' +
      date.getFullYear().toString();
  }

  ngOnInit(): void {
    this.setCurrentTime();
    this.formatDate();
    setInterval(() => {
      this.setCurrentTime();
    }, 60000);
  }
}
