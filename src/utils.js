export const smoothScroll = ref => {
    const target = ref.current;
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
        top: top + window.pageYOffset,
        behavior: "smooth"
    });
}