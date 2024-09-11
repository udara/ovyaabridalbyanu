import React from 'react';
import AnimatedLogo from '../components/AnimatedLogo';
import Logo from '../assets/img/logo.png';
import Spear from '../assets/img/spear.png';
import Telephone from '../assets/img/telephone.png';
import Envelope from '../assets/img/envelope.png';

function BusinessCard() {
    const downloadVCard = () => {
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
                {/* Logo */}
                <div className="mx-auto w-full pt-12">
                    <img src={Logo} className="max-w-[150px] mx-auto" />
                    <AnimatedLogo />
                    <div className="flex items-center justify-center gap-3">
                        <img className="max-w-[80px] md:max-w-[100px]" src={Spear} />
                        <p className="font-serif text-charcoal font-bold text-lg md:text-xl">By Anu</p>
                        <img className="max-w-[80px] md:max-w-[100px] scale-x-[-1]" src={Spear} />
                    </div>
                </div>


                {/* Spear and By Anu */}


                {/* Telephone */}
                <div className="text-center mt-4">
                    <img src={Telephone} className="mx-auto max-w-[40px] md:max-w-[50px]" />
                    <p className="mt-2 md:mt-4 font-serif text-charcoal text-lg md:text-xl">0403 627 285</p>
                </div>

                {/* Email */}
                <div className="text-center mt-4">
                    <img src={Envelope} className="mx-auto max-w-[40px] md:max-w-[50px]" />
                    <p className="mt-2 md:mt-4 font-serif text-charcoal text-lg md:text-xl">anu@ovyaabridal.com.au</p>
                </div>

                {/* Save Contact Button */}
                <div className="flex justify-center mt-6 md:mt-8 mb-6">
                    <div onClick={downloadVCard} className="bg-charcoal flex w-[150px] h-[40px] font-serif font-bold text-white rounded-full items-center justify-center cursor-pointer">
                        Save Contact
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
