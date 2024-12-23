import { Badge, Flex, Text, Title } from "@mantine/core"

interface Posts{
    title:string,
    body:string,

}
interface User{
    username:string,
    email:string
}
interface PostDetailsProps {
    post: Posts;
    user: User;
}
function PostDetails({ post, user }: PostDetailsProps) {
    return (
         <Flex gap="md" justify="center" align="start" direction="column" >
            <Title c="blue.7">{post?.title}</Title>
            <Text>{post?.body}</Text>
            <Flex gap="md" justify="center" align="center" direction="row"> 
             <Badge size="lg" variant="outline">{user?.username}</Badge> <Badge size="lg" variant="outline">{user?.email}</Badge>
            </Flex>
        </Flex>
    )
}

export default PostDetails
