import Header_Nav from '@/components/CSR/AppBar/Header_Nav';
import React from 'react';

export default function Template (
	{
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>
) {

	return (
		<>
			<Header_Nav/>

			<main>
				{children}
			</main>
		</>
	);
}