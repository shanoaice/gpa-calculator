import { defineConfig, presetUno } from 'unocss';
import { presetDaisy } from 'unocss-preset-daisy';
import presetIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
	presets: [
		presetUno(),
		presetDaisy({ themes: ['light', 'dark', 'cupcake'] }),
		presetIcons(),
		presetAttributify(),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
});
