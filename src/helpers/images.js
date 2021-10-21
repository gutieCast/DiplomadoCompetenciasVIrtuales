import logoWeb from '../assets/images/logo-ipax-learning.png'
import buttonInscription from '../assets/images/icon-inscripcion.png'
import balloon from '../assets/images/tips-ins.png'

import heroImg from '../assets/images/banners-backgrounds/competencias-virtuales.jpg'
import courseLogo from '../assets/images/banners-backgrounds/logo-competencias-virtuales.png'

import logoUAGRM from '../assets/images/logos/logo-UAGRM.png'
import logoUAGRM_VR from '../assets/images/logos/logo-UAGRM-vicerrectorado.png'
import logoAulanet from '../assets/images/logos/logo-aulanet.png'
import logoIpax from '../assets/images/logos/logo-ipax.png'
import logoSedema from '../assets/images/logos/logo-SEDEMA.png'

import aboutCourseImg from '../assets/images/banners-backgrounds/sobre-competencias-virtuales.jpg'
import solutionImg from '../assets/images/banners-backgrounds/solucion.jpg'

import forWhoImg from '../assets/images/banners-backgrounds/para-quien.jpg'
import bgMethodologyImg from '../assets/images/banners-backgrounds/banner-metodologia.jpg'

import profitIcon from '../assets/images/icon-beneficios.png'

import mod1 from '../assets/images/modules/Modulo1.jpg'
import mod2 from '../assets/images/modules/Modulo2.jpg'
import mod3 from '../assets/images/modules/Modulo3.jpg'
import mod4 from '../assets/images/modules/Modulo4.jpg'
import mod5 from '../assets/images/modules/Modulo5.jpg'
import mod6 from '../assets/images/modules/Modulo6.jpg'

import teacher1 from '../assets/images/teachers/docentes-competencias-virtuales-cristina-villavicencio.jpg'
import teacher2 from '../assets/images/teachers/docentes-competencias-virtuales-erick-saa.jpg'
import teacher3 from '../assets/images/teachers/docentes-competencias-virtuales-jose-antonio-bedregal.jpg'
import teacher4 from '../assets/images/teachers/docentes-competencias-virtuales-marcelo-balcazar.jpg'

import bannerInscriptionImg from '../assets/images/banners-backgrounds/bg-inscribete-ahora.jpg'

import qrWAimg from '../assets/images/qr-ws-1.png'
import qrPayment from '../assets/images/QR-pago-ipax-studio.jpg'

// import whiteLogo from '../assets/images/logo-footer.png'

///////////////////////////////////////////////////////////////////////

export const logo = { img: logoWeb, alt: "Logo iPax Learning" }

export const inscriptionButton = buttonInscription
export const wordBalloon = balloon

export const imgHero = heroImg
export const logoCourse = courseLogo

const collabs = [
    { title: "logo UAGRM", src: logoUAGRM, id: "logo-UAGRM" },
    { title: "logo Vicerrectorado UAGRM", src: logoUAGRM_VR, id: "logo-UAGRM-vr" },
    { title: "logo Aulanet", src: logoAulanet, id: "logo-aulanet" },
    { title: "logo iPAX", src: logoIpax, id: "logo-ipax" },
    { title: "logo Sedema", src: logoSedema, id: "logo-sedema" },
]
export const logos = collabs

export const imgAboutCourse = aboutCourseImg
export const imgSolution = solutionImg

export const imgForWho = forWhoImg
export const bgMethodology = bgMethodologyImg

export const iconProfit = profitIcon

const modulesImg = [
    { titleImg: "Módulo 1", src: mod1, id: 1 },
    { titleImg: "Módulo 2", src: mod2, id: 2 },
    { titleImg: "Módulo 3", src: mod3, id: 3 },
    { titleImg: "Módulo 4", src: mod4, id: 4 },
    { titleImg: "Módulo 5", src: mod5, id: 5 },
    { titleImg: "Módulo 6", src: mod6, id: 6 }
]

export const imgModules = modulesImg

const teachersPhotos = [
    { id: 1, src: teacher1 },
    { id: 2, src: teacher2 },
    { id: 3, src: teacher3 },
    { id: 4, src: teacher4 },
]

export const imgTeachers = teachersPhotos

export const bannerInscription = bannerInscriptionImg

export const qrWA = qrWAimg

export const qrPay = qrPayment

// export const logoWhite = whiteLogo