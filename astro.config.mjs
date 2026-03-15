// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const ownerSlug = owner?.toLowerCase();
const repoSlug = repo?.toLowerCase();
const rootPagesRepo = ownerSlug ? `${ownerSlug}.github.io` : undefined;
// GitHub Pages project sites are served from /<repo>/ while local dev stays at /.
const isGitHubPagesBuild =
	process.env.GITHUB_ACTIONS === 'true' && Boolean(repo) && Boolean(owner);
const isRootPagesSite = isGitHubPagesBuild && repoSlug === rootPagesRepo;

export default defineConfig({
	site: isGitHubPagesBuild
		? isRootPagesSite
			? `https://${rootPagesRepo}`
			: `https://${ownerSlug}.github.io`
		: 'https://example.com',
	base: isGitHubPagesBuild && !isRootPagesSite ? `/${repo}` : '/',
	integrations: [
		starlight({
			title: 'Retro Systems Lab',
			description: 'Exploring forgotten software platforms and vintage computing systems.',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/retro-systems-lab-logo.png',
				alt: 'Retro Systems Lab logo',
				replacesTitle: true,
			},
			sidebar: [
				// {
				// 	label: 'Documentation',
				// 	items: [{ label: 'J2ME Introduction', slug: 'docs/j2me-intro' }],
				// },
				{
					label: 'Tools',
					items: [{ label: 'J2ME DevKit', slug: 'tools/j2me-devkit' }],
				},
				// {
				// 	label: 'Archives',
				// 	items: [{ label: 'Nokia SDKs', slug: 'archives/nokia-sdks' }],
				// },
				// {
				// 	label: 'Stories',
				// 	items: [{ label: 'Java Phones Era', slug: 'stories/java-phones-era' }],
				// },
			],
		}),
	],
});
