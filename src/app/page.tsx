import Hero from "@/components/landing/Hero";
import Posts from "@/components/landing/Posts";
import { fetchPosts } from "@/helper/fetchData";



export default async function Home(  { searchParams }: { searchParams: { page?: string } }) { 
    const page = searchParams?.page || "1";  // Default to page 1 if not present
  console.log(`${page} page`);

  const posts=await fetchPosts()
  
  return (
    <>
<Hero/>
<Posts posts={posts} title="All Posts" cols={{ base: 1, sm: 2, lg: 3 }} description=" you can find the best psts in here for your social media"/>
</>
  );
}
