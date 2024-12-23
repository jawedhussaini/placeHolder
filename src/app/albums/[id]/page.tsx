import Images from "@/components/images/Images"
import { fetchImagesByAlbumId } from "@/helper/images"
import { Container } from "@mantine/core"


async function page({params}:{params:{id:number}}) {
    const {id}=await params
    const image=await fetchImagesByAlbumId(id)
    return (
       <Container size="xl" m="xl" >
        <Images images={image} title="Images By Album" description="you can find all images by album in here" />
       </Container>
    )
}

export default page
