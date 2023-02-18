import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '489858588105-9lubrrhurvrgbhs9iruambl5mtu7rhg9.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  },
  appId: 'com.keeper.fit',
  appName: 'fit-keeper',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
