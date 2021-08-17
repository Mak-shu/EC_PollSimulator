var voters_name = [];
var temp = [];
function addCandidate() {
  var candidate = document.getElementById("candidate").value;
  if (localStorage.getItem("cname") == null) {
    localStorage.setItem("cname", "[]");
  }
  var old_names = JSON.parse(localStorage.getItem("cname"));
  old_names.push(candidate);
  localStorage.setItem("cname", JSON.stringify(old_names));
  alert("New Candidate " + candidate + " Added!");
  document.getElementById("candidate").value = "";
}

function disp_candidates() {
  var up_names = JSON.parse(localStorage.getItem("cname"));
  up_names.forEach((candidateValue, i) => {
    var labelValue = document.createElement("label");
    labelValue.id = "la";
    labelValue.innerHTML = candidateValue;
    var inputValue = document.createElement("input");
    inputValue.type = "radio";
    inputValue.name = "demo";
    inputValue.id = candidateValue;
    inputValue.candidateValue = i;
    document.body.appendChild(labelValue);
    document.body.appendChild(inputValue);
  });
}

function giveVote() {
  var radios = document.getElementsByTagName("input");
  if (localStorage.getItem("ename") == null) {
    localStorage.setItem("ename", "[]");
  }
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      temp = JSON.parse(localStorage.getItem("ename"));
      temp.push(radios[i].id);
      localStorage.setItem("ename", JSON.stringify(temp));
    }
  }
}

function addVoters() {
  var voters = document.getElementById("studid").value;
  if (localStorage.getItem("vname") == null) {
    localStorage.setItem("vname", "[]");
  }
  voters_name = JSON.parse(localStorage.getItem("vname"));
  if (!voters_name.includes(voters)) {
    voters_name.push(voters);
    localStorage.setItem("vname", JSON.stringify(voters_name));
    giveVote();
    alert(voters + " your vote has been recorded successfully!");
  } else {
    alert(voters + " you have already voted!");
  }
}

function count_votes() {
  var div = document.getElementById("snames");
  var temp_names = JSON.parse(localStorage.getItem("ename"));
  temp_names.sort();

  var current = null;
  var cnt = 0;
  for (var i = 0; i < temp_names.length; i++) {
    if (temp_names[i] != current) {
      if (cnt > 0) {
        div.innerHTML += current + " : " + cnt + "<br>";
      }
      current = temp_names[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    div.innerHTML += current + " : " + cnt;
  }
}

function max_mix() {
  var div = document.getElementById("pollr");
  var temp_names = JSON.parse(localStorage.getItem("ename"));
  var max = Number.MIN_SAFE_INTEGER;
  var min = Number.MAX_SAFE_INTEGER;
  var cnt = 0;
  var maname;

  for (var i = 0; i < temp_names.length; i++) {
    cnt = 0;
    for (var j = 0; j < temp_names.length; j++) {
      if (temp_names[i] == temp_names[j]) {
        cnt++;
      }
    }
    if (cnt < min) {
      min = cnt;
      miname = temp_names[i];
    }
    if (cnt > max) {
      max = cnt;
      maname = temp_names[i];
    }
  }
  div.innerHTML = "Won : " + maname + " (" + max + ")<br/>";
  div.innerHTML += "Lost : " + miname + " (" + min + ")";
}
