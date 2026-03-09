const scheduleData = {
  "A": {
    "Monday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3201" }, { c: "Hist1012", t: "8:50-9:30", r: "CR3201" }],
    "Tuesday": [{ c: "FLEN1012", t: "8:50-9:30", r: "CR3201" }],
    "Wednesday": [{ c: "ECEg1052", t: "4:00-4:50", r: "CR3201" }, { c: "MCiE1012", t: "4:55-5:45", r: "CR3201" }, { c: "EmTe1012", t: "8:50-9:30", r: "CR3201" }],
    "Thursday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3201" }, { c: "Math1041", t: "9:35-11:10", r: "CR3201" }],
    "Friday": [{ c: "EmTe1012", t: "2:10-3:00", r: "CR3201" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3201" }]
  },
  "B": {
    "Monday": [{ c: "EmTe1012", t: "3:05-3:55", r: "CR3202" }, { c: "Math1041", t: "8:50-9:30", r: "CR3202" }],
    "Tuesday": [{ c: "ECEg1052", t: "3:05-3:55", r: "CR3202" }, { c: "EmTe1012", t: "8:50-9:30", r: "CR3202" }, { c: "Math1041", t: "9:35-10:20", r: "CR3202" }],
    "Wednesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3202" }, { c: "Math1041", t: "8:50-10:20", r: "CR3202" }],
    "Thursday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3202" }, { c: "MCiE1012", t: "8:50-9:30", r: "CR3202" }],
    "Friday": [{ c: "Hist1012", t: "2:10-3:00", r: "CR3202" }, { c: "FLEN1012", t: "9:35-10:20", r: "CR3202" }]
  },
  "C": {
    "Monday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3203" }, { c: "EmTe1012", t: "9:35-10:20", r: "CR3203" }],
    "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3203" }, { c: "Hist1012", t: "8:50-9:30", r: "CR3203" }],
    "Wednesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3203" }, { c: "EmTe1012", t: "3:05-3:55", r: "CR3203" }, { c: "MCiE1012", t: "9:35-10:20", r: "CR3203" }],
    "Thursday": [{ c: "Math1041", t: "4:00-4:50", r: "CR3203" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3203" }],
    "Friday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3203" }]
  },
  "D": {
    "Monday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3204" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3204" }],
    "Tuesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3204" }, { c: "MCiE1012", t: "3:05-3:55", r: "CR3204" }],
    "Wednesday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3204" }, { c: "EmTe1012", t: "8:50-9:30", r: "CR3204" }],
    "Thursday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3204" }, { c: "Math1041", t: "9:35-11:10", r: "CR3204" }],
    "Friday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3204" }, { c: "EmTe1012", t: "3:05-3:55", r: "CR3204" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3204" }]
  },
  "E": {
    "Monday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3205" }],
    "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3205" }],
    "Wednesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3205" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3205" }],
    "Thursday": [{ c: "Hist1012", t: "8:50-10:20", r: "CR3205" }],
    "Friday": [{ c: "MCiE1012", t: "2:10-3:00", r: "CR3205" }, { c: "EmTe1012", t: "9:35-10:20", r: "CR3205" }]
  },
  "F": {
    "Monday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3206" }, { c: "EmTe1012", t: "8:50-10:20", r: "CR3206" }],
    "Tuesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3206" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3206" }],
    "Wednesday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3206" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3206" }],
    "Thursday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3206" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3206" }],
    "Friday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3206" }, { c: "MCiE1012", t: "3:05-3:55", r: "CR3206" }]
  },
  "G": {
    "Monday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3207" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3207" }],
    "Tuesday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3207" }, { c: "EmTe1012", t: "8:50-10:20", r: "CR3207" }],
    "Wednesday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3207" }],
    "Thursday": [{ c: "MCiE1012", t: "2:10-3:00", r: "CR3207" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3207" }],
    "Friday": [{ c: "Anth1012", t: "4:00-4:50", r: "CR3207" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3207" }]
  },
  "H": {
    "Monday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3208" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3208" }],
    "Tuesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3208" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3208" }],
    "Wednesday": [{ c: "Anth1012", t: "4:00-4:50", r: "CR3208" }],
    "Thursday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3208" }, { c: "Math1041", t: "8:50-10:20", r: "CR3208" }],
    "Friday": [{ c: "MCiE1012", t: "2:10-3:00", r: "CR3208" }, { c: "Math1041", t: "3:05-3:55", r: "CR3208" }]
  },
  "I": {
    "Monday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3209" }, { c: "Anth1012", t: "8:50-9:30", r: "CR3209" }],
    "Tuesday": [{ c: "EmTe1012", t: "4:00-4:50", r: "CR3209" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3209" }],
    "Wednesday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3209" }, { c: "ECEg1052", t: "9:35-10:20", r: "CR3209" }],
    "Thursday": [{ c: "EmTe1012", t: "3:05-3:55", r: "CR3209" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3209" }],
    "Friday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3209" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3209" }]
  },
  "J": {
    "Monday": [{ c: "EmTe1012", t: "3:05-4:50", r: "CR3210" }, { c: "Math1041", t: "8:50-9:30", r: "CR3210" }],
    "Tuesday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3210" }],
    "Wednesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3210" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3210" }],
    "Thursday": [{ c: "Hist1012", t: "2:10-3:55", r: "CR3210" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3210" }],
    "Friday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3210" }, { c: "MCiE1012", t: "4:00-4:50", r: "CR3210" }]
  },
  "K": {
    "Monday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3211" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3211" }],
    "Tuesday": [{ c: "EmTe1012", t: "3:05-4:50", r: "CR3211" }, { c: "MCiE1012", t: "8:50-9:30", r: "CR3211" }],
    "Wednesday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3211" }, { c: "Math1041", t: "8:50-10:20", r: "CR3211" }],
    "Thursday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3211" }, { c: "ECEg1052", t: "4:00-4:50", r: "CR3211" }],
    "Friday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3211" }]
  },
  "L": {
    "Monday": [{ c: "MCiE1012", t: "2:10-3:00", r: "CR3212" }, { c: "EmTe1012", t: "3:05-3:55", r: "CR3212" }],
    "Tuesday": [{ c: "EmTe1012", t: "8:50-10:20", r: "CR3212" }],
    "Wednesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3212" }, { c: "Math1041", t: "8:50-10:20", r: "CR3212" }],
    "Thursday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3212" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3212" }],
    "Friday": [{ c: "Hist1012", t: "2:10-3:55", r: "CR3212" }, { c: "Math1041", t: "8:50-10:20", r: "CR3212" }]
  },
  "M": {
    "Monday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3213" }, { c: "MCiE1012", t: "3:05-3:55", r: "CR3213" }],
    "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3213" }],
    "Wednesday": [{ c: "FLEN1012", t: "2:10-3:55", r: "CR3213" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3213" }],
    "Thursday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3213" }, { c: "EmTe1012", t: "8:50-9:30", r: "CR3213" }],
    "Friday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3213" }, { c: "Anth1012", t: "8:50-9:30", r: "CR3213" }]
  },
  "N": {
    "Monday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3214" }, { c: "Math1041", t: "8:50-9:30", r: "CR3214" }],
    "Tuesday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3214" }, { c: "MCiE1012", t: "3:05-3:55", r: "CR3214" }],
    "Wednesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3214" }, { c: "EmTe1012", t: "8:50-10:20", r: "CR3214" }],
    "Thursday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3214" }, { c: "EmTe1012", t: "3:05-3:55", r: "CR3214" }],
    "Friday": [{ c: "Hist1012", t: "2:10-3:55", r: "CR3214" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3214" }]
  }
};

let selectedSection = "";

document.getElementById('sectionSelect').addEventListener('change', (e) => {
    selectedSection = e.target.value;
    updateDisplay("");
});

document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!selectedSection) {
            alert("እባክዎን መጀመሪያ ሴክሽን ይምረጡ!");
            return;
        }
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateDisplay(btn.innerText);
    });
});

function updateDisplay(day) {
    const display = document.getElementById('scheduleDisplay');
    if (!day) {
        display.innerHTML = `<p class='placeholder-text'>Section ${selectedSection} ተመርጧል። አሁን ቀን ይምረጡ።</p>`;
        return;
    }

    const sessions = scheduleData[selectedSection] ? scheduleData[selectedSection][day] : [];
    let html = `<h3>Section ${selectedSection} - ${day}</h3>`;

    if (!sessions || sessions.length === 0) {
        html += `<p class='placeholder-text'>ለዚህ ቀን ክፍለ ጊዜ የለም።</p>`;
    } else {
        sessions.forEach(s => {
            html += `
                <div class="schedule-item">
                    <div class="course-info">
                        <span class="course-name">${s.c}</span><br>
                        <span class="room-name">Room
