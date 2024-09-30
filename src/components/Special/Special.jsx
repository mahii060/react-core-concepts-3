import { useContext } from "react";
import { DollarContext, RingContext } from "../Grandpa/Grandpa";

const Special = () => {
    const ring = useContext(RingContext)
    const [dollar] = useContext(DollarContext)
    return (
        <div>
            <h2>Special</h2>
            <p>He gave me a ring made of {ring}</p>
            <p style={{ color: 'rebeccapurple', fontWeight: 'bold', fontSize: '25px' }}>My grandpa in law gave me  ${dollar}</p>
        </div>
    );
};

export default Special;