import { createContext, useState } from 'react';
import Aunty from '../Aunt/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext()
export const MoneyContext = createContext()
export const DollarContext = createContext()

const Grandpa = () => {
    const ring = 'Platinum';
    const money = 1000;
    const [dollar, setDollar] = useState(5)
    return (
        <RingContext.Provider value={ring}>
            <MoneyContext.Provider value={money}>
                <DollarContext.Provider value={[dollar, setDollar]}>
                    <div className='grandpa'>
                        <h1>Grandpa</h1>
                        <h3>I got ${dollar}</h3>
                        <section className='flex'>
                            <Dad></Dad>
                            <Uncle></Uncle>
                            <Aunty></Aunty>
                        </section>
                    </div>
                </DollarContext.Provider>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;