function toggleContent() {
    var curtain = document.getElementById("curtain");
    var content = document.getElementById("content");
    
    // Add CSS class to trigger animation
    curtain.classList.add("fadeOutAnimation");

    // After ~3 seconds, toggle visibility
    setTimeout(function() {
        curtain.style.visibility = "hidden";
        content.style.visibility = "visible";
    }, 000); // Adjust time as needed (in milliseconds)
}
