import arrow from '../../assets/icons/arrow.png'
import './Arrow.scss'

const Arrow = ({onClick}) => {

    return (
        <section className='arrow'>
            <img
                src={arrow}
                alt='Arrow icon'
                className='arrow__icon'
                onClick={onClick}
            />
        </section>
    )
}

export default Arrow