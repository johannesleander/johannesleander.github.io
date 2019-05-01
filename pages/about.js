import Link from 'next/link';

function About() {
  return (
    <div>
      <p>About me</p>
      <Link href="/" as={`${process.env.ASSET_PREFIX}/page1`}>
        <a>Home</a>
      </Link>
    </div>
  );
}

export default About;
