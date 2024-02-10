import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { Providers } from './_personal/providers';

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
		<html lang="en">
			<body className={ inter.className }>
				<Providers>
					{ children }
				</Providers>

			</body>
		</html>
	);
}
