var obj = {
  data: {
    uuid: 'c7149c74-55bd-4358-90a9-1a5c0b1f88be',
    token: 'N5ERqKLM3uKPpFcBeuQLTVF3JlsjT6YFvxC5e9fSKK3IN7QNeRie3f0x3Y7M',//驗證碼，不是固定數值
    products: [],
  },
  getData: function () {
    var vm = this;
    var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;
    var deleteUrl = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/admin/ec/product/9KRpOSat8rwOf9Frd6YkVRn4VBr2ro9uHTfEkUlw9hXoICDZrmCXkbwBBAT26GWY`;
    axios.get(url)
      .then(function (response) {
        vm.data.products = response.data.data;
        console.log(vm.data.products);
        vm.render();
      })


    // axios.delete(deleteUrl)
    //   .then(function (response) {
    //     console.log('deleteData');
    //     vm.data.products = response.data.data;
    //     console.log(vm.data.products);
    //   })
  },
  render: function () {
    var app = document.getElementById('app');
    var products = this.data.products;
    var str = '';
    products.forEach(function (item) {
      str += `
  <div class="card">
  <img src="${ item.imageUrl[0]}" class="card-img-top">
  <div class="card-body">
  <h5 class="card-title">${ item.title}</h5>
  <p class="card-text">${ item.content}</p>
  </div>
  </div>`;
    });
    app.innerHTML = str;
  }
}

obj.getData();