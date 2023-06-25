import Header from "../../components/GeneralComponents/Header";
import productService from "../../Services/ProductsServices/product.service";

const ProductView = (props) => {

    console.log(props);

    return (
        <div>
            <Header />
            <div className="w-full flex flex-row">
                <div className="w-6/12 bg-[gray] mt-[5rem] flex flex-col">
                    images
                </div>
                <div className="w-6/12 bg-[blue] mt-[5rem] flex flex-col">
                    <p className="mt-[3rem] text-[gray] "></p>
                </div>
            </div>

        </div>
    )
}

export async function getStaticPaths() {

    const ProductIds = await productService.getAllProductIds();
    const loadedPaths = ProductIds.data.map((item) => ({ params: { ProductView: String(item.id) } }));
    return {
        paths: loadedPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const params = context.params.ProductView;

    const imagesResult = await productService.GetAllProductImages(params);
    const productResult = await productService.getProductById(params);

    return {
        props: {
            product: productResult.data,
            images: imagesResult.data
        }
    }
}

export default ProductView;