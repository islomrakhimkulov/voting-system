import { ViteSetupModule } from '@/types/vite-setup-module';

export const install: ViteSetupModule = ({ isClient, router }) => {
  if (!isClient) return;

  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register');
    registerSW({ immediate: true });
  });
};
