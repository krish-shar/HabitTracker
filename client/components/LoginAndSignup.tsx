import { Button,Text } from "@chakra-ui/react";

const SignInAndSignUp = () => {
    return ( 
        <div>
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="sign-in"
            color="#a6c4cf"
          >
            Sign Inㅤ
          </Button>
          <Text fontSize="sm" color="#a6c4cf">|</Text>
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="/sign-up"
            color="#a6c4cf"
          >
           ㅤSign Up
          </Button>
          </div>
     );
}
 
export default SignInAndSignUp;