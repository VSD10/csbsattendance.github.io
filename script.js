// List of student names
const studentNames = [
           "demo",
                    "ARTHI S",
    "ADITHIYA D",
    "AKKSHETHA M",
    "ARAVINDRAJ G",
    "ARUNACHALESHWARAN A",
    "BANUSRI S",
    "BARATHI K",
    "BATHRINATH K",
    "DEEPAN R",
    "DHANUSH K R",
    "DHARSHAN V S",
    "DIVAKAR T",
    "GAYATHRI R",
    "GAYATHRI DEVI S",
    "GIRIDASS S",
    "GOPIKA S",
    "GOWMITHA R",
    "HARI KRISHNAN V",
    "HARSHINI K",
    "HEMAPRIYAA S",
    "JAYAVARSHAN SS",
    "KABILAN S",
    "KAMALI S",
    "KRISHNAPRASATH B",
    "LOGESWARAN P V",
    "MADHU VARSHA P",
    "MALAVICKA V",
    "MANIKANDAN R",
    "MOHAMMED RASIQUE S A",
    "NAVEEN KUMAR M",
    "NIRNAJAN S",
    "NITHYA SHREE S",
    "PAVITHRA N",
    "POJASHREE V",
    "PRAGATHI C",
    "PREETHIKA S V",
    "PRIYADHARSHAN D S",
    "RAMANAN A S",
    "RAVEENA K",
    "RISHWANTH ADISHWAR K",
    "SABRANA K",
    "SACHIN V",
    "SAMIHA M",
    "SANJANA S P",
    "SASHVINA F",
    "SASIDHARAN B",
    "SHOBIKA S",
    "SHYAM SUNDAR K",
    "SRIRAM P",
    "SUMITHA S",
    "SURENDAR P",
    "SWAPNA D P",
    "UMA NANDHINI M",
    "VAISHNAVI V",
    "VASUDEVAN M",
    "NAVIN KUMAR M",
    "PRADEEP M",
    "PRADIBA A S",
    "SANTHOSH KUMAR S"
];

let leave = [];
let onDuty = [];
let Late = [];

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
    leave = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`Leave recorded for indices: ${leave.join(", ")}`);
    document.getElementById("leave-input").style.display = "none";
}

function recordOnDuty() {
    const input = document.getElementById("on-duty-input-field").value;
    const indices = input.split(" ").map(Number);
    onDuty = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`On Duty recorded for indices: ${onDuty.join(", ")}`);
    document.getElementById("on-duty-input").style.display = "none";  
}

function recordLateComers() {
    const input = document.getElementById("LateComers-input-field").value;
    const indices = input.split(" ").map(Number);
    Late = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`Late Comers recorded for indices: ${Late.join(", ")}`);
    document.getElementById("LateComers-input").style.display = "none";
}

function printAttendance() {
    const presentCount = studentNames.length - leave.length;
    const absentCount = leave.length;
    const attendancePercentage = (presentCount / studentNames.length) * 100;

    const now = new Date();
    let greeting = "Good Morning";
    if (now.getHours() >= 12) {
        greeting = "Good Afternoon";
    }

    let report = `
${greeting} Sir, Today's Attendance

Date: ${now.toLocaleDateString()}
Class: II- B.Tech (CSBS)
Total Strength: ${studentNames.length}
No. of Present: ${presentCount}
No. of Absent: ${absentCount}
`
if(leave.length>=1)
{
Absentees:
;

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
