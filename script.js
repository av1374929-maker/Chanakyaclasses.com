

function bookSeat() {
    const message = "Hello Chanakya Classes! I want to book a Free Demo Class.";

    const phone = "917549029355";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
