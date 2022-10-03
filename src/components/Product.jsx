import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Cookies } from 'react-cookie';


// const Product = () => {
//     const [data, setData] = useState([]);
//     console.log("product", Cookies);

//     useEffect(() => {
//         axios.get("http://localhost:5000/product",
//             // {
//             //     headers: {
//             //         'Authorization': 'Bearer ' + validToken()
//             //     }
//             // }
//         )
//             .then((r) => setData(r.data))
//             .catch((e) => console.log(e))
//     }, [])


//     console.log(data);
//     return (
//         <div>

//         </div>
//     )
// }

// export default Product


import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    SimpleGrid,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

// interface RatingProps {
//     rating: number;
//     numReviews: number;
// }

function Rating({ rating, numReviews }) {




    return (
        <Box d="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

function ProductAddToCart() {


    const [data, setData] = useState([]);
    // console.log("product", Cookies);

    useEffect(() => {
        axios.get("http://localhost:5000/product",
            // {
            //     headers: {
            //         'Authorization': 'Bearer ' + validToken()
            //     }
            // }
        )
            .then((r) => setData(r.data))
            .catch((e) => console.log(e))
    }, [])


    console.log(data);
    return (
        <>
            <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                {data?.map((e) =>
                    <Box>
                        <Box bg='tomato' height='80px'>
                            <Image src={e.image} alt="image" />
                        </Box>
                        <Box>
                            <h1>{e.name}</h1>
                            <h2>{e.manufacturer}</h2>
                            <h3>{e.salePrice}</h3>
                        </Box>
                    </Box>
                )}


            </SimpleGrid>

        </>
    );
}

export default ProductAddToCart;