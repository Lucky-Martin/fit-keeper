import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '796792034085-8tkac0ci46vfhkjgrk354ldf78drrh39.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  },
  appId: 'com.fit.keeper',
  appName: 'fit-keeper',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
