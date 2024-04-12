// List of student names
const studentNames = [
           "demo",
                    "ARTHI S",
    "ADITHIYA D",
    "AKKSHETHA M",
    "ARAVINDRAJ G",
    "ARUNACHALESHWARAN A",
    "ANUSRI S",
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

function recordAttendance(type) {
    if (type === "Leave") {
        document.getElementById("leave-input").style.display = "block";
        document.getElementById("on-duty-input").style.display = "none";
    } else if (type === "On-duty") {
        document.getElementById("on-duty-input").style.display = "block";
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
     // Call printAttendance after updating leave
}

function recordOnDuty() {
    const input = document.getElementById("on-duty-input-field").value;
    const indices = input.split(" ").map(Number);
    onDuty = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`On Duty recorded for indices: ${onDuty.join(", ")}`);
    document.getElementById("on-duty-input").style.display = "none";  
}

function printAttendance() {
    const presentCount = studentNames.length-1 - leave.length;
    const absentCount = leave.length;
    const attendancePercentage = (presentCount / (studentNames.length-1)) * 100;

    let report = `
Good Morning Sir, Today's Attendance

Date: ${new Date().toLocaleDateString()}
Class: II- B.Tech (CSBS)
Total Strength: ${studentNames.length-1}
No. of Present: ${presentCount}
No. of Absent: ${absentCount}

Absentees:
`;
    for (let i = 0; i < leave.length; i++) {
        const index = leave[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
    report += "\nOn-duty Students:\n";
    for (let i = 0; i < onDuty.length; i++) {
        const index = onDuty[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
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
