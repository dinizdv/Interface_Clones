const paragraphs = document.querySelectorAll(".p-links");
paragraphs.forEach((p) => {
    maxLength = 12
    if (p.textContent.length > maxLength) { 
        p.textContent = p.textContent.substring(0, maxLength) + '...'; 
    }
});
