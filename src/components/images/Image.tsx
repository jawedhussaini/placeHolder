import { Card, Flex, Text, Title } from "@mantine/core"
import Image from 'next/image'
import classes from './Images.module.css'
interface Images{
    albumId:number,
    id: number,
    title: string,
    url: string
    thumbnailUrl: string
}
function SingleImage({id,title,url,thumbnailUrl}:Images) {
    return (
       <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex gap="md" justify="center" align="center " direction="row">
             <Image className={classes.image} width={50} height={50} src={url} alt="Image"/>
              <Text>{title}</Text>
              
        </Flex> 
       </Card>
    )
}

export default SingleImage
