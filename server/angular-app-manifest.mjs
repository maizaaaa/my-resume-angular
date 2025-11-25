
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-resume-angular/',
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
    'index.csr.html': {size: 390, hash: '1df4e9499544ff535279ac424bd8cfb62c71fa18d95230829c973b955c7d0581', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 903, hash: '35b9feb4490da936b250fb648b1d20c9cdb9c325ba52365b1dae6644ea7aec1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 8015, hash: 'b96e48d1abe5e35bd0e841aeaaa675227d2c541585d71db314a134984034c06c', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8161, hash: '6c0856d9224aa38496c9590d297bc79ddb2c463abd1aa27be47278079bd6a098', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9023, hash: '4360aad55584056f935d497158b7b4319be0fbfceef4348b0a17de739a0436d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
