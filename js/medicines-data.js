
const STORAGE_KEY = "pharmacyMedicines";

const sampleMedicines = [
    {
        id: 1,
        name: "Paracetamol",
        category: "Tablet",
        manufacturer: "ABC Pharma",
        price: 20,
        quantity: 100,
        expiryDate: "2027-06-30"
    },
    {
        id: 2,
        name: "Vitamin C",
        category: "Supplement",
        manufacturer: "XYZ Pharma",
        price: 50,
        quantity: 80,
        expiryDate: "2027-09-15"
    },
    {
        id: 3,
        name: "Amoxicillin",
        category: "Capsule",
        manufacturer: "HealthCare Ltd",
        price: 120,
        quantity: 8,
        expiryDate: "2027-01-15"
    },
    {
        id: 4,
        name: "Cetirizine",
        category: "Tablet",
        manufacturer: "MediLife",
        price: 30,
        quantity: 5,
        expiryDate: "2026-12-15"
    }
];

if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(sampleMedicines)
    );
}

window.PMSData = {
    getMedicines() {
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );
    },

    saveMedicines(data) {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    }
};
