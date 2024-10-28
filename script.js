document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('invitation').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Вы не приглашены!');
    window.location.href = "https://google.com";
});