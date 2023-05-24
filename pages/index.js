import { useRouter } from 'next/router';
export default function Home() 
{
  const router = useRouter();
  return (
  <div>
  <h1>
    {
    router.query.name
    ? `Hello, ${router.query.name}`
    : "I Don't Know Your Name"
    }
    </h1>
    </div>
  );
}