// KIOT Freshman Sections A-N Schedule Data
const scheduleData = {
    "A": { "Monday": "Math1041 (8:00-9:45) CR3201", "Tuesday": "ECEg1052 (10:00-11:45)", "Wednesday": "EmTe1012 (2:10-3:55)", "Thursday": "Anth1012 (8:00-9:45)", "Friday": "Hist1012 (8:00-9:45)" },
    "B": { "Monday": "EmTe1012 (8:00-9:45) CR3202", "Tuesday": "Math1041 (10:00-11:45)", "Wednesday": "ECEg1052 (8:00-9:45)", "Thursday": "MCiE1012 (2:10-3:55)", "Friday": "FLEN1012 (2:10-3:55)" },
    "C": { "Monday": "ECEg1052 (8:00-9:45) CR3203", "Tuesday": "Math1041 (8:00-9:45)", "Wednesday": "EmTe1012 (8:00-9:45)", "Thursday": "Math1041 (2:10-3:55)", "Friday": "FLEN1012 (8:00-9:45)" },
    "D": { "Monday": "Math1041 (8:00-9:45) CR3204", "Tuesday": "MCiE1012 (10:00-11:45)", "Wednesday": "FLEN1012 (8:00-9:45)", "Thursday": "Math1041 (2:10-3:55)", "Friday": "Anth1012 (8:00-9:45)" },
    "E": { "Monday": "ECEg1052 (2:10-3:55) CR3205", "Tuesday": "Math1041 (8:00-9:45)", "Wednesday": "EmTe1012 (10:00-11:45)", "Thursday": "Hist1012 (2:10-3:55)", "Friday": "Math1041 (8:00-9:45)" },
    "F": { "Monday": "Math1041 (8:00-9:45) CR3206", "Tuesday": "Hist1012 (2:10-3:55)", "Wednesday": "EmTe1012 (8:00-9:45)", "Thursday": "Math1041 (2:10-3:55)", "Friday": "ECEg1052 (8:00-9:45)" },
    "G": { "Monday": "Math1041 (8:00-9:45) CR3207", "Tuesday": "EmTe1012 (2:10-3:55)", "Wednesday": "FLEN1012 (10:00-11:45)", "Thursday": "MCiE1012 (8:00-9:45)", "Friday": "Anth1012 (2:10-3:55)" },
    "H": { "Monday": "EmTe1012 (8:00-9:45) CR3208", "Tuesday": "Hist1012 (2:10-3:55)", "Wednesday": "Anth1012 (10:00-11:45)", "Thursday": "Math1041 (2:10-3:55)", "Friday": "MCiE1012 (8:00-9:45)" },
    "I": { "Monday": "MCiE1012 (8:00-9:45) CR3209", "Tuesday": "EmTe1012 (10:00-11:45)", "Wednesday": "Math1041 (8:00-9:45)", "Thursday": "Hist1012 (2:10-3:55)", "Friday": "FLEN1012 (2:10-3:55)" },
    "J": { "Monday": "EmTe1012 (8:00-9:45) CR3210", "Tuesday": "Math1041 (2:10-3:55)", "Wednesday": "FLEN1012 (2:10-3:55)", "Thursday": "Hist1012 (2:10-3:55)", "Friday": "Anth1012 (8:00-9:45)" },
    "K": { "Monday": "Hist1012 (2:10-3:55) CR3211", "Tuesday": "EmTe1012 (8:00-9:45)", "Wednesday": "Math1041 (2:10-3:55)", "Thursday": "ECEg1052 (10:00-11:45)", "Friday": "ECEg1052 (8:00-9:45)" },
    "L": { "Monday": "EmTe1012 (2:10-3:55) CR3212", "Tuesday": "Math1041 (2:10-3:55)", "Wednesday": "ECEg1052 (8:00-9:45)", "Thursday": "MCiE1012 (8:00-9:45)", "Friday": "Hist1012 (8:00-9:45)" },
    "M": { "Monday": "ECEg1052 (8:00-9:45) CR3213", "Tuesday": "Math1041 (8:00-9:45)", "Wednesday": "Hist1012 (2:10-3:55)", "Thursday": "EmTe1012 (2:10-3:55)", "Friday": "Math1041 (8:00-9:45)" },
    "N": { "Monday": "Math1041 (2:10-3:55) CR3214", "Tuesday": "MCiE1012 (10:00-11:45)", "Wednesday": "EmTe1012 (2:10-3:55)", "Thursday": "Math1041 (8:00-9:45)", "Friday": "Hist1012 (8:00-9:45)" }
};

const sectionSelect = document.getElementById('sectionSelect');
const dayButtons = document.querySelectorAll('.day-btn');
const displayArea = document.getElementById('scheduleDisplay');
let selectedDay = "";

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        dayButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedDay = button.innerText;
        showSchedule();
    });
});

sectionSelect.addEventListener('change', showSchedule);

function showSchedule() {
    const section = sectionSelect.value;
    if (section && selectedDay) {
        const result = scheduleData[section] && scheduleData[section][selectedDay] 
            ? scheduleData[section][selectedDay] 
            : "ምንም የትምህርት ፕሮግራም የለም።";
        displayArea.innerHTML = `<div class="card"><h3>Section ${section} - ${selectedDay}</h3><p>${result}</p></div>`;
    }
}
