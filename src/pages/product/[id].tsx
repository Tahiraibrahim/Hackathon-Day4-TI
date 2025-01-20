import ProductDetails from "@/components1/product/ProductDetails";
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data based on id
  const product = {
    id: '1',
    title: 'Sample Product',
    description: 'Product description...',
    price: 1000,
    image: '/sample-image.jpg',
    availabilityDate: '2025-01-20',
    owner: {
      name: 'John Doe',
      rating: 4.5
    }
  };

  return <ProductDetails {...product} />;
}