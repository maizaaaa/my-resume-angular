
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://maizaaaa.github.io/my-resume-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-resume-angular"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-resume-angular",
    "route": "/my-resume-angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 426, hash: '488078f5210a0fba5be228141bda2829ecda4d61b4a6e013158c9c1f2f66e36e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 939, hash: 'ae18512dffca0d180b98e5c87e646248b496f9abaa9b5088af5971365bb2002d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8630, hash: '29a8368f1a11e649cc0c7f23abdbd96fdc72dbc5d755a521b642c13110003823', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8418, hash: '6052df5f03d09c5b857fc11701ddf96e7ea7676bda5e88a3cc3974b9cae64968', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 8336, hash: '495d70695270ce3b4bf103eb879326e71a53da6f891d8c35048e5c4e80861e96', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
