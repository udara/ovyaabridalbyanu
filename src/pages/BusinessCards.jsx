import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import AnimatedLogo from '../components/AnimatedLogo';
import Logo from '../assets/img/logo.png';
import Spear from '../assets/img/spear.png';
import Telephone from '../assets/img/telephone.png';
import Envelope from '../assets/img/envelope.png';
import GalleryModal from "../components/BusinessCard/Modal";
import ImageGallery from "../components/BusinessCard/ImageGallery";

function BusinessCard() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [galleryModalVisible, setGalleryModalVisible] = useState(false);

    const images = [
        '/images/gallery/1.png',
        '/images/gallery/2.png',
        '/images/gallery/3.png',
        '/images/gallery/4.png',
        '/images/gallery/5.png',
        '/images/gallery/6.png',
    ];


    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleGalleryModal = () => {
        setGalleryModalVisible(!galleryModalVisible);
    };

    const downloadVCard = () => {
        toggleMenu();
        const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Rupasinghe ;Anu;;;
FN:Anu Rupasinghe
TEL;TYPE=CELL,VOICE:+61 0403627285
EMAIL;TYPE=INTERNET,PREF:anu@ovyaabridal.com.au
END:VCARD`;

        const blob = new Blob([vCardData], {type: 'text/vcard'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'anu_rupasinghe.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="h-[calc(100dvh)] flex flex-col justify-between items-center w-full md:max-w-[500px] mx-auto  ">
            <div className="flex flex-col justify-between flex-grow w-full bg-bc bg-cover bg-cream">
                <GalleryModal isVisible={galleryModalVisible} onClose={toggleGalleryModal}>
                    {/* Image Gallery */}
                    <ImageGallery images={images} />
                </GalleryModal>
                {/* Logo */}
                <div className="mx-auto w-full pt-12">
                    <img src={Logo} className="max-w-[150px] mx-auto" />
                    <div className={`mx-auto min-h-[110px] w-[90%] mt-2`}>
                    <AnimatedLogo />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <img className="max-w-[80px] md:max-w-[100px]" src={Spear} />
                        <p className="font-serif text-charcoal font-bold text-2xl md:text-xl">By Anu</p>
                        <img className="max-w-[80px] md:max-w-[100px] scale-x-[-1]" src={Spear} />
                    </div>
                </div>


                {/* Spear and By Anu */}


                {/* Telephone */}
                <div className="text-center mt-4">
                    <img src={Telephone} className="mx-auto max-w-[50px] md:max-w-[50px]" />
                    <p className="mt-3 md:mt-4 font-serif text-charcoal text-xl">0403 627 285</p>
                </div>

                {/* Email */}
                <div className="text-center mt-4">
                    <img src={Envelope} className="mx-auto max-w-[50px] md:max-w-[50px]" />
                    <p className="mt-2 md:mt-4 font-serif text-charcoal text-xl">anu@ovyaabridal.com.au</p>
                </div>

                {/* Toggleable Menu */}
                {menuVisible && (
                    <div className="absolute bottom-[75px] left-1/2 transform -translate-x-1/2 flex flex-col bg-white shadow-lg p-4 rounded-lg space-y-2 z-10">
                        <button onClick={downloadVCard} className="bg-charcoal text-white px-4 py-2 rounded-md">Save Contact</button>
                        <button onClick={toggleGalleryModal} className="bg-charcoal text-white px-4 py-2 rounded-md">View Gallery</button>
                        <Link to={`https://www.facebook.com/ovyaabridalbyanu`}>
                            <button className="bg-charcoal w-full text-white px-4 py-2 rounded-md">Facebook</button>
                        </Link>
                        <Link to={`tel:0403627285`}>
                            <button className="bg-charcoal w-full text-white px-4 py-2 rounded-md">Call me</button>
                        </Link>
                    </div>
                )}

                {/* Save Contact Button */}
                <div className="flex justify-center mt-6 md:mt-8 mb-6">
                    <div onClick={toggleMenu} className="bg-charcoal flex w-[150px] h-[40px] font-serif font-bold text-white rounded-full items-center justify-center cursor-pointer">
                        More options
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
