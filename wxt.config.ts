import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: {
    name: 'Twenty CRM - LinkedIn Capture',
    description: 'Capture LinkedIn profiles and companies to your Twenty CRM',
    version: '1.1.0',
    permissions: ['storage', 'activeTab'],
    // Only LinkedIn, LinkedIn's image CDN (profile photos) and your Twenty instance.
    // Build with TWENTY_HOST set, e.g. TWENTY_HOST=https://crm.example.com npm run build
    host_permissions: [
      '*://*.linkedin.com/*',
      'https://*.licdn.com/*',
      `${(process.env.TWENTY_HOST || 'https://twenty.example.com').replace(/\/+$/, '')}/*`,
    ],
    icons: {
      16: '/icon/16.png',
      32: '/icon/32.png',
      48: '/icon/48.png',
      96: '/icon/96.png',
      128: '/icon/128.png',
    },
  },
});
