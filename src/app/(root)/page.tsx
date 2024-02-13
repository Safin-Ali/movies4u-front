import Header_Nav from '@/components/CSR/AppBar/Header_Nav';
import Category_Block from '@/components/SSR/Section/Category_Block';


export default function Home() {
	return (
		<>
			<Header_Nav/>
			<main>
				{/* Trending Movie */}

				<Category_Block content_header={'Trending'} api={'movies/?q=trending/movie/day?language=en-US'}/>

				<Category_Block content_header={'Popular'} api={'movies/?q=movie/popular'}/>

				<Category_Block content_header={'Top Rated'} api={'movies/?q=movie/top_rated'}/>

				<Category_Block content_header={'Now Playing'} api={'movies/?q=movie/now_playing'}/>
			</main>
		</>
	);
}
