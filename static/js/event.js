document.addEventListener("DOMContentLoaded", () => {
    const shareLink = document.getElementById("share-link");
    shareLink.href = document.location;
    shareLink.textContent = document.location;

    const copyShareLinkBtn = document.getElementById("copy-share-link");
    copyShareLinkBtn.onclick = () => {
        navigator.clipboard.writeText(document.location);
    }
});