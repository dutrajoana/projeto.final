document.addEventListener("DOMContentLoaded", () => {

    const links = {
        receita1: "receitas/receita1.html", 
        receita2: "receitas/receita2.html",
        receita3: "receitas/receita3.html",
        receita4: "receitas/receita4.html",
    };

    Object.keys(links).forEach((id) => {

        const image = document.getElementById(id);
        if (image) {
            image.style.cursor = "pointer";
            image.addEventListener("click", () => {
                window.location.href = links[id];
        })
    };
})
});
