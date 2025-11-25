
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
    'index.csr.html': {size: 390, hash: '374859f727df1af53f00797644a33bf6b10bd9558c5032eef1088e267013e9ba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 903, hash: 'a63ee01472c04f159404e748bde93a49188db824328a490c6d0524aabde04af7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9074, hash: '505c9f02daecb53fb379a920cc7b3b59ff68661f9561634a5fa7512f3b6b6e22', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 8066, hash: '0079418e658af65990be92a0e1ab5e58523df151f9d338598a32d7aaedfe7a35', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8212, hash: '725bab1a8f9241be87981d2edb52235e3498e5a8d667b8ae083144f96e561e12', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
