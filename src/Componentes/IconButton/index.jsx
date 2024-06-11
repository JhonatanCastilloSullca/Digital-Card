import './index.css'
const IconButton = ({ icono, enlace, texto }) => {
    return (
        <>
            <a href={enlace} className="link-icon">
                <div className=' relative z-10'>
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            {icono}
                        </div>
                        <div className="ml-4 flex justify-center flex-grow">
                            <p className="text-base font-semibold text-gray-800 text-white-content">{texto}</p>
                        </div>
                    </div>

                </div>
            </a>
        </>
    );
};

export default IconButton