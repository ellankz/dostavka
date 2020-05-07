

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
const submitContactForm = async (values) => {

    console.log(values);
    return await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
        .then(() => {
          console.log('success');
          return true})
        .catch(error => {
          console.log(error);
          return error
        });
};

export default submitContactForm;