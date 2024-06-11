import { FaFacebook, FaInstagram, FaReact, FaTiktok, FaUser, FaWhatsapp } from "react-icons/fa";
import IconoHover from "../Icon";
import { TbWorldWww } from "react-icons/tb";
import IconButton from "../IconButton";

const Contenido = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-4 pt-4">
            <h2 className="text-odaWhite font-bold text-lg"> Nombre de empresa</h2>
            <h2 className="text-odaGrey text-sm font-normal"> Rubro Empresa</h2>
            <div className="w-full flex flex-col justify-center pt-4 items-center">
                <div className="w-10/12">
                    <div className="flex justify-evenly">
                        <IconoHover icono={<FaWhatsapp />} enlace="https://wa.me/numero-de-telefono" texto="WhatsApp" />
                        <IconoHover icono={<FaInstagram />} enlace="https://www.instagram.com/tu-cuenta/" texto="Instagram" />
                        <IconoHover icono={<FaTiktok />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconoHover icono={<FaFacebook />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconoHover icono={<TbWorldWww />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA(Web)" />
                        <IconoHover icono={<FaUser />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas con el chef Joseph Huiza(Contact)" />
                    </div>
                    <div className="flex justify-center py-2">
                        <p className="text-slate-50 leading-4 text-xs font-light text-center">
                            Catering by ODA transforma tus eventos en experiencias culinarias únicas. Ofrecemos menús personalizados y un servicio impecable para cualquier ocasión, garantizando calidad y creatividad en cada plato. Tu satisfacción es nuestra prioridad.
                        </p>
                    </div>

                    {/* <div className="flex flex-col gap-4 pt-4">
                        <IconButton icono={<FaWhatsapp className="text-[#7d7d7b] w-8 h-8" />} enlace="https://wa.me/numero-de-telefono" texto="WhatsApp" />
                        <IconButton icono={<FaInstagram className="text-[#7d7d7b] w-8 h-8" />} enlace="https://www.instagram.com/tu-cuenta/" texto="Instagram" />
                        <IconButton icono={<FaTiktok className="text-[#7d7d7b] w-8 h-8" />} enlace="https://www.tiktok.com/@tu-cuenta" texto="TikTok" />
                        <IconButton icono={<FaFacebook className="text-[#7d7d7b] w-8 h-8" />} enlace="https://www.facebook.com/tu-pagina" texto="Facebook" />
                        <IconButton icono={<TbWorldWww className="text-[#7d7d7b] w-8 h-8" />} enlace="https://www.odaweb.com/catering" texto="Catering by ODA(Web)" />
                        <IconButton icono={<FaUser className="text-[#7d7d7b] w-8 h-8" />} enlace="mailto:correo@tuempresa.com" texto="Asesorías gastronómicas con el chef Joseph Huiza(Contact)" />
                    </div> */}
                    <h2 className="text-odaWhite font-bold text-lg"> Nombre de empresa</h2>
                </div>

            </div>
        </div>
    );
};
export default Contenido;