import { Component, OnInit } from '@angular/core';
import englishTexts from 'src/assets/languages/english.json';
import spanishTexts from 'src/assets/languages/spanish.json';
import { Language } from './models/language';

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
  activeMyMessages: boolean = true;
  activeTheirUpdates: boolean = false;
  showContacts: boolean = false;
  showNotifications: boolean = false;
  showCustom: boolean = false;
  showDemo: boolean = false;
  clickedNavigation: boolean = false;
  activeBuyPoints: boolean = true;
  activeSettings: boolean = false;
  activeReservations: boolean = true;
  activeManageContacts: boolean = false;
  currentYear: number = new Date().getFullYear();
  englishLangActive: boolean = true;
  spanishLangActive: boolean = false;
  showTopButton: boolean = false;
  language: string = 'English';
  pointsValue: string = '';
  appDownloadURL: string = '';
  showReservation: boolean = false;
  showMessage: boolean = false;
  showBalance: boolean = false;
  focusName: boolean = false;
  focusLastName: boolean = false;
  focusEmail: boolean = false;
  validForm: boolean = false;
  validEmail: boolean = false;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  clearName: boolean = false;
  clearLastName: boolean = false;
  clearEmail: boolean = false;
  showThankYou: boolean = false;
  userJoined: boolean = false;
  languageTexts: Language = {
    contactsNavItem: '',
    notificationsNavItem: '',
    personalizationNavItem: '',
    demoNavItem: '',
    learnMore: '',
    appTitle: '',
    appReminder: '',
    currentBalance: '',
    addPoints: '',
    pointsValue: '',
    messageInfo: '',
    appMyUser: '',
    appReservations: '',
    contactsSectionTitle: '',
    contactsHeadline: '',
    contactsSubHeadline1: '',
    contactsSubHeadline2: '',
    featuresText: '',
    contactsFeature1: '',
    contactsFeature2: '',
    addReservations: '',
    manageContacts: '',
    notificationsSectionTitle: '',
    notificationsHeadline: '',
    notificationsSubHeadline1: '',
    notificationsSubHeadline2: '',
    notificationsFeature1: '',
    notificationsFeature2: '',
    theirUpdates: '',
    yourMessages: '',
    customSectionTitle: '',
    customHeadline: '',
    customSubHeadline1: '',
    customSubHeadline2: '',
    customFeature1: '',
    customFeature2: '',
    buyPoints: '',
    customizeSettings: '',
    demoSectionTitle: '',
    getNowSectionTitle: '',
    downloadNow: '',
    downloadNowSubheadline: '',
    soundsInteresting: '',
    comingSoon: '',
    joinWaitlistTitle: '',
    joinWaitlistSubtitle: '',
    firstNameWaitlist: '',
    lastNameWaitlist: '',
    emailWaitlist: '',
    joinWaitlistButton: '',
    validEmailInfo: '',
    emailFormat: '',
    userJoinedText: '',
    rightsReserved: '',
  };

  addUserWaitlist() {}

  hideUserJoinedNotification() {
    setTimeout(() => {
      this.userJoined = false;
    }, 8000);
  }

  checkNameInput() {
    if (this.firstName == '') {
      this.clearName = false;
    } else {
      this.clearName = true;
    }
  }

  checkLastNameInput() {
    if (this.lastName == '') {
      this.clearLastName = false;
    } else {
      this.clearLastName = true;
    }
  }

  checkEmailInput() {
    if (this.email == '') {
      this.clearEmail = false;
    } else {
      this.clearEmail = true;
    }
  }

  clearNameInput() {
    this.firstName = '';
    this.checkNameInput();
  }

  clearLastNameInput() {
    this.lastName = '';
    this.checkLastNameInput();
  }

  clearEmailInput() {
    this.email = '';
    this.checkEmailInput();
  }

  checkForm() {
    this.checkEmail();
    if (this.firstName != '' && this.lastName != '' && this.validEmail) {
      this.validForm = true;
    } else {
      this.validForm = false;
    }
  }

  checkEmail() {
    let emailPattern = /[a-zA-Z].+@[a-zA-Z].+\.[a-z]{2,4}/;
    if (emailPattern.test(this.email) == true) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }

  focusedName() {
    this.focusName = true;
  }

  unfocusedName() {
    this.focusName = false;
  }

  focusedLastName() {
    this.focusLastName = true;
  }

  unfocusedLastName() {
    this.focusLastName = false;
  }

  focusedEmail() {
    this.focusEmail = true;
  }

  unfocusedEmail() {
    this.focusEmail = false;
  }

  showFeatures() {
    setTimeout(() => {
      this.showMessage = true;
    }, 1500);
    setTimeout(() => {
      this.showReservation = true;
    }, 3000);
    setTimeout(() => {
      this.showBalance = true;
    }, 4500);
  }

  setPointsValueText() {
    if (this.language == 'English') {
      this.pointsValue = '40 points';
    } else {
      this.pointsValue = '40 puntos';
    }
  }

  checkScrollTopButton() {
    let page = document.getElementById('page');
    if (page!.scrollTop > 550) {
      this.showTopButton = true;
    } else {
      this.showTopButton = false;
    }
  }

  setLanguage() {
    if (this.language == 'English') {
      this.languageTexts = <Language>englishTexts;
    } else {
      this.languageTexts = <Language>spanishTexts;
    }
  }

  setContactsSubtitle() {
    let subtitle = '';
    if (this.language == 'English') {
      if (this.activeReservations == true) {
        subtitle = englishTexts.contactsSubHeadline1;
      } else {
        subtitle = englishTexts.contactsSubHeadline2;
      }
    } else {
      if (this.activeReservations == true) {
        subtitle = spanishTexts.contactsSubHeadline1;
      } else {
        subtitle = spanishTexts.contactsSubHeadline2;
      }
    }

    return subtitle;
  }

  setNotificationsSubtitle() {
    let subtitle = '';
    if (this.language == 'English') {
      if (this.activeMyMessages == true) {
        subtitle = englishTexts.notificationsSubHeadline1;
      } else {
        subtitle = englishTexts.notificationsSubHeadline2;
      }
    } else {
      if (this.activeMyMessages == true) {
        subtitle = spanishTexts.notificationsSubHeadline1;
      } else {
        subtitle = spanishTexts.notificationsSubHeadline2;
      }
    }

    return subtitle;
  }

  setTheirUpdatesButton() {
    this.activeTheirUpdates = true;
    this.activeMyMessages = false;
    this.playNotificationVideos();
  }

  setMyMessagesButton() {
    this.activeTheirUpdates = false;
    this.activeMyMessages = true;
    this.playNotificationVideos();
  }

  setCustomSubtitle() {
    let subtitle = '';
    if (this.language == 'English') {
      if (this.activeBuyPoints == true) {
        subtitle = englishTexts.customSubHeadline1;
      } else {
        subtitle = englishTexts.customSubHeadline2;
      }
    } else {
      if (this.activeBuyPoints == true) {
        subtitle = spanishTexts.customSubHeadline1;
      } else {
        subtitle = spanishTexts.customSubHeadline2;
      }
    }

    return subtitle;
  }

  setEnglishLanguage() {
    this.language = 'English';
    this.englishLangActive = true;
    this.spanishLangActive = false;
    this.setLanguage();
    this.setPointsValueText();
    this.closeSideNav();
  }

  setSpanishLanguage() {
    this.language = 'Spanish';
    this.englishLangActive = false;
    this.spanishLangActive = true;
    this.setLanguage();
    this.setPointsValueText();
    this.closeSideNav();
  }

  playNotificationVideos() {
    let pointsVideo = <HTMLVideoElement>(
      document.getElementById('buy-points-video')
    );
    let settingsVideo = <HTMLVideoElement>(
      document.getElementById('my-settings-video')
    );

    let reservationVideo = <HTMLVideoElement>(
      document.getElementById('add-reservation-video')
    );
    let contactsVideo = <HTMLVideoElement>(
      document.getElementById('manage-contacts-video')
    );
    let myMessagesVideo = <HTMLVideoElement>(
      document.getElementById('my-messages-video')
    );
    let updatesVideo = <HTMLVideoElement>(
      document.getElementById('their-updates-video')
    );
    myMessagesVideo.play();
    reservationVideo.play();
    contactsVideo.play();
    pointsVideo.play();
    settingsVideo.play();
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

  showReservationsSection() {
    this.activeReservations = true;
    this.activeManageContacts = false;
    this.playNotificationVideos();
  }

  showManageContactsSection() {
    this.activeReservations = false;
    this.activeManageContacts = true;
    this.playNotificationVideos();
  }

  showBuyPointsSection() {
    this.activeBuyPoints = true;
    this.activeSettings = false;
    this.playNotificationVideos();
  }

  showSettingsSection() {
    this.activeBuyPoints = false;
    this.activeSettings = true;
    this.playNotificationVideos();
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
        personalizationSection!.getBoundingClientRect().bottom +
          scrollPosition -
          75
    ) {
      this.showCustom = true;
      this.activePersonalization = true;
    } else if (
      (scrollPosition + page!.clientHeight >= page!.scrollHeight - 5 &&
        scrollPosition + page!.clientHeight <= page!.scrollHeight + 5) ||
      scrollPosition >=
        demoSection!.getBoundingClientRect().top + scrollPosition - 225
    ) {
      this.showDemo = true;
      this.activeDemo = true;
    } else {
      this.showContacts = false;
      this.showNotifications = false;
      this.showCustom = false;
      this.showDemo = false;
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

  showYourMessagesSection() {}

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
    this.showDemo = false;
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
    this.showDemo = false;
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
    this.showDemo = false;
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
    }, 650);

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
    this.showDemo = false;
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
    this.setEnglishLanguage();
    this.showFeatures();
    setInterval(() => {
      this.setCurrentTime();
    }, 60000);
  }
}
