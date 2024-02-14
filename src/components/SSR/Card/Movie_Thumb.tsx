import { tmdb_genrec_arr_obj } from '@/data/tmdb-genres';
import { Button, Card, CardFooter } from '@nextui-org/react';
import { TiStarFullOutline } from "react-icons/ti";
import Image from 'next/image';
import React from 'react';

interface Props {
	src: string,
	rating: number,
	genre: [string, string],
	title: string
}

export default function Movie_Thumb(props: Props) {

	const { genre, rating, src, title } = props;

	const genre_val = genre.map(id => {
		return tmdb_genrec_arr_obj.find(obj => obj.id === parseInt(id))?.name;
	});

	return (
		<>
			<div className={ `movie_thumb_container` }>

				{/* thumbnail reflection */ }
				<Image
					src={ src }
					width={ 240 }
					height={ 240 }
					alt={ title + ' thumbnail' }
					className={ `image-reflect` }
				/>
				<Card
					isFooterBlurred
				>
					{/* rating info */ }
					<div
						className={ `movie_thumb_rating_badge d-full-center` }
					>
						<div>
							<TiStarFullOutline size={20} className={`star_rotate`}/>
						</div>
						<div className={`mr-1`}>
							{ rating.toFixed(1) }
						</div>
					</div>
					{/* thumb image*/ }
					<div>
						<Image
							src={ src }
							width={ 240 }
							height={ 240 }
							alt={ title + ' thumbnail' }
						/>
					</div>

					{/* transparent blured footer */ }
					<CardFooter
						className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100">

						<div
							className={ `movie_thumb_footer d-v-center` }>
							<div>
								<span>{ genre_val[0] }</span>
								<span>-</span>
								<span>{ genre_val[1] }</span>
							</div>

							<div>
								<Button
									radius="full"
									className={ `bg-red-600 hover:bg-red-700 text-white` } size="sm">
									Watch
								</Button>
							</div>
						</div>

					</CardFooter>
				</Card>
			</div>
		</>
	);
}