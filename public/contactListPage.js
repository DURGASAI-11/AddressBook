const deleteContact = document.querySelectorAll(".trash");

// selectRel.addEventListener("change", (e) => {
//   let selectedContent = e.target.value;
//   const filterFun = async (selectedContent) => {
//     try {
//       const res = await axios.get(`/contactList/category/${selectedContent}`);
//       if (res.data.status === "success") {
//         console.log("success fully fetched ");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   filterFun(selectedContent);
// });

deleteContact.forEach((contac) => {
  contac.addEventListener("click", (e) => {
    let del = e.target;
    console.log(del);
    const { contactId } = del.dataset;
    const delCon = async () => {
      const res = await axios.delete(`/contactList/${contactId}`);
      if (res.data.status == "success") {
        window.location.href = "/contactList";
      }
    };
    delCon();
  });
});
