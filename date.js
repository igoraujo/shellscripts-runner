const ZERO = "0";
const SLICE = -2;

class DateTime {
    static now() {
        const now = new Date();
        const date = `${ZERO}${now.getDate()}`.slice(SLICE);
        const month = `${ZERO}${(now.getMonth() + 1)}`.slice(SLICE);
        const year = now.getFullYear();
        const hours = `${ZERO}${now.getHours()}`.slice(SLICE);
        const minutes = `${ZERO}${now.getMinutes()}`.slice(SLICE);
        const seconds = `${ZERO}${now.getSeconds()}`.slice(SLICE);

        return `[${year}-${month}-${date} ${hours}:${minutes}:${seconds}]`;
    }
}

module.exports = DateTime;