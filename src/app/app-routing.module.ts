import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	redirectTo: 'login',
	pathMatch: 'full'
}, {
	path: 'home',
	loadChildren: './home/home.module#HomePageModule'
}, {
	path: 'list',
	loadChildren: './list/list.module#ListPageModule'
}, {
	path: 'login',
	loadChildren: './login/login.module#LoginPageModule',
}, {
	path: 'forgot',
	loadChildren: './forgot/forgot.module#ForgotPageModule'
}, {
	path: 'reset',
	loadChildren: './reset/reset.module#ResetPageModule'
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}