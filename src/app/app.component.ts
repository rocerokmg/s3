import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public selectedIndex2 = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Play',
      url: 'play',
      icon: 'accessibility'
    },
    {
      title: 'Ledger',
      url: '/ledger',
      icon: 'library'
    },
    {
      title: 'Change Password',
      url: '/changepass',
      icon: 'settings'      
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'   
    }   
  ];

  public coorPanel = [
    {
      title: 'Coordinator',
      url: '/coordinator',
      icon: 'people-circle'    
    },
    {
      title: 'Load Credit',
      url: '/loadcredits',
      icon: 'card'  
    }   
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());           
    }  
  }
}
