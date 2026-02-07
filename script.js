document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    let clickCount = 0;
    const maxClicks = 5; // After 5 clicks, No button becomes too small to click
    
    // Initial sizes
    let yesSize = 1;
    let noSize = 1;
    
    // Yes button click handler
    yesBtn.addEventListener('click', function() {
        // Redirect to yes page
        window.location.href = 'yes.html';
    });
    
    // No button click handler
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;
        
        // Increase Yes button size
        yesSize += 0.2;
        yesBtn.style.transform = `scale(${yesSize})`;
        yesBtn.style.fontSize = `${1.2 + (clickCount * 0.1)}em`;
        
        // Decrease No button size
        noSize -= 0.15;
        if (noSize < 0.3) {
            noSize = 0.3; // Minimum size
        }
        noBtn.style.transform = `scale(${noSize})`;
        noBtn.style.fontSize = `${1.2 - (clickCount * 0.1)}em`;
        
        // Make No button harder to click by reducing its opacity and making it move
        noBtn.style.opacity = `${1 - (clickCount * 0.15)}`;
        
        // Move No button to a random position
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.position = 'relative';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // After max clicks, disable No button
        if (clickCount >= maxClicks) {
            noBtn.style.pointerEvents = 'none';
            noBtn.style.opacity = '0.1';
            noBtn.style.cursor = 'not-allowed';
            
            // // Show a message
            // const message = document.createElement('p');
            // message.textContent = 'You can only choose Yes! 💕';
            // message.style.color = '#d63384';
            // message.style.marginTop = '20px';
            // message.style.fontSize = '1.1em';
            // message.style.fontWeight = 'bold';
            // document.querySelector('.buttons-container').appendChild(message);
        }
        
        // Add a fun animation to Yes button
        yesBtn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            yesBtn.style.animation = 'pulse 2s infinite';
        }, 500);
    });
    
    // Add hover effect that makes Yes button even more appealing
    yesBtn.addEventListener('mouseenter', function() {
        this.style.transform = `scale(${yesSize * 1.1})`;
    });
    
    yesBtn.addEventListener('mouseleave', function() {
        this.style.transform = `scale(${yesSize})`;
    });
});
