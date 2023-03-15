
export function convertDate(time: number) {
    const date = new Date(time * 1000);
    return date.toString();
}