// app.config.ts
import { APP_INITIALIZER, Provider } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    const storedLang = localStorage.getItem('lang') || 'en';
    const storedDir = localStorage.getItem('dir') || 'ltr';

    document.documentElement.setAttribute('dir', storedDir);  // Apply direction
    translate.setDefaultLang('en');
    translate.use(storedLang);

    return Promise.resolve();
  };
}

export const appInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [TranslateService],
  multi: true,
};
