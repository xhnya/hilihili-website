function getImageThemeColor(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // 需要设置图片跨域属性
        img.src = imageUrl;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const imageWidth = img.naturalWidth;
            const imageHeight = img.naturalHeight;

            canvas.width = imageWidth;
            canvas.height = imageHeight;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
            const pixelArray = imageData.data;

            let rSum = 0, gSum = 0, bSum = 0;
            for (let i = 0; i < pixelArray.length; i += 4) {
                rSum += pixelArray[i];
                gSum += pixelArray[i + 1];
                bSum += pixelArray[i + 2];
            }

            const rAvg = Math.round(rSum / (pixelArray.length / 4));
            const gAvg = Math.round(gSum / (pixelArray.length / 4));
            const bAvg = Math.round(bSum / (pixelArray.length / 4));

            const hex = rgbToHex(rAvg, gAvg, bAvg);
            resolve(hex);
        };

        img.onerror = reject;
    });
}
function rgbToHex(r, g, b) {
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return "#" + hex.padStart(6, "0");
}
