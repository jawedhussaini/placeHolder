
import { Container, SimpleGrid, Space, Text, Title } from "@mantine/core";

import classes from "./Posts.module.css";
import Post from "./Post";
import Paginations from "../pagination/Pagination";

interface Posts{
    userId:number,
    id:number,
    title:string,
    body:string
}
interface postsProps{
    posts:Posts[],
    title:string,
    description:string,
    cols?:any 

    
}
function Posts({posts,title,description,cols}:postsProps) {
    
      return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Space h="md" />

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={cols}
        spacing={{ base: "lg", md: "lg", lg: "xl" }}
       
      >
       {posts.map((post:Posts)=><Post key={post.id} {...post} />)}
      </SimpleGrid>
      <Paginations totalPagess={10}/>
    </Container>
  )
    
}

export default Posts
