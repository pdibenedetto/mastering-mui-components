import { Avatar, AvatarGroup } from "@mui/material"
import AbcIcon from "@mui/icons-material/Abc"

export function AvatarFunctionality() {
    //Fallback Precedence
    //1. src
    //2. Child element
    //3. First letter of alt text
    //4. Default user icon
    return (
        <AvatarGroup max={2} spacing={5}>
            <Avatar src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" />
            <Avatar src="" alt="cat">
                <AbcIcon />
            </Avatar>
            <Avatar>Z</Avatar>
        </AvatarGroup>
    )
}
