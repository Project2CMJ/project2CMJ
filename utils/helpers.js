module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  format_image: (url) => {
    //
    if (url) {
    const urlData = url.split("/")
    return urlData[5]
    }
  }
};
