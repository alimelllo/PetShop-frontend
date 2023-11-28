import { useEffect, useState } from "react";
import Header from "../../components/GeneralComponents/Header"
import factorService from "../../Services/FactorServices/factor.service";
import Link from "next/link";

const MyFactors = () => {

    const [list, SetList] = useState([]);

    useEffect(() => {
        factorService.GetAllFactorsByUserId(localStorage.getItem('id')).then((response) => {
            const arr = response.data.map((item) => (
                <Link href={`/Factor/${item.id}`}>
                <div className="p-5 bg-[gray] my-4 w-4/12">
                    {item.id}
                </div>
                </Link>
            ))
            SetList(arr);
        })
    }, [])

    return (
        <>
            <Header />
            {list}
        </>
    )
}

export default MyFactors;