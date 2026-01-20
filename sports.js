document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("closeModal");

    document.querySelectorAll(".btn-register").forEach(btn => {
        btn.addEventListener("click", e => {
            if (btn.getAttribute("href") === "#") e.preventDefault();
            modal.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });

    const bookingForm = document.getElementById("sportsBookingForm");
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();
        const fields = bookingForm.querySelectorAll("input, select, textarea");
        let valid = true;
        fields.forEach(f => { if (!f.value.trim()) { f.style.border="2px solid red"; valid=false; } else { f.style.border="1px solid #ccc"; } });
        if(!valid){ alert("Please fill all required fields."); return; }
        alert("Sports event booking submitted!");
        bookingForm.reset();
        modal.classList.remove("active");
    });
});
