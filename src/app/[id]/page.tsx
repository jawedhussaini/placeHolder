
import Comments from "@/components/postDetails/Comments"
import PostDetails from "@/components/postDetails/PostDetails"
import { fetchCommentsByPostId } from "@/helper/comments"
import { fetchPostsByID } from "@/helper/fetchData"
import { fetchUserById } from "@/helper/users"
import { Container } from "@mantine/core"


async function pages({params}:{params:{id:number}}) {
    const {id}=await params

    const posts=await fetchPostsByID(id)

    const comments=await fetchCommentsByPostId(id)

   

    const user=await fetchUserById(posts.userId)
    return (
       <Container m="xl" size="xl" p="xl">
        <PostDetails post={{ title: posts.title, body: posts.body }} user={{ username: user.username, email: user.email }}  />
         <Comments commments={comments} />
       </Container>
    )
}

export default pages
