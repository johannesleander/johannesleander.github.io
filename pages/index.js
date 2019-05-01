import Link from 'next/link';

function Home() {
	return <div><p>Hello World!</p>
		<Link href='/about'><a>About</a></Link>
</div>;
}

export default Home;
