

const isSmallDevice = window.innerWidth < 500;
const isTablet = (window.innerWidth <= 800) && (window.innerWidth >= 500)
const landscape = window.innerHeight < window.innerWidth

const getLayout = () => ({
    height: window.innerHeight,
    width: window.innerWidth,
    isSmallDevice,
    isTablet,
    portrait: window.innerWidth < window.innerHeight,
    landscape,
})

export default {...getLayout(), getLayout}