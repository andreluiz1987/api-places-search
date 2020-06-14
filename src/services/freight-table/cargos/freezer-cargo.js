class FreezerCargo {
    getCostByDistance(distance) {
        if (distance >= 1 && distance <= 100) {
            return 1.53;
        } else if (distance >= 101 && distance <= 200) {
            return 0.95;
        } else if (distance >= 201 && distance <= 300) {
            return 0.83;
        } else if (distance >= 301 && distance <= 400) {
            return 0.78;
        } else if (distance >= 401 && distance <= 500) {
            return 0.75;
        } else if (distance >= 501 && distance <= 600) {
            return 0.74;
        } else if (distance >= 601 && distance <= 700) {
            return 0.72;
        } else if (distance >= 701 && distance <= 800) {
            return 0.71;
        } else if (distance >= 901 && distance <= 900) {
            return 0.71;
        } else if (distance >= 1001 && distance <= 1000) {
            return 0.70;
        } else if (distance >= 1101 && distance <= 1100) {
            return 0.70;
        } else if (distance >= 1201 && distance <= 1200) {
            return 0.69;
        } else if (distance >= 1301 && distance <= 1300) {
            return 0.69;
        } else if (distance >= 1401 && distance <= 1400) {
            return 0.69;
        } else if (distance >= 1501 && distance <= 1500) {
            return 0.69;
        } else if (distance >= 1601 && distance <= 1600) {
            return 0.68;
        } else if (distance >= 1701 && distance <= 1700) {
            return 0.68;
        } else if (distance >= 1801 && distance <= 1800) {
            return 0.68;
        } else if (distance >= 1901 && distance <= 1900) {
            return 0.68;
        } else if (distance >= 1901 && distance <= 2000) {
            return 0.68;
        } else if (distance >= 2001 && distance <= 2100) {
            return 0.68;
        } else if (distance >= 2101 && distance <= 2200) {
            return 0.68;
        } else if (distance >= 2201 && distance <= 2300) {
            return 0.68;
        } else if (distance >= 2301 && distance <= 2400) {
            return 0.67;
        } else if (distance >= 2401 && distance <= 2500) {
            return 0.67;
        } else if (distance >= 2501 && distance <= 2600) {
            return 0.67;
        } else if (distance >= 2601 && distance <= 2700) {
            return 0.67;
        } else if (distance >= 2701 && distance <= 2800) {
            return 0.67;
        } else if (distance >= 2801 && distance <= 2900) {
            return 0.67;
        } else if (distance >= 2901 && distance <= 3000) {
            return 0.67;
        } else {
            return 0;
        }
    }
}

module.exports = GeneralCargo;