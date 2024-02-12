'use client';
import { nav_items } from '@/data/nav-items';
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Header_Nav() {

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar
			onMenuOpenChange={ setIsMenuOpen }
			className={ `bg-default-900/10 backdrop-blur` }
		>

			<NavbarContent as={ 'div' } className={`xsm:hidden`}>
				<NavbarMenuToggle
					aria-label={ isMenuOpen ? "Close menu" : "Open menu" }
					className="xsm:hidden"
				>

				</NavbarMenuToggle>
			</NavbarContent>

			<NavbarBrand
				className={ `font-bold text-xl md:text-2xl` }
			>
				<h4>
					MOVIES4U
				</h4>
			</NavbarBrand>

			{/* desktop nav items */ }
			<NavbarContent
				className="hidden xsm:flex gap-4"
				justify={ "start" }
			>
				{
					nav_items.map((val, idx) => {
						return <NavbarItem
							key={ idx }
						>
							<Link
								href={ val.toLocaleLowerCase() }
								prefetch={ false }
							>
								{ val }
							</Link>
						</NavbarItem>
					})
				}
			</NavbarContent>

			{/* search feild */ }
			<NavbarContent
			as="div"
			className="items-center data-[justify=end]:md:flex-grow data-[justify=end]:flex-grow-[9]"
			justify="end">
				<Input
					classNames={ {
						base: "max-w-full xsm:max-w-[10rem] h-10",
						mainWrapper: "h-full",
						input: [
							"text-small",
							"group-data-[has-value=true]:text-white",
						],
						inputWrapper: [
							"h-full",
							"font-normal",
							"bg-default-900/10",
							"text-default-500",
							"data-[hover=true]:bg-default-900/10",
							"group-data-[focus=true]:bg-default-900/10"
						],
					} }
					placeholder="Type to search..."
					size="sm"
					startContent={ <IoSearch size={ 20 } /> }
					type="text"
				/>
			</NavbarContent>

			{/* mobile device nav items */ }
				<NavbarMenu
				className={`bg-default-900/10`}
				>
					{
						nav_items.map((val, idx) => {
							return <NavbarMenuItem
								key={ idx }
							>
								<Link
									href={ val.toLocaleLowerCase() }
									prefetch={ false }
								>
									{ val }
								</Link>
							</NavbarMenuItem>
						})
					}
				</NavbarMenu>

		</Navbar>
	);
}