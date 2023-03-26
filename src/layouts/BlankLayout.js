import { Outlet } from 'react-router-dom';
import AnimatedImage from '../components/AnimatedImage';

const BlankLayout = () => {

    return (
        <div
            className='relative blank-layout flex-center'
            style={{
                fontSize: '1.3rem'
            }}
        >
            <AnimatedImage />
            <Outlet />
        </div>
    )
}

export default BlankLayout;