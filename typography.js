import {Platform} from 'react-native';

export const SansSerif = Platform.select({
  ios: 'Helvetica Neue', // SF Pro
  android: 'sans-serif',
  windows: 'Segoe UI',
});

export const Serif = Platform.select({
  ios: 'Times', // New York
  android: 'serif',
  windows: 'Georgia',
});

export const Monospace = Platform.select({
  ios: 'Menlo', // SF Mono
  android: 'monospace',
  windows: 'Consolas',
});

export {SansSerif as Sans};
