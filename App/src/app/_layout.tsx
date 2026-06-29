import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/src/components/animated-icon';
import AppTabs from '@/src/components/app-tabs';
import { PortalHost } from '@rn-primitives/portal';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <AnimatedSplashOverlay />
      <AppTabs />
      <PortalHost />
    </>
  );
}
