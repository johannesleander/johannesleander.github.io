import Link from 'next/link';

function Home() {
  return (
    <div>
      <p>Hello World!</p>
      <Link href="/about" as={`${process.env.ASSET_PREFIX}/page1`}>
        <a>About</a>
      </Link>
    </div>
  );
}

export default Home;
