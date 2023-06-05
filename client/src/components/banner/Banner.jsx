
import { styled, Box, Typography } from '@mui/material';
import banner from './flower2.jpg'
const Image = styled(Box)`
    width: 100%;
    background: url(${banner}) center/55% repeat-x #000;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 120px;
    color: black;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 35px;
    font-family:'cursive'
    ${'' /* background: #FFFFFF; */}
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Medium</Heading>
            <SubHeading>Where good ideas find you</SubHeading>
        </Image>
    )
}

export default Banner;