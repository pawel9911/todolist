import { Flex, Heading, Text } from "@theme-ui/components";
import { Link } from "react-router-dom";
import Style from "./Style";
import {text} from './TodoItem';

const Task = () =>{
    return (
        <Flex sx={{justifyContent:'center'}}>
            <Flex sx={Style.itemPosition} style={{width:'50%'}}>
                <Heading as='h2' sx={Style.itemHeading}>Zadanie</Heading>
                <Text sx={Style.itemText}>{text}</Text>
                <Link to='/'>Wróć do głownej sekcji</Link>
            </Flex>
        </Flex>
    )
}

export default Task;
