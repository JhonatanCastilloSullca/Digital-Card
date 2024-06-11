import "./index.css"
const Avatar = ({ imageUrl }) => {
    return (
        <div className="absolute w-36 h-36 rounded-full overflow-hidden border-4 border-white">
            <img src={imageUrl} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    );
};

export default Avatar;
