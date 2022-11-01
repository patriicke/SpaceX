export const calculateDate = (date) => {
    if (!date) return null;
    let diffTime = Math.abs(new Date().valueOf() - date * 1000);
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [
        Math.floor(days),
        Math.floor(hours),
        Math.floor(minutes),
        Math.floor(secs),
    ];
    if (days != 0) {
        if (days > 365) {
            let years = days / 365;
            return `${years.toFixed(0)}y`;
        } else {
            if (days > 30) {
                const months = days / 30;
                return `${months.toFixed(0)}mo`;
            }
            return `${days} days`;
        }
    } else if (hours != 0) {
        return `${hours} hours`;
    } else if (minutes != 0) {
        return `${minutes} minutes`;
    } else {
        return `${secs} seconds`;
    }
};
