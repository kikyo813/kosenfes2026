function resizeSite() {
    const baseWidth = 1440;
    const scale = Math.min(1, window.innerWidth / baseWidth);

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = "top left";
    document.body.style.width = `${baseWidth}px`;
    document.body.style.margin = "0";
}

window.addEventListener("resize", resizeSite);
resizeSite();