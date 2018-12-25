import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
})

export class AppComponent {

	public currentPath: string = "/";
	public hideMenuPath = ['/', '/login', '/forgot', '/reset', '/register'];

	public appPages = [{
		title: 'Home',
		url: '/home',
		icon: 'home'
	}, {
		title: 'List',
		url: '/list',
		icon: 'list'
	}];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private router: Router
	){
		this.initializeApp();
		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd){
				this.currentPath = event.url.split('?')[0];
			}
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}