document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Kullanıcının tercihlerini kaydet
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Sayfa yüklendiğinde kullanıcının tercihini uygula
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
