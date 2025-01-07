import { AfterViewInit, Component, OnInit } from '@angular/core';

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
  clickedCustomer: boolean = false;
  showContacts: boolean = false;
  showNotifications: boolean = false;
  showCustom: boolean = false;
  clickedNavigation: boolean = false;

  playNotificationVideos() {
    let myMessagesVideo = <HTMLVideoElement>(
      document.getElementById('my-messages-video')
    );

    myMessagesVideo.play();

    let updatesVideo = <HTMLVideoElement>(
      document.getElementById('their-updates-video')
    );

    updatesVideo.play();
  }

  playMyMessages() {
    let myMessagesVideo = <HTMLVideoElement>(
      document.getElementById('my-messages-video')
    );
    myMessagesVideo.play();
  }

  onScroll() {
    if (this.clickedNavigation == false) {
      this.checkActiveSection();
    }
  }

  checkActiveSection() {
    let page = document.getElementById('page');
    let scrollPosition = page!.scrollTop;

    let contactsSection = document.getElementById('contacts-section');
    let notificationsSection = document.getElementById('notifications-section');
    let personalizationSection = document.getElementById('custom-section');
    let demoSection = document.getElementById('video');

    this.activeContacts = false;
    this.activeNotifications = false;
    this.activePersonalization = false;
    this.activeDemo = false;

    if (
      scrollPosition >=
        contactsSection!.getBoundingClientRect().top + scrollPosition - 225 &&
      scrollPosition <=
        contactsSection!.getBoundingClientRect().bottom + scrollPosition - 75
    ) {
      this.showContacts = true;
      this.activeContacts = true;
    } else if (
      scrollPosition >=
        notificationsSection!.getBoundingClientRect().top +
          scrollPosition -
          225 &&
      scrollPosition <=
        notificationsSection!.getBoundingClientRect().bottom +
          scrollPosition -
          75
    ) {
      this.showNotifications = true;
      this.activeNotifications = true;
    } else if (
      scrollPosition >=
        personalizationSection!.getBoundingClientRect().top +
          scrollPosition -
          225 &&
      scrollPosition <=
        personalizationSection!.getBoundingClientRect().bottom + scrollPosition
    ) {
      this.showCustom = true;
      this.activePersonalization = true;
    } else if (
      (scrollPosition + page!.clientHeight >= page!.scrollHeight - 5 &&
        scrollPosition + page!.clientHeight <= page!.scrollHeight + 5) ||
      scrollPosition >=
        demoSection!.getBoundingClientRect().top + scrollPosition - 130
    ) {
      this.activeDemo = true;
    } else {
      this.showContacts = false;
      this.showNotifications = false;
      this.showCustom = false;
    }
  }

  navigateFirstSection() {
    this.clickedNavigation = true;
    let contactsSection = document.getElementById('contacts-section');
    let contactsHeight = contactsSection!.offsetTop;

    let page = document.getElementById('page');

    page!.scrollTo({
      top: contactsHeight - 10,
      behavior: 'smooth',
    });
    setTimeout(() => {
      this.clickedNavigation = false;
    }, 550);
  }

  toggleNotificationsView() {
    this.clickedCustomer = !this.clickedCustomer;
    this.playNotificationVideos();
  }

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

  openSideNav() {
    this.openMenu = true;
    document.body.style.overflow = 'hidden';
  }

  closeSideNav() {
    this.openMenu = false;
    document.body.style.overflow = 'visible';
  }

  navigateToContacts() {
    this.showContacts = false;
    this.showNotifications = false;
    this.showCustom = false;
    this.clickedNavigation = true;
    let contactsSection = document.getElementById('contacts-section');
    let contactsHeight = contactsSection!.offsetTop;

    let page = document.getElementById('page');
    this.activeContacts = true;
    this.activeNotifications = false;
    this.activePersonalization = false;
    this.activeDemo = false;

    setTimeout(() => {
      this.clickedNavigation = false;
    }, 550);

    page!.scrollTo({
      top: contactsHeight - 10,
      behavior: 'smooth',
    });
    this.closeSideNav();
  }

  navigateToDemo() {
    this.showContacts = false;
    this.showNotifications = false;
    this.showCustom = false;
    this.clickedNavigation = true;
    let demoHeight = document.getElementById('video')!.offsetTop;

    let page = document.getElementById('page');
    this.activeContacts = false;
    this.activeNotifications = false;
    this.activePersonalization = false;
    this.activeDemo = true;
    page!.scrollTo({
      top: demoHeight - 10,
      behavior: 'smooth',
    });
    setTimeout(() => {
      this.clickedNavigation = false;
    }, 680);
    this.closeSideNav();
  }

  navigateToNotifications() {
    this.showContacts = false;
    this.showNotifications = false;
    this.showCustom = false;
    this.clickedNavigation = true;
    let notificationsSection = document.getElementById('notifications-section');
    let notificationsHeight = notificationsSection!.offsetTop;

    let page = document.getElementById('page');
    this.activeContacts = false;
    this.activeNotifications = true;
    this.activePersonalization = false;
    this.activeDemo = false;
    setTimeout(() => {
      this.clickedNavigation = false;
    }, 600);

    page!.scrollTo({
      top: notificationsHeight - 10,
      behavior: 'smooth',
    });
    this.closeSideNav();
  }

  navigateToPersonalization() {
    this.showContacts = false;
    this.showNotifications = false;
    this.showCustom = false;
    this.clickedNavigation = true;
    let customSection = document.getElementById('custom-section');
    let customHeight = customSection!.offsetTop;

    let page = document.getElementById('page');
    this.activeContacts = false;
    this.activeNotifications = false;
    this.activePersonalization = true;
    this.activeDemo = false;

    setTimeout(() => {
      this.clickedNavigation = false;
    }, 650);

    page!.scrollTo({
      top: customHeight - 10,
      behavior: 'smooth',
    });
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
