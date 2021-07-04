let data = [];

const fetchData = () => {
  //verinin çekildiği yer
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      //json'dan okunan verinin data array'ine atanması
      data = responseData;

      //veri geldikten sonra filtreleme butonu görünür olsun
      let filterButton = document.querySelector("#filterButton");
      filterButton.setAttribute("style", "");

      let filterInput = document.querySelector("#inputs");
      filterInput.setAttribute("style", "");

      //verinin html içerisinde listelendiği fonksiyon
      listData(responseData);
    })
    .catch((err) => {
      //hata yönetimi
      console.log(err);
    });
};

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
  let list = document.querySelector(".list");
  list.innerHTML = data.map((element) => {
    return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>email:</span> ${element.age}
            <span class='bold'>email:</span> ${element.isActive}
        </li>
        `;
  });
};

//verinin filtrelenmesini sağlayan fonksiyon
//TODO

const filterData = (filter) => {
  switch (filter) {
    case "isActive":
      let filteredData = data.filter((element) => element.isActive === true);
      listData(filteredData);
      break;
    default:
      break;
  }
};

const filterDataAge = (filter) => {
  switch (filter) {
    case "age":
      if (checkboxAge.checked) {
        let filteredDataAge = data.filter(
          (element) => element.age > 17 && element.isActive === true
        );
        listData(filteredDataAge);
      }
      break;
    default:
      break;
  }
};

const filterDataName = (filter) => {
  const firstLetter = document.querySelector("#inputName").value.toUpperCase();

  switch (filter) {
    case "name":
      if (inputName.value !== "") {
        let filteredDataName = data.filter(
          (element) => element.name.charAt(0) === firstLetter
        );

        listData(filteredDataName);
      }
      break;
    default:
      break;
  }
};

/* let filteredPersonList = [...personList];

if (filterData.checked) {
  filteredPersonList = filteredPersonList.filter((person) => {
    return person.isActive;
  });
}

if (filterDataAge.checked) {
  filteredPersonList = filteredPersonList.filter((person) => {
    return person.age >= 18;
  });
}

if (filterDataName.value) {
  filteredPersonList = filteredPersonList.filter((person) => {
    return FilterDataName.value.toLowerCase() === person.name[0].toLowerCase();
  });
}

listData(filteredPersonList);
 */
