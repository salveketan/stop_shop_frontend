
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');



    // const [user, setUser] = useState({
    //     email: "", password: ""
    // });

    // let name, value
    // const handle = (e) => {
    //     // console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({ ...user, [name]: value })
    // }
    // console.log(user);
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userlogin = async (e) => {
        e.preventDefault();

        let res = await fetch("http://localhost:5000/login", {
            method: "POST",
            // mode: 'same-origin',
            redirect: 'follow',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify({
                email, password
            })
        });
        const data = res.json();
        // console.log(res);

        if (res.status === 401 || !data) {
            window.alert("invalid credentials")
        }
        else if (res.status === 402) {
            alert("Please fill all field's")
        }
        else {
            window.alert("login successfull")
            navigate("/", { replace: true });
        }
        // console.log(data);
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <form method='POST'>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Login Page
                    </Heading>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={userlogin}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Flex>
    );
}
