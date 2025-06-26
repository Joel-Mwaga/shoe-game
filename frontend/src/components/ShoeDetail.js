import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

const ShoeDetail = () => {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShoeDetail = async () => {
            try {
                const response = await fetch(`/api/shoes/${id}`);
                const data = await response.json();
                setShoe(data);
            } catch (error) {
                console.error('Error fetching shoe details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchShoeDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!shoe) {
        return <div>Shoe not found.</div>;
    }

    return (
        <div className="shoe-detail">
            <h1>{shoe.name}</h1>
            <img src={shoe.imageUrl} alt={shoe.name} />
            <p>{shoe.description}</p>
            <p>Price: ${shoe.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ShoeDetail;