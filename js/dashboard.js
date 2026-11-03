// Dashboard data

document.getElementById("totalMedicines").textContent =
    medicines.length;

document.getElementById("availableStock").textContent =
    medicines.reduce((total, medicine) =>
        total + medicine.quantity, 0);

document.getElementById("lowStock").textContent =
    medicines.filter(medicine => medicine.quantity < 20).length;

const today = new Date();

document.getElementById("expiringSoon").textContent =
    medicines.filter(medicine => {
        const expiry = new Date(medicine.expiryDate);
        const days = (expiry - today) / (1000 * 60 * 60 * 24);

        return days >= 0 && days <= 30;
    }).length;


// Sales Chart

const chart = document.getElementById("salesChart");

new Chart(chart, {
    type: "bar",

    data: {
        labels: ["Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"],

        datasets: [{
            label: "Sales (₹)",
            data: [1200, 1800, 1500, 2200, 1900, 2800],
            backgroundColor: "#1d7580",
            borderRadius: 6
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: true,

        plugins: {
            legend: {
                display: false
            }
        }
    }
});
// Display current date
document.getElementById("currentDate").textContent =
    new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });