import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const {data} = useGenres()
    // return (
    //     <ul>
    //         {data.map(genre => <li key={genre.id}>{genre.name}</li> )}
    //     </ul>
    // );
    return(
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} marginY='5px'>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;