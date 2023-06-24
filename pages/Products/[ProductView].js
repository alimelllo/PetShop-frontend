import Header from "../../components/GeneralComponents/Header";
import productService from "../../Services/ProductsServices/product.service";

const ProductView = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}

export async function getStaticPaths() {

    const ProductIds = await productService.getAllProductIds();
    const loadedPaths =  ProductIds.data.map((item) => ({ params: { ProductView: String(item.id)} }));
    return {
        paths: loadedPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const params = context.params.ProductView;
    // fetch(`fesfdsf/${params}`)

    return {
        props: {

        }
    }
}

export default ProductView;