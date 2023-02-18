import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '489858588105-am8k7n6df10p8u9s74d8k67mf9evh0da.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  },
  appId: 'com.keeper.fit',
  appName: 'fit-keeper',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
