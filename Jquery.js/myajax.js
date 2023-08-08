$(document).ready(function () {
  //Ajax code for insert data
  $("#btnadd").click(function (e) {
    e.preventDefault(); //Preserve to paga reload
    //  console.log('Btn Add Clicked');  [check in console first]

    let id = $("#stid").val(); // WE can write this line after the complite thw sql update query
    let nm = $("#nameid").val();
    let em = $("#emailid").val();
    let ps = $("#passwordid").val();

    //Create an Object (Key:Value)
    let mydata = { id: id, name: nm, email: em, password: ps };

    $.ajax({
      url: "insert.php",
      method: "post",
      data: mydata,

      success: function (response) {
        // console.log(response);   // check in console
        $("#msg").html(response);
      },
    });
    //Id of form take to reset the page
    $("#myform")[0].reset();

    $("#stid").val(""); //here we can set the value empty in ID of (stid)
    $("#nameid").focus(); // and we are only focuse on name
    show_Data();
  });

  //Ajax code for Read data

  function show_Data() {
    let output = ""; //here we can send all data by using "FOR loop"
    $.ajax({
      url: "fetch.php",
      method: "get",
      // when we write "datatype" then this data(string) converted into "json format"
      dataType: "json",

      success: function (check) {
        // console.log(check[1]);

        x = check;
        // console.log(x.length);
        for (i = 0; i <= x.length - 1; i++) {
          // console.log(x[i].id);
          output +=
            "<tr><td>" +
            x[i].id +
            "</td><td>" +
            x[i].name +
            "</td><td>" +
            x[i].email +
            "</td><td>" +
            x[i].password +
            "</td><td><button class='btn btn-warning mx-3' id='btnedit' data-sid=" +
            x[i].id +
            ">Edit</button><button class='btn btn-success' id='btndel' data-sid=" +
            x[i].id +
            ">Delete</button></td></tr>";
        } // data-sid == Unique Id of both button
        $("#tbody").html(output);
      },
    });
  }
  show_Data();

  //  Ajax code for Delet data

  $("#tbody").on("click", "#btndel", function () {
    console.log("btn delet"); //  In console check

    let ok = $(this).attr("data-sid");
    console.log(ok); //show id when we click on delet button then...

    mydata = { id_id: ok }; //key:value   ("Onkar" == Any Variable)
    mythis = this;
    console.log(mydata);
    $.ajax({
      url: "delete.php",
      method: "post",
      data: mydata,
      success: function (response) {
        // console.log(response);

        $("#msg").html(response);
        $(mythis).closest("tr").fadeOut(500); // [500 second (Half Second)]  * closest is a jquery method =The closest() method returns the first ancestor of the selected element.
        //The fadeOut() method gradually changes the opacity, for selected elements, from visible to hidden (fading effect).
      },
    });
  });
  // show_Data();

  //Ajax for Update data

  //Step 1= Firstily add one line to the html file i.e [<input type="hidden" id="stid" class="form-control"/>]

  $("#tbody").on("click", "#btnedit", function () {
    console.log("btn edit");

    let ok = $(this).attr("data-sid");
    console.log(ok); //show id when we click on Edit button then...

    mydata = { id_id: ok };
    mythis = this;
    console.log(mydata);

    $.ajax({
      url: "update.php",
      method: "post",
      data: mydata,
      // when we write "datatype" then this data(string) converted into "json format"
      dataType: "json",
      success: function (response) {
        // console.log(response);

        x = response;
        $("#stid").val(x.id);
        $("#nameid").val(x.name);
        $("#emailid").val(x.email);
        $("#passwordid").val(x.password);
      },
    });
  });
});

//For search bar

function myfun() {
  let output = "";
  let given = $("#search").val();
  console.log(given);
  mydata = { name: given };
  $.ajax({
    url: "search.php",
    method: "post",
    data: mydata,
    dataType: "json",
    success: function (response) {
      console.log(response);
      // },
      x = response;
      console.log(x.length);
      for (i = 0; i <= x.length - 1; i++) {
        console.log(x[i].id);
        output +=
          "<tr><td>" +
          x[i].id +
          "</td><td>" +
          x[i].name +
          "</td><td>" +
          x[i].email +
          "</td><td>" +
          x[i].password +
          "</td><td><button class='btn btn-warning mx-3' id='btnedit' data-sid=" +
          x[i].id +
          ">Edit</button><button class='btn btn-success' id='btndel' data-sid=" +
          x[i].id +
          ">Delete</button></td></tr>";
      } // data-sid == Unique Id of both button
      $("#tbody").html(output);
    },
  });
}
