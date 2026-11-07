
document.addEventListener("DOMContentLoaded", () => {

    const medicines = PMSData.getMedicines();

    // Total medicines
    document.getElementById("totalMedicines").textContent =
        medicines.length;

    // Available stock
    document.getElementById("availableStock").textContent =
        medicines.reduce(
            (total, medicine) => total + Number(medicine.quantity),
            0
        );

    // Low stock
    document.getElementById("lowStock").textContent =
        medicines.filter(
            medicine => Number(medicine.quantity) < 20
        ).length;

    // Expiring soon (within 30 days)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const thirtyDaysLater = new Date(today);
    thirtyDaysLater.setDate(today.getDate() + 30);

    document.getElementById("expiringSoon").textContent =
        medicines.filter(medicine => {
            const expiry = new Date(medicine.expiryDate + "T00:00:00");
            return expiry >= today && expiry <= thirtyDaysLater;
        }).length;

    // Current date
    document.getElementById("currentDate").textContent =
        new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    // Sales chart
    const chartElement = document.getElementById("salesChart");

    if (chartElement && typeof Chart !== "undefined") {
        new Chart(chartElement, {
            type: "bar",
            data: {
                labels: [
                    "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"
                ],
                datasets: [{
                    label: "Sales (₹)",
                    data: [1200, 1800, 1500, 2200, 1900, 2800],
                    backgroundColor: "#1d7580",
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});
