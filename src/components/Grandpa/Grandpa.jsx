import Aunty from '../Aunt/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;