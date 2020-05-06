const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
const submitContactForm = (values) => {
    console.log(values);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
        .then(() => console.log("Success!", values))
        .catch(error => console.log(error));
};

export default submitContactForm;