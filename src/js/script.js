const copyBtn = document.getElementById("copyBtn");
const input = document.getElementById("shareLink");
const socialIcons = document.querySelector(".social-icons");

const socialLinks = [
  {
    className: "twitter",
    url: "https://twitter.com/intent/tweet?url=https://www.frontendpro.dev",
    icon: "./src/assets/images/twitter.svg",
    alt: "Twitter",
  },
  {
    className: "linkedin",
    url: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.frontendpro.dev",
    icon: "./src/assets/images/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    className: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=https://www.frontendpro.dev",
    icon: "./src/assets/images/facebook.svg",
    alt: "Facebook",
  },
  {
    className: "instagram",
    url: "https://www.instagram.com/",
    icon: "./src/assets/images/instagram.svg",
    alt: "Instagram",
  },
  {
    className: "pinterest",
    url: "https://pinterest.com/pin/create/button/?url=https://www.frontendpro.dev",
    icon: "./src/assets/images/pinterest.svg",
    alt: "Pinterest",
  },
  {
    className: "telegram",
    url: "https://t.me/share/url?url=https://www.frontendpro.dev",
    icon: "./src/assets/images/telegram.svg",
    alt: "Telegram",
  },
];

socialLinks.forEach((social) => {
  const link = document.createElement("a");
  const img = document.createElement("img");

  link.href = "#";
  link.classList.add("icon", social.className);
  link.dataset.link = social.url;

  img.src = social.icon;
  img.alt = social.alt;

  link.appendChild(img);
  socialIcons.appendChild(link);

  link.addEventListener("click", (e) => {
    e.preventDefault();

    document
      .querySelectorAll(".icon")
      .forEach((icon) => icon.classList.remove("active"));

    link.classList.add("active");
    input.value = social.url;
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
