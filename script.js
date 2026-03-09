const scheduleData = {
    "A": {
        "Monday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3201" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3201" }],
        "Tuesday": [{ c: "FLEN1012", t: "8:50-10:20", r: "CR3201" }],
        "Wednesday": [{ c: "ECEg1052", t: "2:10-3:55", r: "CR3201" }, { c: "EmTe1012", t: "8:50-10:20", r: "CR3201" }],
        "Thursday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3201" }, { c: "Math1041", t: "8:50-11:10", r: "CR3201" }],
        "Friday": [{ c: "EmTe1012", t: "2:10-3:00", r: "CR3201" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3201" }]
    },
    "E": {
        "Monday": [{ c: "ECEg1052", t: "8:50-11:10", r: "CR3205" }],
        "Tuesday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3205" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3205" }],
        "Wednesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3205" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3205" }],
        "Thursday": [{ c: "MCiE1012", t: "2:10-3:00", r: "CR3205" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3205" }],
        "Friday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3205" }, { c: "EmTe1012", t: "8:50-11:10", r: "CR3205" }]
    },
    "F": {
        "Monday": [{ c: "Math1041", t: "2:10-3:55", r: "CR3206" }, { c: "EmTe1012", t: "8:50-10:20", r: "CR3206" }],
        "Tuesday": [{ c: "Anth1012", t: "2:10-3:00", r: "CR3206" }, { c: "Hist1012", t: "8:50-10:20", r: "CR3206" }],
        "Wednesday": [{ c: "EmTe1012", t: "2:10-3:55", r: "CR3206" }, { c: "ECEg1052", t: "8:50-10:20", r: "CR3206" }],
        "Thursday": [{ c: "Math1041", t: "2:10-3:00", r: "CR3206" }, { c: "FLEN1012", t: "8:50-10:20", r: "CR3206" }],
        "Friday": [{ c: "ECEg1052", t: "2:10-3:00", r: "CR3206" }, { c: "MCiE1012", t: "3:05-3:55", r: "CR3206" }]
    }
};

let currentSection = "";

document.getElementById('sectionSelect').addEventListener('change', (e) => {
    currentSection = e.target.value;
    document.getElementById('scheduleDisplay').innerHTML = `
        <div class="initial-msg">
            <h3 style="color:#2196F3;">Section ${currentSection}</h3>
            <p>ቀን በመምረጥ ፕሮግራሙን ይመልከቱ።</p>
        </div>`;
});

document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!currentSection) { alert("እባክዎን መጀመሪያ ሴክሽን ይምረጡ!"); return; }
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const day = btn.innerText;
        const sessions = scheduleData[currentSection] ? scheduleData[currentSection][day] : [];
        let html = `<h3 style="color:#2196F3; text-align:center; border-bottom:1px solid #eee; padding-bottom:10px;">Section ${currentSection} - ${day}</h3>`;
        
        if (sessions.length === 0) {
            html += `<p style="text-align:center; color:#888; margin-top:30px;">ለዚህ ቀን ዳታ አልተመዘገበም</p>`;
        } else {
            sessions.forEach(s => {
                html += `
                <div class="schedule-item">
                    <div><span class="course-name">${s.c}</span><span class="room-name">Room: ${s.r}</span></div>
                    <div class="time-tag">${s.t}</div>
                </div>`;
            });
        }
        document.getElementById('scheduleDisplay').innerHTML = html;
    });
});
