import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CharApp } from './charapp.module';
const platform = platformBrowserDynamic();

platform.bootstrapModule(CharApp);