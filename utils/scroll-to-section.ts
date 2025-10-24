export const scrollToSection = (sectionId: string, offset: number = 0) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const currentOffsetTop = section.offsetTop;
    const scrollTo = currentOffsetTop - offset;
    console.log(`[scrollToSection] Scrolling to section: ${sectionId}`);
    console.log(`[scrollToSection]   section.offsetTop: ${currentOffsetTop}`);
    console.log(`[scrollToSection]   offset: ${offset}`);
    console.log(`[scrollToSection]   Calculated scrollTo: ${scrollTo}`);
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  } else {
    console.warn(`[scrollToSection] Section with ID "${sectionId}" not found.`);
  }
};
