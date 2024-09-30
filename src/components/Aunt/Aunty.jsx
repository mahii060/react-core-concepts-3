import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { DollarContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [dollar, setDollar] = useContext(DollarContext)
    return (
        <div>
            <h2>Aunty</h2>
            <p>${dollar}</p>
            <section className='flex'>
                <Cousin name='Honey'></Cousin>
                <Cousin name='Sonam'></Cousin>
            </section>
            <button className="btn" onClick={() => setDollar(dollar + 5)}>Add $5</button>
        </div>
    );
};

export default Aunty;