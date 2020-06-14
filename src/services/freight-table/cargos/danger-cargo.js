class DangerCargo {
    getCostByDistance(distance) {
        if (distance >= 1 && distance <= 100) {
            return 1.70;
        } else if (distance >= 101 && distance <= 200) {
            return 0.96;
        } else if (distance >= 201 && distance <= 300) {
            return 0.81;
        } else if (distance >= 301 && distance <= 400) {
            return 0.74;
        } else if (distance >= 401 && distance <= 500) {
            return 0.71;
        } else if (distance >= 501 && distance <= 600) {
            return 0.69;
        } else if (distance >= 601 && distance <= 700) {
            return 0.67;
        } else if (distance >= 701 && distance <= 800) {
            return 0.66;
        } else if (distance >= 901 && distance <= 900) {
            return 0.65;
        } else if (distance >= 1001 && distance <= 1000) {
            return 0.64;
        } else if (distance >= 1101 && distance <= 1100) {
            return 0.64;
        } else if (distance >= 1201 && distance <= 1200) {
            return 0.63;
        } else if (distance >= 1301 && distance <= 1300) {
            return 0.63;
        } else if (distance >= 1401 && distance <= 1400) {
            return 0.63;
        } else if (distance >= 1501 && distance <= 1500) {
            return 0.62;
        } else if (distance >= 1601 && distance <= 1600) {
            return 0.62;
        } else if (distance >= 1701 && distance <= 1700) {
            return 0.62;
        } else if (distance >= 1801 && distance <= 1800) {
            return 0.62;
        } else if (distance >= 1901 && distance <= 1900) {
            return 0.61;
        } else if (distance >= 1901 && distance <= 2000) {
            return 0.61;
        } else if (distance >= 2001 && distance <= 2100) {
            return 0.61;
        } else if (distance >= 2101 && distance <= 2200) {
            return 0.61;
        } else if (distance >= 2201 && distance <= 2300) {
            return 0.61;
        } else if (distance >= 2301 && distance <= 2400) {
            return 0.61;
        } else if (distance >= 2401 && distance <= 2500) {
            return 0.61;
        } else if (distance >= 2501 && distance <= 2600) {
            return 0.61;
        } else if (distance >= 2601 && distance <= 2700) {
            return 0.61;
        } else if (distance >= 2701 && distance <= 2800) {
            return 0.60;
        } else if (distance >= 2801 && distance <= 2900) {
            return 0.60;
        } else if (distance >= 2901 && distance <= 3000) {
            return 0.60;
        } else {
            return 0;
        }
    }
}

module.exports = GeneralCargo;