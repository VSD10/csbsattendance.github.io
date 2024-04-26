// List of student names
const studentNames = {
    1:"ARTHI S",
    2:"ADITHIYA D",
    3:"AKKSHETHA M",
    4:"ARAVINDRAJ G",
    5:"ARUNACHALESHWARAN A",
    6:"BANUSRI S",
    7:"BARATHI K",
    8:"BATHRINATH K",
    9:"DEEPAN R",
    10:"DHANUSH K R",
    11:"DHARSHAN V S",
    12:"DIVAKAR T",
    13:"GAYATHRI R",
    14:"GAYATHRI DEVI S",
    15:"GIRIDASS S",
    16:"GOPIKA S",
    17:"GOWMITHA R",
    18:"HARI KRISHNAN V",
    19:"HARSHINI K",
    20:"HEMAPRIYAA S",
    21:"JAYAVARSHAN SS",
    22:"KABILAN S",
    23:"KAMALI S",
    24:"KRISHNAPRASATH B",
    25:"LOGESWARAN P V",
    26:"MADHU VARSHA P",
    27:"MALAVICKA V",
    28:"MANIKANDAN R",
    29:"MOHAMMED RASIQUE S A",
    30:"NAVEEN KUMAR M",
    31:"NIRNAJAN S",
    32:"NITHYA SHREE S",
    33:"PAVITHRA N",
    34:"POJASHREE V",
    35:"PRAGATHI C",
    36:"PREETHIKA S V",
    37:"PRIYADHARSHAN D S",
    38:"RAMANAN A S",
    39:"RAVEENA K",
    40:"RISHWANTH ADISHWAR K",
    41:"SABRANA K",
    42:"SACHIN V",
    43:"SAMIHA M",
    44:"SANJANA S P",
    45:"SASHVINA F",
    46:"SASIDHARAN B",
    47:"SHOBIKA S",
    48:"SHYAM SUNDAR K",
    49:"SRIRAM P",
    50:"SUMITHA S",
    51:"SURENDAR P",
    52:"SWAPNA D P",
    53:"UMA NANDHINI M",
    54:"VAISHNAVI V",
    55:"VASUDEVAN M",
    302:"NAVIN KUMAR M",
    303:"PRADEEP M",
    304:"PRADIBA A S",
    305:"SANTHOSH KUMAR S"
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
Class: II- B.Tech (CSBS)
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
