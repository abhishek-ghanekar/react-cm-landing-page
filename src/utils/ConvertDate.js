function formatDate(inputDate) {
    // Create a new Date object from the input string
    const date = new Date(inputDate);

    // Array of month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get the day, month, and year
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date string
    return `${month} ${day}, ${year}`;
}
export default formatDate