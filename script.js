// List of student names
const studentNames = {
    1: "ABISHEKNANDHA R",
    2: "AKILESH D",
    3: "ARAVIND R",
    4: "BAVISHRI M",
    5: "BOWSHIK SRI RAM B A",
    6: "DHARSHINI T",
    7: "DINESH A",
    8: "DIVYA DHARSHINI M",
    9: "DIWAKAR A M",
    10: "GIRIDHARAN S",
    11: "GOWREESH R M",
    12: "GOWTHAM S",
    13: "GURUJEETH K R",
    14: "HARIPRIYA E",
    15: "HEMANTH ESWAR C",
    16: "JANANI S",
    17: "JOEL PRINCE H",
    18: "KARTHIK T",
    19: "KARTHIKEYAN K",
    20: "KARTHIKEYAN V",
    21: "KATHIR S N",
    22: "KISHORE M P",
    23: "KRITHIKA B",
    24: "LAVANYA SREE K",
    25: "LAVANYA SRI R A",
    26: "MADHUVARSHINI R V",
    27: "MAHERA FARHEEN F",
    28: "MOHANAPRIYA S",
    29: "MOHANAVEL K S",
    30: "MONIKA S",
    31: "NAGA PRASAD M",
    32: "NARENDAR S",
    33: "NARESH K A",
    34: "NAVEENDRAN A",
    35: "NEERAJA S",
    36: "PAVAMANA A",
    37: "PERARASU P T",
    38: "PHOORNIMA R",
    39: "POOVARASAN K",
    40: "PRATIKSH S",
    41: "PRIYANGA K",
    42: "RATHISH S",
    43: "RAVIVARMAN T",
    44: "RITHIKA M",
    45: "ROHITH D K",
    46: "ROHITH KUMAR L",
    47: "SABU SHRIL B",
    48: "SETTI RAVI KUMAR",
    49: "SHARATH S N",
    50: "SIRANJEEVI A",
    51: "SOWBARNIKA S",
    52: "SUHASINI K V",
    53: "TEENA DEVI S",
    54: "TIRISIGHA R",
    55: "VAIGUNTHAN S L",
    56: "VASANTHKUMAR A",
    57: "VIJAYMANI T",
    58: "VISHAL G",
    59: "VISHAL K",
    60: "YASHA P",
    61: "GNANA SOUNDAR VEL P S",
    62: "MOHAMMED ARSHATH A"
};

let leave = [];
let onDuty = [];
let Late = [];
len=Object.keys(studentNames).length
function recordAttendance(type) {
    if (type === "Leave") {
        document.getElementById("leave-input").style.display = "block";
        document.getElementById("on-duty-input").style.display = "none";
        document.getElementById("LateComers-input").style.display = "none";
    } else if (type === "On-duty") {
        document.getElementById("on-duty-input").style.display = "block";
        document.getElementById("leave-input").style.display = "none";
        document.getElementById("LateComers-input").style.display = "none";
    } else if (type === "LateComers") {
        document.getElementById("LateComers-input").style.display = "block";
        document.getElementById("on-duty-input").style.display = "none";
        document.getElementById("leave-input").style.display = "none";
    }
    
    updateMessage(`Recording ${type}...`);
}

function recordLeave() {
    const input = document.getElementById("leave-input-field").value;
    const indices = input.split(" ").map(Number);
    leave = indices;
    updateMessage(`Leave recorded for indices: ${leave.join(", ")}`);
    document.getElementById("leave-input").style.display = "none";
}

function recordOnDuty() {
    const input = document.getElementById("on-duty-input-field").value;
    const indices = input.split(" ").map(Number);
    onDuty = indices;
    updateMessage(`On Duty recorded for indices: ${onDuty.join(", ")}`);
    document.getElementById("on-duty-input").style.display = "none";  
}

function recordLateComers() {
    const input = document.getElementById("LateComers-input-field").value;
    const indices = input.split(" ").map(Number);
    Late = indices;
    updateMessage(`Late Comers recorded for indices: ${Late.join(", ")}`);
    document.getElementById("LateComers-input").style.display = "none";
}

function printAttendance() {
    const presentCount = len- leave.length;
    const absentCount = leave.length;
    const attendancePercentage = (presentCount / len) * 100;

    const now = new Date();
    let greeting = "Good Morning";
    if (now.getHours() >= 12) {
        greeting = "Good Afternoon";
    }

    let report = `
${greeting} Sir, Today's Attendance

Date: ${now.toLocaleDateString()}
Class: III- B.Tech (CSBS)
Total Strength: ${len}
No. of Present: ${presentCount}
No. of Absent: ${absentCount}
`
if(leave.length>=1)
{
report+="\nAbsentees\n";

    for (let i = 0; i < leave.length; i++) {
        const index = leave[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
}
    if(onDuty.length>=1)
    {
    report += "\nOn-duty Students:\n";
    for (let i = 0; i < onDuty.length; i++) {
        const index = onDuty[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }}
    if(Late.length>=1)
    {
    report += "\nLate Comers:\n";
    for (let i = 0; i < Late.length; i++) {
        const index = Late[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
}
    report += `
Percentage: ${attendancePercentage.toFixed(2)}%

Thank you Sir.`;

    document.getElementById("attendance-report").innerText = report;
}


function updateMessage(message) {
    document.getElementById("message").innerText = message;
}

function copyReport() {
    const reportText = document.getElementById("attendance-report").innerText;
    navigator.clipboard.writeText(reportText);
    alert("Attendance report copied to clipboard!");
}

function shareOnWhatsApp() {
    const reportText = document.getElementById("attendance-report").innerText;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(reportText)}`;
    window.open(whatsappURL, "_blank");
}

function toggleHelp() {
    const helpText = document.getElementById("help-text");
    const leaveInput = document.getElementById("leave-input");
    const onDutyInput = document.getElementById("on-duty-input");
    const LateComersInput = document.getElementById("LateComers-input");

    if (helpText.style.display === "none") {
        helpText.style.display = "block";
        leaveInput.style.display = "none";
        onDutyInput.style.display = "none";
        LateComersInput.style.display = "none";
    } else {
        helpText.style.display = "none";
    }
}
