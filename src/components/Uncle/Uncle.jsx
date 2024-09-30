import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { DollarContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [dollar] = useContext(DollarContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>${dollar}</p>
            <section className='flex'>
                <Cousin name='Alex'></Cousin>
                <Cousin name='Hania'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;