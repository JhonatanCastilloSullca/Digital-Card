import Avatar from '../Avatar';
import Contenido from '../Contenido';
import './index.css'

const Background = ({ imageUrl }) => {
    return (
        <div className="background-container">
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="avatar-container">
                <Avatar imageUrl="https://via.placeholder.com/150" />
            </div>
            <div className="container">
                <Contenido />
            </div>
        </div>
    );
};
export default Background;