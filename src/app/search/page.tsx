import Posts from "@/components/landing/Posts"
import { getSraechedTitle } from "@/helper/getSraechedTitle"


async function page({searchParams}:{searchParams:{query:string}}) {
    const {query}=await searchParams

    const search=await getSraechedTitle(query)

    

    return (
        <div>
            <Posts posts={search} title="Search Result" cols={{ base: 1, sm: 1, lg: 1 }} description="all searched Items By Tittle "/>
        </div>
    )
}

export default page
