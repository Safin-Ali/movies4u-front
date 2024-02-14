import { moviesDBApi } from '@/services/http-fetch-ins';
import React from 'react';
import Movie_Thumb from '../Card/Movie_Thumb';
import { Button } from '@nextui-org/react';
import { IoIosArrowForward } from "react-icons/io";

interface Props {
	content_header: string,
	api: string,
}

export default async function Category_Block(props: Props) {

	const result = (await (await moviesDBApi.get(props.api)).json()).results.slice(0, 5);

	return (
		<section className={ `px-6 my-5` }>
			<div className={ `my-5` }>
				<div className={`flex justify-between items-center`}>
					<div>
						<h3 className={ `text-xl font-semibold` }>
							{ props.content_header }
						</h3>
					</div>

					<div>
						<Button
							variant={'light'}
							className={`hover:bg-default-900/10`}
							radius={'sm'}
							endContent={<IoIosArrowForward/>}
						>
							SEE ALL
						</Button>
					</div>
				</div>
			</div>

			<div className={ `category_sec_grid` }>
				{
					result.map((dt: any) => {
						return (

								<Movie_Thumb
								key={ dt.id }
								src={ `https://image.tmdb.org/t/p/original/${dt.poster_path}` }
								genre={ dt.genre_ids.slice(0, 2) }
								rating={ dt.vote_average }
								title={ dt.title }
							/>
						)
					})
				}
			</div>
		</section>
	);
}