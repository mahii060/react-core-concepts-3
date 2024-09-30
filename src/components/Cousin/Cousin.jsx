import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Cousin = ({ name }) => {
    const tk = useContext(MoneyContext)
    return (
        <div>
            <h2>Cousin</h2>
            {
                name === 'Sonam' && <p>{tk}</p>
            }
            <p>{name}</p>
        </div>
    );
};

export default Cousin;