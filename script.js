window.onload = function () {
  info();
};

var data = [];

function savedata() {
  //check if the form has the data we require

  const cname = document.getElementById("cname").value;
  const ctype = document.getElementById("ctype").value;
  const cduration_start_date = document.getElementById(
    "cduration_start_date"
  ).value;
  const cduration_end_date =
    document.getElementById("cduration_end_date").value;
  const cstate = document.getElementById("cstate").value;
  const clga = document.getElementById("clga").value;
  const cward = document.getElementById("cward").value;
  const cstrategy = document.getElementById("cstrategy").value;

  let startDate = new Date(cduration_start_date).getMonth();
  let endDate = new Date(cduration_end_date).getMonth();
  let status;
  let statusColor;
  let today = new Date().getMonth();
  // console.log("today date", today - startDate);

  if (today > endDate) {
    status = "Completed";
    statusColor = "text-success";
  } else if (today > startDate) {
    status = "Ongoing";
    statusColor = "text-warning";
  } else {
    status = "Failed";
    statusColor = "text-danger";
  }
  
  let dataobject = {
    campaign_name: cname,
    type: ctype,
    status: status,
    startDate: cduration_start_date,
    endDate: cduration_end_date,
    state: cstate,
    ward: cward,
    lga: clga,
    strategy: cstrategy,
    statusColor: statusColor,
  };

  data.push(dataobject);
  
  info();

  // console.log("dataobject", dataobject);

  //clears the form after values have been saved to table

  document.getElementById("cname").value="";
  document.getElementById("ctype").value="";
  document.getElementById("cduration_start_date").value="";
  document.getElementById("cduration_end_date").value="";
  document.getElementById("cstate").value="";
  document.getElementById("clga").value="";
  document.getElementById("cward").value="";
  document.getElementById("cstrategy").value="";
}
//call this function when ever the page loads
function info() {
  //check if data is available
  if (data.length <= 0) {
    
    document.getElementById("data_available").style.display = "none";
  } else {
    document.getElementById("emptydata").style.display = "none";
    document.getElementById("data_available").style.display = "block";
  }
  var table = "";

  for (var i in data) {
    table += "<tr>";
    table +=
      `<td><a href='#' onclick='dDisplay(${i})' data-bs-toggle='modal'
      data-bs-target='#updateModal'><input class='radio' type='radio'/>` +
      data[i].campaign_name +
      " " +
      data[i]?.startDate +
      "</td></a>" +
      "<td>" +
      data[i].type +
      "</td>" +
      `<td class='${data[i].statusColor}'>` +
      data[i].status;
    ("</td>");
    table += "</tr>";
  }

  document.getElementById("info").innerHTML = table;
}

function dDisplay(i) {
  console.log("id display ", i);
  data[i];
  console.log('data detail', data[i]);

  document.getElementById("cName").value=data[i].campaign_name;
  document.getElementById("cType").value=data[i].type;
  document.getElementById("cDurationStartDate").value=data[i].startDate;
  document.getElementById("cDurationEndDate").value=data[i].endDate;
  document.getElementById("cState").value=data[i].state;
  document.getElementById("cLga").value=data[i].lga;
  document.getElementById("cWard").value=data[i].ward;
  document.getElementById("cStrategy").value=data[i].strategy;

}

function updateData()
{
 const cName = document.getElementById("cName").value;
 const cType = document.getElementById("cType").value;
 const cDurationStartDate = document.getElementById("cDurationStartDate").value;
  const cDurationEndDate = document.getElementById("cDurationEndDate").value;
  const cState = document.getElementById("cState").value;
  const cLga = document.getElementById("cLga").value;
  const cWard = document.getElementById("cWard").value;
  const cStrategy = document.getElementById("cStrategy").value;

  let startDate = new Date(cDurationStartDate).getMonth();
  let endDate = new Date(cDurationEndDate).getMonth();
  let status;
  let statusColor;
  let today = new Date().getMonth();
  // console.log("today date", today - startDate);

  if (today > endDate) {
    status = "Completed";
    statusColor = "text-success";
  } else if (today > startDate) {
    status = "Ongoing";
    statusColor = "text-warning";
  } else {
    status = "Failed";
    statusColor = "text-danger";
  }

  let dataobject = {
    campaign_name: cName,
    type: cType,
    status: status,
    startDate: cDurationStartDate,
    endDate: cDurationEndDate,
    state: cState,
    ward: cWard,
    lga: cLga,
    strategy: cStrategy,
    statusColor: statusColor
  };

  data[0] = dataobject;

  info();


}
