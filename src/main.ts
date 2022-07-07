import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import '@/styles/index.css';
import '@fontsource/open-sans';
import Particles from 'particles.vue3';
// import dayjs from 'dayjs';
import '@/plugins/chartjs';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, async ctx => {
	Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
		i.install?.(ctx)
	);

	const { app } = ctx;

	app.use(Particles);
});
