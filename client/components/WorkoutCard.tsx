import { Card, CardHeader, CardBody, CardFooter,Text, Stack, Image, Divider, Heading, ButtonGroup, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';

// make props

interface WorkoutCardProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    muscleGroup: string;
    href: string;
}


const WorkoutCard = ({title, description, image, alt, muscleGroup, href}: WorkoutCardProps) => {

    const router = useRouter();

    const handleDoNowClick = () => {
        router.push(href);
    };

    return ( 
        <div className='p-4'>
           <Card maxW='sm'>
          <CardBody>
            <Image
              src={image}
              alt={alt}
              borderRadius='lg'
              width={200}
              height={200}
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{title}</Heading>
              <Text>
                {description}
              </Text>
              <Text color='blue.600' fontSize='xl'>
                {muscleGroup}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue' onClick={handleDoNowClick}>
                Do now
              </Button>
            
            </ButtonGroup>
          </CardFooter>
        </Card>
        </div>
     );
}
 
export default WorkoutCard;
