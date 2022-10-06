const searchElement = document.querySelector("#input");
let searchValue = "";
searchElement.addEventListener("input", (event) => {
  searchValue = event.target.value;
});

const data = [
  {
    nama_lengkap: "Yohanes Kukuh Niti Cahya Bagaskara",
    nama_panggilan: "Bagas",
    nomor_telepon: "081393566854",
    id_line: "bagaskukuh_",
    tanggal_lahir: "8/30/2001",
    nim: 21120119130095,
    email: "bagaskukuh2@gmail.com",
    hobi: "baca buku",
  },
  {
    nama_lengkap: "Satria Bimantara Dharmawan",
    nama_panggilan: "Bima",
    nomor_telepon: "081328694344",
    id_line: "sabimantaradh",
    tanggal_lahir: "7/14/2001",
    nim: 21120119130096,
    email: "bimantaradharmawan@gmail.com",
    hobi: "Billiard",
  },
];

const renderData = (data) => {
  const listElement = document.querySelector("#content");
  listElement.innerHTML = "";
  data.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.innerHTML = `
        <h2>${item.nama_lengkap}</h2>
        <p>${item.nama_panggilan}</p>
        <p>${item.nomor_telepon}</p>
        <p>${item.id_line}</p>
        <p>${item.tanggal_lahir}</p>
        <p>${item.nim}</p>
        <p>${item.email}</p>
        <p>${item.hobi}</p>
        `;
    listElement.appendChild(itemElement);
  });
};

searchElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const filteredData = data.filter((item) => {
      // filter by name
      const name = item.nama_lengkap.toLowerCase();
      const search = searchValue.toLowerCase();
      return name.includes(search);
    });
    if (!filteredData.length) {
      const content = document.querySelector("#content");
      content.innerHTML = "Data tidak ditemukan";
      return;
    }

    renderData(filteredData);
  }
});
