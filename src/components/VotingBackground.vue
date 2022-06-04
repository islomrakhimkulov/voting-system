<script setup lang="ts">
	import { loadFull } from 'tsparticles';

	const particlesInit = async engine => {
		await loadFull(engine);
	};

	const particlesLoaded = async container => {
		console.log('Particles container loaded', container);
	};
</script>

<template>
	<div>
		<!-- Particles Background  -->
		<Particles
			id="tsparticles"
			:particlesInit="particlesInit"
			:particlesLoaded="particlesLoaded"
			:options="{
				background: {
					color: {
						value: '#EFFAFF',
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: false,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#5FACF3',
					},
					links: {
						color: '#5FACF3',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 0.5,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 2 },
					},
				},
				detectRetina: true,
			}"
		/>
		<slot></slot>
	</div>
</template>

<style></style>
