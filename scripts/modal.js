function openAlert({ title, message, actionText, actionHref }) {
    let dialog = document.getElementById('alert-modal');
    if (dialog) dialog.remove();

    dialog = document.createElement('dialog');
    dialog.id = 'alert-modal';
    dialog.className = 'alert-modal';
    dialog.innerHTML = `
        <h2></h2>
        <p></p>
        <div class="alert-actions">
            ${actionHref ? '<a class="alert-primary"></a>' : ''}
            <button type="button" class="alert-close">Close</button>
        </div>
    `;

    // textContent keeps the text safe
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('p').textContent = message;
    if (actionHref) {
        const link = dialog.querySelector('.alert-primary');
        link.textContent = actionText;
        link.href = actionHref;
    }

    dialog.querySelector('.alert-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); }); // click outside

    document.body.appendChild(dialog);
    dialog.showModal();
}