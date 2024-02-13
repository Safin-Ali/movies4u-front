import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			screens:{
				'xsm':'686px'
			},
			colors:{
				'brand-1':'#f03346',
				'brand-2':'#ff6f00',
				'brand-3':'#880acc',
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()]
};
export default config;
