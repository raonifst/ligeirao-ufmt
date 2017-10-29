import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './imports/app/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
