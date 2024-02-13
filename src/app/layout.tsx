import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { Providers } from './_provider/providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MOVIES4U",
	description: "Home Page Of Movies4U",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`dark`}>
			<body className={ inter.className }>
					<div className={`bg-brand`}>
						<div>
						<span className={ `text-brand-1` }>M</span>
					<span className={ `text-brand-2` }>4</span>
					<span className={ `text-brand-3` }>U</span>
						</div>
					</div>
				<Providers>
						{ children }
				</Providers>

			</body>
		</html>
	);
}
