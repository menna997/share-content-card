const copyBtn = document.getElementById("copyBtn");
const input = document.getElementById("shareLink");

const icons = document.querySelectorAll(".icon");

icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();

        input.value = icon.dataset.link;
    });
});


copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(input.value);

        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
        }, 2000);

    } catch {
        alert("Unable to copy the link.");
    }
});


icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();

        // إزالة الإطار من كل الأيقونات
        icons.forEach(i => i.classList.remove("active"));

        // إضافة الإطار للأيقونة المختارة
        icon.classList.add("active");
    });
});