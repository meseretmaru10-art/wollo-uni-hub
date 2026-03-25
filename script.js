const scheduleData = {
    "A": {
        "Monday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3201" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3201" }],
        "Tuesday": [{ c: "FLEN1012", t: "8:50-11:10", r: "CR3201" }],
        "Wednesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3201" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3201" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3201" }],
        "Thursday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3201" }, { c: "Math1041", t: "9:30-11:10", r: "CR3201" }],
        "Friday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3201" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3201" }]
    },
    "B": {
        "Monday": [{ c: "EmTe1012", t: "2:10-4:50", r: "CR3202" }, { c: "Math1041", t: "8:50-11:10", r: "CR3202" }],
        "Tuesday": [{ c: "ECEg1052", t: "2:10-4:50", r: "CR3202" }, { c: "EmTe1012", t: "7:50-8:40", r: "CR3202" }, { c: "Math1041", t: "9:30-11:10", r: "CR3202" }],
        "Wednesday": [{ c: "Free", t: "2:10-3:55", r: "-" }],
        "Thursday": [{ c: "ECEg", t: "2:10-3:55", r: "CR3202" }, { c: "Anth1012", t: "4:00-5:45", r: "CR3202" }, { c: "MCiE1012", t: "8:50-10:20", r: "CR3202" }],
        "Friday": [{ c: "Hist1012", t: "2:10-4:50", r: "CR3202" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3202" }]
    },
    "C": {
        "Monday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3203" }, { c: "Anth1012", t: "4:00-5:45", r: "CR3203" }, { c: "EmTe1012", t: "9:30-11:10", r: "CR3203" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3203" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3203" }],
        "Wednesday": [{ c: "EmTe1012", t: "2:10-4:50", r: "CR3203" }, { c: "MCiE1012", t: "8:50-11:10", r: "CR3235" }],
        "Thursday": [{ c: "Math1041", t: "4:00-5:45", r: "CR3203" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3203" }],
        "Friday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3235" }]
    },
    "D": {
        "Monday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3204" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3204" }],
        "Tuesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3204" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3204" }],
        "Wednesday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3204" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3204" }],
        "Thursday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3204" }, { c: "Math1041", t: "9:30-11:10", r: "CR3204" }],
        "Friday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3204" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3204" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3204" }]
    },
    "E": {
        "Monday": [{ c: "ECEg1052", t: "9:30-11:10", r: "CR3205" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3205" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3205" }],
        "Wednesday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3205" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3205" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3205" }],
        "Thursday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3205" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3205" }],
        "Friday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3205" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3205" }]
    },
    "F": {
        "Monday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3206" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3206" }],
        "Tuesday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3206" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3206" }],
        "Wednesday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3206" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3206" }],
        "Thursday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3206" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3206" }],
        "Friday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3206" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3206" }]
    },
    "G": {
        "Monday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3207" }, { c: "EC", t: "8:50-10:20", r: "CR3207" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3207" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3207" }],
        "Wednesday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3207" }],
        "Thursday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3207" },{ c: "EmTe1012", t: "4:00-5:45", r: "CR3207" },{ c: "ECEg1052", t: "8:50-11:10", r: "CR3207" }],
        "Friday": [{ c: "Anth1012", t: "4:00-5:45", r: "CR3207" },{ c: "Hist1012", t: "8:50-11:10", r: "CR3207" }]
    },
    "H": {
        "Monday": [{ c: "EmTe1012", t: "2:10-4:50", r: "CR3208" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3208" }],
        "Tuesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3208" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3208" }],
        "Wednesday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3208" }, { c: "Anth1012", t: "4:00-5:45", r: "CR3208" }],
        "Thursday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3208" }, { c: "Math1041", t: "8:50-11:10", r: "CR3208" }],
        "Friday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3208" }, { c: "Math1041", t: "4:00-5:45", r: "CR3208" }]
    },
    "I": {
        "Monday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3209" }, { c: "Anth1012", t: "8:50-10:20", r: "CR3209" }],
        "Tuesday": [{ c: "EmTe1012", t: "4:00-5:45", r: "CR3209" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3209" }],
        "Wednesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3209" }, { c: "ECEg1052", t: "9:30-11:10", r: "CR3209" }],
        "Thursday": [{ c: "EmTe1012", t: "2:10-4:50", r: "CR3209" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3209" }],
        "Friday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3209" }, { c: "FLEN1012", t: "8:50-11:20", r: "CR3209" }]
    },
    "J": {
        "Monday": [{ c: "EmTe1012", t: "2:10-4:50", r: "CR3210" }, { c: "Math1041", t: "8:50-11:10", r: "CR3210" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3210" }],
        "Wednesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3210" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3210" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3210" }],
        "Thursday": [{ c: "Hist1012", t: "2:10-4:50", r: "CR3210" }, { c: "ECEg1052", t: "8:50-11:10", r: "CR3210" }],
        "Friday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3210" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3210" }]
    },
    "K": {
        "Monday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3211" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3211" }],
        "Tuesday": [{ c: "EmTe1012", t: "2:10-5:45", r: "CR3211" }, { c: "EmTe1012", t: "7:50-9:30", r: "CR3211" }, { c: "EmTe1012", t: "9:30-11:10", r: "CR3211" }],
        "Wednesday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3211" }, { c: "Math1041", t: "8:50-11:10", r: "CR3211" }],
        "Thursday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3211" }, { c: "ECEg1052", t: "4:00-5:45", r: "CR3211" }],
        "Friday": [{ c: "ECEg1052", t: "2:10-4:50", r: "CR3211" }]
    },
    "L": {
        "Monday": [ { c: "EmTe1012", t: "7:50-10:20", r: "CR3212" }],
        "Tuesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3212" }, { c: "Anth1012", t: "4:00-5:45", r: "CR3212" }, { c: "Anth1012", t: "8:50-10:20", r: "CR3212" }],
        "Wednesday": [{ c: "ECEg1052", t: "2:10-4:50", r: "CR3212" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3212" }],
        "Thursday": [{ c: "MCiE1012", t: "2:10-3:55", r: "CR3212" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3212" }],
        "Friday": [{ c: "Hist1012", t: "2:10-4:50", r: "CR3212" }, { c: "Math1041", t: "8:50-11:10", r: "CR3212" }]
    },
    "M": {
        "Monday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3213" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3213" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3213" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3136" }],
        "Wednesday": [{ c: "FLEN1012", t: "2:10-4:50", r: "CR3213" }, { c: "Hist1012", t: "8:50-11:10", r: "CR3213" }],
        "Thursday": [{ c: "ECEg1052", t: "2:10-4:50", r: "CR3213" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3213" }],
        "Friday": [{ c: "Math1041", t: "2:10-4:50", r: "CR3213" }, { c: "Anth1012", t: "8:50-10:20", r: "CR3213" }]
    },
    "N": {
        "Monday": [{ c: "ECEg1052", t: "2:10-4:50", r: "CR3214" }, { c: "Math1041", t: "8:50-10:20", r: "CR3214" }],
        "Tuesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3214" }, { c: "MCiE1012", t: "4:00-5:45", r: "CR3214" }],
        "Wednesday": [{ c: "Anth1012", t: "2:10-3:55", r: "CR3214" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3137" }],
        "Thursday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3214" }, { c: "EmTe1012", t: "4:00-5:45", r: "CR3137" }],
        "Friday": [{ c: "Hist1012", t: "2:10-4:50", r: "CR3214" }, { c: "FLEN1012", t: "8:50-11:10", r: "CR3214" }]
    }
};

function showSchedule(day) {
    const section = document.getElementById('sectionSelect').value;
    const title = document.getElementById('displayTitle');
    const text = document.getElementById('displayText');
    const display = document.getElementById('scheduleDisplay');
    
    // ሴክሽን መመረጡን ማረጋገጥ
    if (!section) {
        alert("እባክዎን መጀመሪያ ሴክሽን ይምረጡ!");
        return;
    }

    const data = scheduleData[section][day];
    
    // ርዕሱን ማስተካከል
    if(title) title.innerText = `Section ${section} - ${day}`;
    
    // ዳታውን ፈልጎ ማውጣት
    if (data && data.length > 0) {
        let listHtml = "<div style='text-align: left; padding: 10px;'>";
        data.forEach(item => {
            listHtml += `
                <div class="schedule-item" style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #ddd;">
                    <p style="margin: 0;"><strong>📚 Course:</strong> ${item.c}</p>
                    <p style="margin: 4px 0; color: #555;"><strong>🕒 Time:</strong> ${item.t}</p>
                    <p style="margin: 0; color: #2196F3;"><strong>📍 Room:</strong> ${item.r}</p>
                </div>`;
        });
        listHtml += "</div>";
        if(text) text.innerHTML = listHtml;
        else display.innerHTML = `<h3>Section ${section} - ${day}</h3>${listHtml}`;
    } else {
        const noDataMsg = "<p style='padding: 20px;'>ለዚህ ቀን ምንም ክፍለ ጊዜ የለም (Free Time)።</p>";
        if(text) text.innerHTML = noDataMsg;
        else display.innerHTML = `<h3>Section ${section} - ${day}</h3>${noDataMsg}`;
    }
}

// ሴክሽን ሲቀየር ውጤቱ እንዲጠፋ የሚያደርግ
function resetDisplay() {
    const title = document.getElementById('displayTitle');
    const text = document.getElementById('displayText');
    if(title) title.innerText = "Section - Day";
    if(text) text.innerText = "ቀን በመምረጥ ፕሮግራሙን ይመልከቱ።";
}
