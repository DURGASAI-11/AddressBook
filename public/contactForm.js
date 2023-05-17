// import "./node_modules/@babel/polyfill/dist/polyfill.min.js";
// import "@babel/polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const contactDetails = document.querySelector(".formData");

contactDetails.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name1 = document.getElementById("contact-name").value;
  const phone = document.getElementById("contact-phone").value;
  const address = document.getElementById("contact-address").value;
  const selectRel = document.getElementById("selectRelation");
  const selectedValue = selectRel.value;

  const saveContact = async (name1, phone, address, selectedValue) => {
    try {
      const res = await axios.post("contact", {
        name: name1,
        phone: phone,
        address: address,
        relation: selectedValue,
      });
      if (res.data.status == "success") {
        window.location.href = "contactList";
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  saveContact(name1, phone, address, selectedValue);
  document.getElementById("contact-name").value = "";
  document.getElementById("contact-phone").value = "";
  document.getElementById("contact-address").value = "";
});
