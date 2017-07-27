//cats = require('./cats.js');
import angular from 'angular';
import boot_website from './boot_website.js';
//console.log(cats);

const app = angular.module( 'app', [
	boot_website
] )
	.name;


export default app;