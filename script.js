const scheduleData = {
    "A": {
        "Monday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3201" }, { course: "Hist1012", time: "8:50-9:30", room: "CR3201" }],
        "Tuesday": [{ course: "ECEg1052", time: "4:00-4:50", room: "CR3201" }, { course: "MCiE1012", time: "4:55-5:45", room: "CR3201" }, { course: "FLEN1012", time: "8:50-9:30", room: "CR3201" }],
        "Wednesday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3201" }, { course: "EmTe1012", time: "8:50-9:30", room: "CR3201" }],
        "Thursday": [{ course: "Math1041", time: "9:35-11:10", room: "CR3201" }],
        "Friday": [{ course: "EmTe1012", time: "2:10-3:00", room: "CR3201" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3201" }]
    },
    "B": {
        "Monday": [{ course: "EmTe1012", time: "3:05-3:55", room: "CR3202" }, { course: "Math1041", time: "8:50-9:30", room: "CR3202" }],
        "Tuesday": [{ course: "ECEg1052", time: "3:05-3:55", room: "CR3202" }, { course: "Math1041", time: "8:50-10:20", room: "CR3202" }],
        "Wednesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3202" }, { course: "Anth1012", time: "4:00-4:50", room: "CR3202" }, { course: "MCiE1012", time: "8:50-9:30", room: "CR3202" }],
        "Thursday": [{ course: "Hist1012", time: "2:10-3:00", room: "CR3202" }, { course: "FLEN1012", time: "9:35-10:20", room: "CR3202" }],
        "Friday": []
    },
    "C": {
        "Monday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3203" }, { course: "Anth1012", time: "3:05-3:55", room: "CR3203" }, { course: "EmTe1012", time: "9:35-10:20", room: "CR3203" }],
        "Tuesday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3203" }, { course: "Hist1012", time: "8:50-9:30", room: "CR3203" }],
        "Wednesday": [{ course: "EmTe1012", time: "3:05-3:55", room: "CR3203" }, { course: "MCiE1012", time: "9:35-10:20", room: "CR3203" }],
        "Thursday": [{ course: "Math1041", time: "4:00-4:50", room: "CR3203" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3203" }],
        "Friday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3203" }]
    },
    "D": {
        "Monday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3204" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3204" }],
        "Tuesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3204" }, { course: "MCiE1012", time: "3:05-3:55", room: "CR3204" }],
        "Wednesday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3204" }, { course: "EmTe1012", time: "8:50-9:30", room: "CR3204" }],
        "Thursday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3204" }, { course: "Math1041", time: "9:35-11:10", room: "CR3204" }],
        "Friday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3204" }, { course: "EmTe1012", time: "3:05-3:55", room: "CR3204" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3204" }]
    },
    "E": {
        "Monday": [{ course: "ECEg1052", time: "9:35-11:10", room: "CR3205" }],
        "Tuesday": [{ course: "Math1041", time: "3:05-3:55", room: "CR3205" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3205" }],
        "Wednesday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3205" }, { course: "EmTe1012", time: "3:05-3:55", room: "CR3205" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3205" }],
        "Thursday": [{ course: "MCiE1012", time: "2:10-3:00", room: "CR3205" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3205" }],
        "Friday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3205" }, { course: "EmTe1012", time: "9:35-10:20", room: "CR3205" }]
    },
    "F": {
        "Monday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3206" }, { course: "EmTe1012", time: "8:50-10:20", room: "CR3206" }],
        "Tuesday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3206" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3206" }],
        "Wednesday": [{ course: "EmTe1012", time: "2:10-3:55", room: "CR3206" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3206" }],
        "Thursday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3206" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3206" }],
        "Friday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3206" }, { course: "MCiE1012", time: "3:05-3:55", room: "CR3206" }]
    },
    "G": {
        "Monday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3207" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3207" }],
        "Tuesday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3207" }, { course: "EmTe1012", time: "8:50-10:20", room: "CR3207" }],
        "Wednesday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3207" }],
        "Thursday": [{ course: "MCiE1012", time: "2:10-3:00", room: "CR3207" }, { course: "EmTe1012", time: "4:00-4:50", room: "CR3207" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3207" }],
        "Friday": [{ course: "Anth1012", time: "4:00-4:50", room: "CR3207" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3207" }]
    },
    "H": {
        "Monday": [{ course: "EmTe1012", time: "2:10-3:55", room: "CR3208" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3208" }],
        "Tuesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3208" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3208" }],
        "Wednesday": [{ course: "EmTe1012", time: "2:10-3:00", room: "CR3208" }, { course: "Anth1012", time: "4:00-4:50", room: "CR3208" }],
        "Thursday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3208" }, { course: "Math1041", time: "8:50-10:20", room: "CR3208" }],
        "Friday": [{ course: "MCiE1012", time: "2:10-3:00", room: "CR3208" }, { course: "Math1041", time: "3:05-3:55", room: "CR3208" }]
    },
    "I": {
        "Monday": [{ course: "MCiE1012", time: "2:10-3:55", room: "CR3209" }, { course: "Anth1012", time: "8:50-9:30", room: "CR3209" }],
        "Tuesday": [{ course: "EmTe1012", time: "4:00-4:50", room: "CR3209" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3209" }],
        "Wednesday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3209" }, { course: "ECEg1052", time: "9:35-10:20", room: "CR3209" }],
        "Thursday": [{ course: "EmTe1012", time: "3:05-3:55", room: "CR3209" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3209" }],
        "Friday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3209" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3209" }]
    },
    "J": {
        "Monday": [{ course: "EmTe1012", time: "3:05-4:50", room: "CR3210" }, { course: "Math1041", time: "8:50-9:30", room: "CR3210" }],
        "Tuesday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3210" }],
        "Wednesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3210" }, { course: "EmTe1012", time: "4:00-4:50", room: "CR3210" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3210" }],
        "Thursday": [{ course: "Hist1012", time: "2:10-3:55", room: "CR3210" }, { course: "ECEg1052", time: "8:50-10:20", room: "CR3210" }],
        "Friday": [{ course: "Anth1012", time: "2:10-3:55", room: "CR3210" }, { course: "MCiE1012", time: "4:00-4:50", room: "CR3210" }]
    },
    "K": {
        "Monday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3211" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3211" }],
        "Tuesday": [{ course: "EmTe1012", time: "3:05-4:50", room: "CR3211" }, { course: "EmTe1012", time: "7:50-8:40", room: "CR3211" }, { course: "MCiE1012", time: "8:50-9:30", room: "CR3211" }],
        "Wednesday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3211" }, { course: "Math1041", time: "8:50-10:20", room: "CR3211" }],
        "Thursday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3211" }, { course: "ECEg1052", time: "4:00-4:50", room: "CR3211" }],
        "Friday": [{ course: "ECEg1052", time: "2:10-3:55", room: "CR3211" }]
    },
    "L": {
        "Monday": [{ course: "EmTe1012", time: "7:50-8:40", room: "CR3212" }],
        "Tuesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3212" }, { course: "Anth1012", time: "4:00-4:50", room: "CR3212" }, { course: "Math1041", time: "8:50-10:20", room: "CR3212" }],
        "Wednesday": [{ course: "ECEg1052", time: "2:10-3:55", room: "CR3212" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3212" }],
        "Thursday": [{ course: "MCiE1012", time: "2:10-3:00", room: "CR3212" }, { course: "EmTe1012", time: "3:05-3:55", room: "CR3212" }],
        "Friday": [{ course: "Hist1012", time: "2:10-3:55", room: "CR3212" }, { course: "Math1041", time: "8:50-10:20", room: "CR3212" }]
    },
    "M": {
        "Monday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3213" }, { course: "MCiE1012", time: "3:05-3:55", room: "CR3213" }],
        "Tuesday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3213" }, { course: "EmTe1012", time: "4:00-4:50", room: "CR3213" }],
        "Wednesday": [{ course: "FLEN1012", time: "2:10-3:55", room: "CR3213" }, { course: "Hist1012", time: "8:50-10:20", room: "CR3213" }],
        "Thursday": [{ course: "ECEg1052", time: "2:10-3:55", room: "CR3213" }, { course: "EmTe1012", time: "8:50-9:30", room: "CR3213" }],
        "Friday": [{ course: "Math1041", time: "2:10-3:55", room: "CR3213" }, { course: "Anth1012", time: "8:50-9:30", room: "CR3213" }]
    },
    "N": {
        "Monday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3214" }, { course: "Math1041", time: "8:50-9:30", room: "CR3214" }],
        "Tuesday": [{ course: "ECEg1052", time: "2:10-3:00", room: "CR3214" }, { course: "MCiE1012", time: "3:05-3:55", room: "CR3214" }],
        "Wednesday": [{ course: "Anth1012", time: "2:10-3:00", room: "CR3214" }, { course: "EmTe1012", time: "8:50-10:20", room: "CR3214" }],
        "Thursday": [{ course: "Math1041", time: "2:10-3:00", room: "CR3214" }, { course: "EmTe1012", time: "3:05-3:55", room: "CR3214" }],
        "Friday": [{ course: "Hist1012", time: "2:10-3:55", room: "CR3214" }, { course: "FLEN1012", time: "8:50-10:20", room: "CR3214" }]
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
        updateDisplay(btn.innerText);
    });
});

function updateDisplay(day) {
    const display = document.getElementById('scheduleDisplay');
    if (!day) {
        display.innerHTML = `<p class='placeholder-text'>Section ${selectedSection} ተመርጧል። አሁን ቀን ይምረጡ።</p>`;
        return;
    }

    const sessions = scheduleData[selectedSection][day];
    let html = `<h3>Section ${selectedSection} - ${day}</h3>`;

    if (sessions.length === 0) {
        html += `<p class='no-class'>ለዚህ ቀን ምንም ክፍለ ጊዜ የለም።</p>`;
    } else {
        sessions.forEach(s => {
            html += `
                <div class="schedule-item">
                    <div class="course-info">
                        <span class="course-name">${s.course}</span>
                        <span class="room-name">Room: ${s.room}</span>
                    </div>
                    <div class="time-info">${s.time}</div>
                </div>`;
        });
    }
    display.innerHTML = html;
}
