import Albums from "@/components/Album/Albums"
import Posts from "@/components/landing/Posts"
import User from "@/components/users/User"
import { fetchAlbumsByUserId } from "@/helper/album"
import { fetchPostsByUserId } from "@/helper/fetchData"
import { fetchUserById } from "@/helper/users"
import { Container } from "@mantine/core"


async function page({params}:{params:{id:number}}) {
    const {id}=await params
    const user=await fetchUserById(id)
    const posts=await fetchPostsByUserId(id)
    const album=await fetchAlbumsByUserId(id) 
    console.log(album)

    return (
      <Container size="xl"  m="xl">
        <User users={{ id:user.id, name: user.name, username: user.username, email: user.email, address: user.address, phone: user.phone, website: user.website, company: user.company }} details={false} />
        <Posts posts={posts} title="Posts By User" cols={{ base: 1, sm: 2, lg: 3 }} description=" you can all posts by user in here" />  
        <Albums albums={album} description=" Albums by User find here" title="Albums By User" cols={{ base: 1, sm: 2, lg: 3 }} />
      </Container>
    )
}

export default page
