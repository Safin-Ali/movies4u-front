import Header_Nav from '@/components/CSR/AppBar/Header_Nav';
import Category_Block from '@/components/SSR/Section/Category_Block';

interface Props {
	params: {
		media: string
	}
}

export default function Home(props: Props) {

	// media type will be movies | tvshow | anime
	const media_type = props.params.media;

	const query_media_type = media_type === 'tvshows' ? 'tv' : media_type === 'movies' ? 'movie' : media_type;

	return (
		<>

				<Category_Block
					path={ `/${media_type}/all/trending` }
					content_header={ 'Trending' }
					api={ `movies/?q=trending/${query_media_type}/day?language=en-US` }
				/>

				<Category_Block
					path={ `/${media_type}/all/popular` }
					content_header={ 'Popular' }
					api={ `movies/?q=${query_media_type}/popular` }
				/>

				<Category_Block
					path={ `/${media_type}/all/top_rated` }
					content_header={ 'Top Rated' }
					api={ `movies/?q=${query_media_type}/top_rated` }
				/>

				<Category_Block
					path={ `/${media_type}/all/anime` }
					content_header={ 'Anime' }
					api={ `movies/?q=discover/${query_media_type}?with_genres=16` }
					anime
				/>
		</>
	);
}
