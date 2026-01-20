document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("contactModal");
    const closeBtn = document.getElementById("closeModal");
    const openBtns = document.querySelectorAll("#openModal, #openModal2");

    openBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
