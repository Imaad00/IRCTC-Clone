const trainsList = [
  {
    trainTitle: "RAJDHANI EXPRESS (22903)",
    deptTiming: "00:25",
    deptStation: "BORIVALI",
    deptDate: "Fri, 14 Mar",
    desTiming: "12:55",
    desStation: "DELHI",
    desDate: "Fri, 21 Mar",
  },
  {
    trainTitle: "SHATABDI EXPRESS",
    deptTiming: "18:00",
    deptStation: "BANDRA TERMINUS",
    deptDate: "Fri, 14 Mar",
    desTiming: "08:50",
    desStation: "AHMEDABAD",
    desDate: "Sat, 22 Mar",
  },
  {
    trainTitle: "JAN SHATABDI EXP",
    deptTiming: "15:30",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "06:45",
    desStation: "LUCKNOW",
    desDate: "Sat, 22 Mar",
  },
  {
    trainTitle: "GARIB RATH EXP (20907)",
    deptTiming: "15:30",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "06:45",
    desStation: "PATNA",
    desDate: "Sat, 22 Mar",
  },
  {
    trainTitle: "DURONTO EXPRESS",
    deptTiming: "17:55",
    deptStation: "BANDRA TERMINUS",
    deptDate: "Fri, 14 Mar",
    desTiming: "08:40",
    desStation: "KOLKATA",
    desDate: "Sun, 23 Mar",
  },
  {
    trainTitle: "VIDARBHA EXPRESS",
    deptTiming: "15:25",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "06:40",
    desStation: "NAGPUR",
    desDate: "Mon, 24 Mar",
  },
  {
    trainTitle: "GOMTI EXPRESS",
    deptTiming: "15:25",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "06:40",
    desStation: "KANPUR",
    desDate: "Sat, 22 Mar",
  },
  {
    trainTitle: "MUMBAI EXPRESS",
    deptTiming: "00:25",
    deptStation: "BORIVALI",
    deptDate: "Fri, 14 Mar",
    desTiming: "12:55",
    desStation: "HYDERABAD",
    desDate: "Fri, 21 Mar",
  },
  {
    trainTitle: "JHELUM EXPRESS",
    deptTiming: "18:00",
    deptStation: "BANDRA TERMINUS",
    deptDate: "Fri, 14 Mar",
    desTiming: "08:50",
    desStation: "PUNE",
    desDate: "Sat, 21 Mar",
  },
  {
    trainTitle: "SAMPARK KRANTI EXP",
    deptTiming: "15:30",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "06:45",
    desStation: "CHENNAI",
    desDate: "Tue, 18 Mar",
  },
  {
    trainTitle: "DECCAN QUEEN",
    deptTiming: "13:50",
    deptStation: "BORIVALI",
    deptDate: "Fri, 14 Mar",
    desTiming: "15:00",
    desStation: "BOISAR",
    desDate: "Tue, 25 Mar",
  },
  {
    trainTitle: "KONKAN KANYA EXPRESS",
    deptTiming: "22:00",
    deptStation: "MUMBAI CST",
    deptDate: "Fri, 14 Mar",
    desTiming: "10:30",
    desStation: "MADGAON",
    desDate: "Sat, 22 Mar",
  },
  {
    trainTitle: "PUNJAB MAIL",
    deptTiming: "19:45",
    deptStation: "MUMBAI CST",
    deptDate: "Fri, 14 Mar",
    desTiming: "07:20",
    desStation: "AMRITSAR",
    desDate: "Sun, 30 Mar",
  },
  {
    trainTitle: "HIMAYATNAGAR EXPRESS",
    deptTiming: "16:10",
    deptStation: "DADAR",
    deptDate: "Fri, 14 Mar",
    desTiming: "05:55",
    desStation: "SECUNDERABAD",
    desDate: "Sat, 29 Mar",
  },
  {
    trainTitle: "KARNATAKA EXPRESS",
    deptTiming: "20:30",
    deptStation: "LOKMANYA TILAK TERMINUS",
    deptDate: "Fri, 14 Mar",
    desTiming: "07:45",
    desStation: "BANGALORE",
    desDate: "Sun, 23 Mar",
  },
];

// Function to create a holiday box
function trainListBox(data) {
  const TrainListContainer = document.getElementById("TrainListContainer");

  const box = document.createElement("div");
  box.classList.add("box");
  const part = document.createElement("div");
  part.classList.add("part");

  const trainTitle = document.createElement("div");
  trainTitle.classList.add("trainTitle");
  trainTitle.textContent = data.trainTitle;

  const deptTiming = document.createElement("div");
  deptTiming.classList.add("deptTiming");
  deptTiming.textContent = data.deptTiming;

  const deptStation = document.createElement("div");
  deptStation.classList.add("deptStation");
  deptStation.textContent = data.deptStation;

  const deptDate = document.createElement("div");
  deptDate.classList.add("deptDate");
  deptDate.textContent = data.deptDate;

  const desTiming = document.createElement("div");
  desTiming.classList.add("desTiming");
  desTiming.textContent = data.desTiming;

  const desStation = document.createElement("div");
  desStation.classList.add("desStation");
  desStation.textContent = data.desStation;

  const desDate = document.createElement("div");
  desDate.classList.add("desDate");
  desDate.textContent = data.desDate;

  box.appendChild(trainTitle);
  box.appendChild(part);
  part.appendChild(deptTiming);
  part.appendChild(deptStation);
  part.appendChild(deptDate);
  part.appendChild(desTiming);
  part.appendChild(desStation);
  part.appendChild(desDate);

  TrainListContainer.appendChild(box);
}

// Loop through the holiday data and create holiday boxes
for (const trainList of trainsList) {
  trainListBox(trainList);
}
