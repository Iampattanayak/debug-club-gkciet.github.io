document.addEventListener('DOMContentLoaded', function () {
    const codeContainer = document.getElementById('typewriter-code');
    if (!codeContainer) return;

    // Create a cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';
    cursor.style.display = 'inline-block';
    cursor.style.marginLeft = '2px';
    cursor.style.animation = 'blink 1s step-end infinite';

    // Add cursor styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .typewriter-cursor {
            color: #61afef;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Clone the original content structure
    const originalContent = codeContainer.cloneNode(true);

    // Clear the container but keep it ready
    codeContainer.innerHTML = '';
    codeContainer.appendChild(cursor);

    let isTyping = false;

    // Recursive function to type out nodes
    function typeNode(node, targetParent) {
        return new Promise(async (resolve) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                for (let i = 0; i < text.length; i++) {
                    targetParent.insertBefore(document.createTextNode(text[i]), cursor);
                    // Randomize typing speed for realism (2-10ms)
                    await new Promise(r => setTimeout(r, Math.random() * 8 + 2));
                }
                resolve();
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const element = document.createElement(node.tagName);

                // Copy attributes
                Array.from(node.attributes).forEach(attr => {
                    element.setAttribute(attr.name, attr.value);
                });

                // Insert the element before the cursor
                targetParent.insertBefore(element, cursor);

                // Recursively type children into this new element
                // We need to move the cursor inside this valid element temporarily? 
                // Actually no, we just append children to this element.
                // But the cursor needs to be at the "typing point". 
                // The "typing point" is effectively the end of the content we've built so far.
                // But for nested structures (like spans), we need to fill the span.

                // Move cursor inside the new element
                element.appendChild(cursor);

                for (let child of Array.from(node.childNodes)) {
                    await typeNode(child, element);
                }

                // After finishing children, move cursor back out to parent (after the element)
                targetParent.insertBefore(cursor, element.nextSibling);

                resolve();
            } else {
                resolve();
            }
        });
    }

    // Intersection Observer to start animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                isTyping = true;
                observer.disconnect(); // Only run once

                // Add specific delay before starting
                setTimeout(async () => {
                    // We need to pass the container but we need to handle the recursive logic carefully.
                    // The recursive function assumes we are appending to a parent.
                    // Root level children:
                    for (let child of Array.from(originalContent.childNodes)) {
                        await typeNode(child, codeContainer);
                    }

                    // Animation done - keep cursor blinking or remove it?
                    // User usually likes it blinking.
                }, 500);
            }
        });
    }, { threshold: 0.5 }); // Start when 50% visible

    observer.observe(codeContainer);
});
