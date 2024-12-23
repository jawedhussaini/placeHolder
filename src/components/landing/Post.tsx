
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';



interface Posts{
    userId:number,
    id:number,
    title:string,
    body:string
}
function Post({userId,id,title,body}:Posts) {
   
    return (
      
              <Card  shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
     <Text size="sm" c="dimmed">
      {body.slice(0,100)}
      </Text>
      

      

      <Link href={`/${id}`}>
        Details
      </Link>
      </Group>
    </Card>
      
    )
}

export default Post
