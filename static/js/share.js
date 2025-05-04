document.addEventListener("DOMContentLoaded", () => {
    const shareLink = document.getElementById("share-link");
    shareLink.href = document.location;
    shareLink.textContent = document.location;

    const facebookLink = document.getElementById("facebook-link");
    facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(document.location)}&amp;src=sdkpreparse`;

    const twitterLink = document.getElementById("twitter-link");
    twitterLink.href = `https://twitter.com/intent/tweet?url=${encodeURI(document.location)}`;

    const copyShareLinkBtn = document.getElementById("copy-share-link");
    copyShareLinkBtn.onclick = () => {
        navigator.clipboard.writeText(document.location);
    }
});