import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Box, CircularProgress } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API Error:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box sx={{ py: 6, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }



    return (
        <>
            <Container sx={{ py: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                    Clothes & Products
                </Typography>

                <Grid container spacing={3}>
                    {products.slice(0, 8).map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
}

export default ProductsSection;
