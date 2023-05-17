const edit = document.getElementById("editContact");

updateForm.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name1").value;
  let phone = document.getElementById("phone1").value;
  let address = document.getElementById("address1").value;
  let track = document.getElementById("updateForm");
  let ids = track.dataset.contactIds;
  const selectRel = document.getElementById("selectRelation");
  const selectedValue = selectRel.value;
  const editFunction = async (ids, name, phone, address, relation) => {
    if (phone.length > 10 || phone.length < 10) {
      console.log("please provide 10 digits ");
      return "please provide 10 digits";
    }
    try {
      const res = await axios.patch(`/contact/editContact/${ids}`, {
        name,
        phone,
        address,
        relation,
      });
      console.log(res.data);
      if (res.data.status === "success") {
        window.location.href = "/contactList";
      }
    } catch (err) {
      console.log(err);
    }
  };
  editFunction(ids, name, phone, address, selectedValue);
});
