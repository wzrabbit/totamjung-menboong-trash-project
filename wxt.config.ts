import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: '토탐정',
    description: '[BOJ-Extension] 알고리즘 분류 가리개 & 랜덤 디펜스, 토탐정!',
    version: '1.2',
    manifest_version: 3,
    permissions: ['storage'],
    host_permissions: ['https://solved.ac/api/v3/search/*'],
    background: {
      service_worker: 'background.js',
    },
    content_scripts: [
      {
        matches: ['https://www.acmicpc.net/*'],
        run_at: 'document_idle',
        js: ['content-scripts/content.js'],
      },
      {
        matches: ['https://www.acmicpc.net/*'],
        run_at: 'document_start',
        js: ['content-scripts/injectionScript.js'],
        css: [
          'assets/palette.css',
          'assets/tierHider.css',
          'assets/totamjungTheme.css',
          'assets/problemTheme.css',
        ],
      },
    ],
    web_accessible_resources: [
      {
        resources: ['/*'],
        matches: ['https://www.acmicpc.net/*'],
      },
    ],
    options_page: 'options.html',
  },
});
