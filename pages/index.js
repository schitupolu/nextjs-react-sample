import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Sample NextJS Project</h1>
        <Link href="about">
            <a title="About This Project">About This Project</a>
        </Link>
    </div>
);

export default Index;