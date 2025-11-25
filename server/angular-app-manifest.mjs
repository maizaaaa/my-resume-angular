
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
    'index.csr.html': {size: 416, hash: 'be86f69b94e745ce772da69fed47d85fabd956d1394c2e95bfa739f38e8c4bcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 929, hash: '820415d92276e260311d46c6d9d42e6dc1cdb421dc02c1365c731aac22960b68', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8445, hash: '08504f0f53d75bb690124b8a224332653f182b535d2e27069fd9a35a47be445c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 8151, hash: '5fbcd43ce20a3de835c3bfc557e6aa55a8ee09f55111309cc52a067d6ea54f80', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8233, hash: '4054c1eed117a1687bfe7f0e21a220741e8eddcf390aba3f8fecd71a162c79ca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
