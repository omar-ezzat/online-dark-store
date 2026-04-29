import React from 'react';
import { Card, CardMedia, CardContent, Typography, Rating } from "@mui/material";


const ProductCard = ({ product }) => {
    return (
        <>
            <Card
                sx={{
                    bgcolor: "#1e1e1e",
                    color: "white",
                    borderRadius: 3,
                    height: "100%",
                }}
            >
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                        height: 220,
                        objectFit: "contain",
                        bgcolor: "white",
                        p: 2,
                    }}
                />

                <CardContent>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            minHeight: 55,
                        }}
                    >
                        {product.title}
                    </Typography>

                    <Rating
                        value={product.rating.rate}
                        precision={0.5}
                        readOnly
                        sx={{ mt: 1 }}
                    />

                    <Typography sx={{ mt: 1, color: "#90caf9" }}>
                        ${product.price}
                    </Typography>
                </CardContent>
            </Card>

        </>
    );
}

export default ProductCard;
