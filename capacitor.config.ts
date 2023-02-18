import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '796792034085-qg02k12vb2gg77ubd78bicin5m4tm47g.apps.googleusercontent.comm',
      forceCodeForRefreshToken: true
    }
  },
  appId: 'com.keeper.fit',
  appName: 'fit-keeper',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
