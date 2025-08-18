// All 83 village-level knockout fixtures for netball
const fixtures = [
    // Namungalwe Sub-County (16 matches)
    { matchNo: "V1", date: "Sep 6, 2025", time: "10:00 AM", homeTeam: "Namungalwe A", awayTeam: "Namungalwe B", venue: "Namungalwe Court", subCounty: "Namungalwe" },
    { matchNo: "V2", date: "Sep 7, 2025", time: "2:00 PM", homeTeam: "Winner V1", awayTeam: "Namungalwe", venue: "Namungalwe Court", subCounty: "Namungalwe" },
    { matchNo: "V3", date: "Sep 6, 2025", time: "10:00 AM", homeTeam: "Bulumwaki 1", awayTeam: "Bulumwaki 2", venue: "Bulumwaki Court", subCounty: "Namungalwe" },
    { matchNo: "V4", date: "Sep 6, 2025", time: "2:00 PM", homeTeam: "Bulanga", awayTeam: "Mwendanfuko", venue: "Mwendanfuko Court", subCounty: "Namungalwe" },
    { matchNo: "V5", date: "Sep 6, 2025", time: "10:00 AM", homeTeam: "Bukoona", awayTeam: "Bulanga", venue: "Namunkanaga Court", subCounty: "Namungalwe" },
    { matchNo: "V6", date: "Sep 6, 2025", time: "2:00 PM", homeTeam: "Namunkanaga A", awayTeam: "Namunkanaga B", venue: "Namunkanaga Court", subCounty: "Namungalwe" },
    { matchNo: "V7", date: "Sep 7, 2025", time: "4:00 PM", homeTeam: "Winner V5", awayTeam: "Winner V6", venue: "Namunkanaga Court", subCounty: "Namungalwe" },
    { matchNo: "V8", date: "Sep 13, 2025", time: "10:00 AM", homeTeam: "Bubogo A", awayTeam: "Bubogo B", venue: "Namunkesu Court", subCounty: "Namungalwe" },
    { matchNo: "V9", date: "Sep 13, 2025", time: "2:00 PM", homeTeam: "Nabikoote", awayTeam: "Namufuma", venue: "Namunkesu Court", subCounty: "Namungalwe" },
    { matchNo: "V10", date: "Sep 14, 2025", time: "10:00 AM", homeTeam: "Winner V8", awayTeam: "Namunkesu", venue: "Namunkesu Court", subCounty: "Namungalwe" },
    { matchNo: "V11", date: "Sep 14, 2025", time: "2:00 PM", homeTeam: "Winner V9", awayTeam: "Winner V10", venue: "Namunkesu Court", subCounty: "Namungalwe" },
    { matchNo: "V12", date: "Sep 13, 2025", time: "10:00 AM", homeTeam: "Bufuutula", awayTeam: "Namufuma", venue: "Namunsala Court", subCounty: "Namungalwe" },
    { matchNo: "V13", date: "Sep 13, 2025", time: "2:00 PM", homeTeam: "Nawansega", awayTeam: "Nawansega A", venue: "Namunsala Court", subCounty: "Namungalwe" },
    { matchNo: "V14", date: "Sep 14, 2025", time: "10:00 AM", homeTeam: "Winner V12", awayTeam: "Nawansega B", venue: "Namunsala Court", subCounty: "Namungalwe" },
    { matchNo: "V15", date: "Sep 14, 2025", time: "2:00 PM", homeTeam: "Winner V13", awayTeam: "Winner V14", venue: "Namunsala Court", subCounty: "Namungalwe" },
    { matchNo: "V16", date: "Sep 6, 2025", time: "-", homeTeam: "Nawansega", awayTeam: "(Advances)", venue: "Nawansega Court", subCounty: "Namungalwe" },
    // Nabitende Sub-County (35 matches)
    { matchNo: "V17", date: "Sep 6, 2025", time: "10:00 AM", homeTeam: "Bugono A", awayTeam: "Bugono B", venue: "Bugono Court", subCounty: "Nabitende" },
    { matchNo: "V18", date: "Sep 6, 2025", time: "2:00 PM", homeTeam: "Nabinyonyi A", awayTeam: "Nabinyonyi B", venue: "Bugono Court", subCounty: "Nabitende" },
    { matchNo: "V19", date: "Sep 7, 2025", time: "4:00 PM", homeTeam: "Winner V17", awayTeam: "Winner V18", venue: "Bugono Court", subCounty: "Nabitende" },
    { matchNo: "V20", date: "Sep 13, 2025", time: "10:00 AM", homeTeam: "Buvule A", awayTeam: "Buvule B", venue: "Itanda Court", subCounty: "Nabitende" },
    { matchNo: "V21", date: "Sep 13, 2025", time: "2:00 PM", homeTeam: "Buweira A", awayTeam: "Buweira B", venue: "Itanda Court", subCounty: "Nabitende" },
    { matchNo: "V22", date: "Sep 13, 2025", time: "4:00 PM", homeTeam: "Kinu A", awayTeam: "Kinu B", venue: "Itanda Court", subCounty: "Nabitende" },
    { matchNo: "V23", date: "Sep 14, 2025", time: "10:00 AM", homeTeam: "Winner V20", awayTeam: "Winner V21", venue: "Itanda Court", subCounty: "Nabitende" },
    { matchNo: "V24", date: "Sep 14, 2025", time: "2:00 PM", homeTeam: "Winner V22", awayTeam: "Winner V23", venue: "Itanda Court", subCounty: "Nabitende" },
    { matchNo: "V25", date: "Sep 20, 2025", time: "10:00 AM", homeTeam: "Buliganwa A", awayTeam: "Buliganwa B", venue: "Ituba Court", subCounty: "Nabitende" },
    { matchNo: "V26", date: "Sep 20, 2025", time: "2:00 PM", homeTeam: "Ituba A", awayTeam: "Ituba B", venue: "Ituba Court", subCounty: "Nabitende" },
    { matchNo: "V27", date: "Sep 20, 2025", time: "4:00 PM", homeTeam: "Kabira A", awayTeam: "Kabira B", venue: "Ituba Court", subCounty: "Nabitende" },
    { matchNo: "V28", date: "Sep 21, 2025", time: "10:00 AM", homeTeam: "Winner V25", awayTeam: "Winner V26", venue: "Ituba Court", subCounty: "Nabitende" },
    { matchNo: "V29", date: "Sep 21, 2025", time: "2:00 PM", homeTeam: "Winner V27", awayTeam: "Winner V28", venue: "Ituba Court", subCounty: "Nabitende" },
    { matchNo: "V30", date: "Sep 20, 2025", time: "10:00 AM", homeTeam: "Buwerempe", awayTeam: "Kisambika I", venue: "Kasambika Court", subCounty: "Nabitende" },
    { matchNo: "V31", date: "Sep 20, 2025", time: "2:00 PM", homeTeam: "Kisambika II", awayTeam: "Namusiisi A", venue: "Kasambika Court", subCounty: "Nabitende" },
    { matchNo: "V32", date: "Sep 21, 2025", time: "10:00 AM", homeTeam: "Winner V30", awayTeam: "Namusiisi B", venue: "Kasambika Court", subCounty: "Nabitende" },
    { matchNo: "V33", date: "Sep 21, 2025", time: "2:00 PM", homeTeam: "Winner V31", awayTeam: "Winner V32", venue: "Kasambika Court", subCounty: "Nabitende" },
    { matchNo: "V34", date: "Sep 27, 2025", time: "10:00 AM", homeTeam: "Bubeko", awayTeam: "Butabala", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V35", date: "Sep 27, 2025", time: "2:00 PM", homeTeam: "Kabira", awayTeam: "Kalungami A-A", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V36", date: "Sep 27, 2025", time: "4:00 PM", homeTeam: "Kalungami A-B", awayTeam: "Kalungami B-A", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V37", date: "Sep 28, 2025", time: "10:00 AM", homeTeam: "Kalungami B-B", awayTeam: "Kasanvu A", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V38", date: "Sep 28, 2025", time: "2:00 PM", homeTeam: "Kasanvu B", awayTeam: "Kisoko A", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V39", date: "Sep 28, 2025", time: "4:00 PM", homeTeam: "Kisoko B", awayTeam: "Nabitende A", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V40", date: "Oct 4, 2025", time: "10:00 AM", homeTeam: "Nabitende B", awayTeam: "Nabitende Central", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V41", date: "Oct 4, 2025", time: "2:00 PM", homeTeam: "Winner V34", awayTeam: "Winner V35", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V42", date: "Oct 4, 2025", time: "4:00 PM", homeTeam: "Winner V36", awayTeam: "Winner V37", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V43", date: "Oct 5, 2025", time: "10:00 AM", homeTeam: "Winner V38", awayTeam: "Winner V39", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V44", date: "Oct 5, 2025", time: "2:00 PM", homeTeam: "Winner V40", awayTeam: "Winner V41", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V45", date: "Oct 11, 2025", time: "10:00 AM", homeTeam: "Winner V42", awayTeam: "Winner V43", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V46", date: "Oct 12, 2025", time: "2:00 PM", homeTeam: "Winner V44", awayTeam: "Winner V45", venue: "Nabitende Court", subCounty: "Nabitende" },
    { matchNo: "V47", date: "Oct 4, 2025", time: "10:00 AM", homeTeam: "Bulubandi", awayTeam: "Naluko A", venue: "Naluko Court", subCounty: "Nabitende" },
    { matchNo: "V48", date: "Oct 4, 2025", time: "2:00 PM", homeTeam: "Naluko B", awayTeam: "Naluko C", venue: "Naluko Court", subCounty: "Nabitende" },
    { matchNo: "V49", date: "Oct 4, 2025", time: "4:00 PM", homeTeam: "Nawankwale A", awayTeam: "Nawankwale B", venue: "Naluko Court", subCounty: "Nabitende" },
    { matchNo: "V50", date: "Oct 5, 2025", time: "10:00 AM", homeTeam: "Winner V47", awayTeam: "Winner V48", venue: "Naluko Court", subCounty: "Nabitende" },
    { matchNo: "V51", date: "Oct 5, 2025", time: "2:00 PM", homeTeam: "Winner V49", awayTeam: "Winner V50", venue: "Naluko Court", subCounty: "Nabitende" },
    // Nambale Sub-County (14 matches)
    { matchNo: "V52", date: "Sep 20, 2025", time: "10:00 AM", homeTeam: "Mwira", awayTeam: "Kabira Bikomo", venue: "Mwira Court", subCounty: "Nambale" },
    { matchNo: "V53", date: "Sep 20, 2025", time: "2:00 PM", homeTeam: "Nabitovu", awayTeam: "Nabitovu North", venue: "Mwira Court", subCounty: "Nambale" },
    { matchNo: "V54", date: "Sep 21, 2025", time: "10:00 AM", homeTeam: "Winner V52", awayTeam: "Nabitovu South", venue: "Mwira Court", subCounty: "Nambale" },
    { matchNo: "V55", date: "Sep 21, 2025", time: "2:00 PM", homeTeam: "Winner V53", awayTeam: "Winner V54", venue: "Mwira Court", subCounty: "Nambale" },
    { matchNo: "V56", date: "Sep 27, 2025", time: "10:00 AM", homeTeam: "Nasuti South A", awayTeam: "Nasuti South B", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V57", date: "Sep 27, 2025", time: "2:00 PM", homeTeam: "Busimba A", awayTeam: "Busimba B", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V58", date: "Sep 27, 2025", time: "4:00 PM", homeTeam: "Busimba C", awayTeam: "Nabukone A", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V59", date: "Sep 28, 2025", time: "10:00 AM", homeTeam: "Nabukone B", awayTeam: "Nabukone C", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V60", date: "Sep 28, 2025", time: "2:00 PM", homeTeam: "Nasuti North A", awayTeam: "Nasuti North B", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V61", date: "Oct 4, 2025", time: "10:00 AM", homeTeam: "Winner V56", awayTeam: "Winner V57", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V62", date: "Oct 4, 2025", time: "2:00 PM", homeTeam: "Winner V58", awayTeam: "Winner V59", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V63", date: "Oct 4, 2025", time: "4:00 PM", homeTeam: "Winner V60", awayTeam: "Nasuti", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V64", date: "Oct 5, 2025", time: "10:00 AM", homeTeam: "Winner V61", awayTeam: "Winner V62", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V65", date: "Oct 5, 2025", time: "2:00 PM", homeTeam: "Winner V63", awayTeam: "Winner V64", venue: "Nambale Court", subCounty: "Nambale" },
    { matchNo: "V66", date: "Sep 6, 2025", time: "-", homeTeam: "Nasuti", awayTeam: "(Advances)", venue: "Nasuti Court", subCounty: "Nambale" },
    // Kidaago Sub-County (2 matches)
    { matchNo: "V67", date: "Sep 6, 2025", time: "-", homeTeam: "Kazigo", awayTeam: "(Advances)", venue: "Kazigo Court", subCounty: "Kidaago" },
    { matchNo: "V68", date: "Sep 6, 2025", time: "-", homeTeam: "Kidaago", awayTeam: "(Advances)", venue: "Kidaago Court", subCounty: "Kidaago" },
    // Nawandala Sub-County (18 matches)
    { matchNo: "V69", date: "Sep 13, 2025", time: "10:00 AM", homeTeam: "Bugongo A", awayTeam: "Bugongo B", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V70", date: "Sep 13, 2025", time: "2:00 PM", homeTeam: "Bugole A", awayTeam: "Bugole B", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V71", date: "Sep 13, 2025", time: "4:00 PM", homeTeam: "Mabwere I", awayTeam: "Mabwere II", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V72", date: "Sep 14, 2025", time: "10:00 AM", homeTeam: "Namukumya", awayTeam: "Nawandala A", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V73", date: "Sep 14, 2025", time: "2:00 PM", homeTeam: "Nawandala B", awayTeam: "Nawangisa A", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V74", date: "Sep 14, 2025", time: "4:00 PM", homeTeam: "Nawangisa B", awayTeam: "Winner V69", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V75", date: "Sep 20, 2025", time: "10:00 AM", homeTeam: "Winner V70", awayTeam: "Winner V71", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V76", date: "Sep 20, 2025", time: "2:00 PM", homeTeam: "Winner V72", awayTeam: "Winner V73", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V77", date: "Sep 20, 2025", time: "4:00 PM", homeTeam: "Winner V74", awayTeam: "Winner V75", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V78", date: "Sep 21, 2025", time: "2:00 PM", homeTeam: "Winner V76", awayTeam: "Winner V77", venue: "Nawandala Court", subCounty: "Nawandala" },
    { matchNo: "V79", date: "Sep 6, 2025", time: "-", homeTeam: "Bugono", awayTeam: "(Advances)", venue: "Bugono Court", subCounty: "Nawandala" },
    { matchNo: "V80", date: "Sep 6, 2025", time: "2:00 PM", homeTeam: "Kiwanyi I", awayTeam: "Kiwanyi II", venue: "Kiwanyi Court", subCounty: "Nawandala" },
    { matchNo: "V81", date: "Sep 13, 2025", time: "10:00 AM", homeTeam: "Bugamba", awayTeam: "Buniokano", venue: "Kyendabawala Court", subCounty: "Nawandala" },
    { matchNo: "V82", date: "Sep 13, 2025", time: "2:00 PM", homeTeam: "Buzaaya", awayTeam: "Ikumbya", venue: "Kyendabawala Court", subCounty: "Nawandala" },
    { matchNo: "V83", date: "Sep 13, 2025", time: "4:00 PM", homeTeam: "Kabuli I", awayTeam: "Kabuli II", venue: "Kyendabawala Court", subCounty: "Nawandala" },
    { matchNo: "V84", date: "Sep 14, 2025", time: "10:00 AM", homeTeam: "Winner V81", awayTeam: "Winner V82", venue: "Kyendabawala Court", subCounty: "Nawandala" },
    { matchNo: "V85", date: "Sep 14, 2025", time: "2:00 PM", homeTeam: "Winner V83", awayTeam: "Kyendabawala", venue: "Kyendabawala Court", subCounty: "Nawandala" },
    { matchNo: "V86", date: "Sep 14, 2025", time: "4:00 PM", homeTeam: "Winner V84", awayTeam: "Winner V85", venue: "Kyendabawala Court", subCounty: "Nawandala" }
];

// Store results in local storage
let results = JSON.parse(localStorage.getItem("netball_results")) || [];

// Initial standings for sub-county league (to be updated later)
let standings = [
    { team: "Namungalwe", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { team: "Nabitende", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { team: "Nambale", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { team: "Kidaago", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    { team: "Nawandala", played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 }
];

// Admin credentials (hardcoded for simplicity; use a backend for production)
const ADMIN_CREDENTIALS = [{ username: "Namungalwe", password: "KasutiNamu2025" },
{ username: "Nabitende", password: "KasutiNabi2025" },
{ username: "Nawandala", password: "KasutiNawa2025" },
{ username: "Kidaago", password: "KasutiKida2025" },
{ username: "Nambale", password: "KasutiNamb2025" },
];

// Check if admin is logged in
function isAdminLoggedIn() {
    return localStorage.getItem("adminLoggedIn") === "true";
}

// Set admin login status
function setAdminLoggedIn(status) {
    localStorage.setItem("adminLoggedIn", status);
}

// Populate fixtures for each sub-county
function displayFixtures() {
    const subCounties = ["Namungalwe", "Nabitende", "Nambale", "Kidaago", "Nawandala"];
    subCounties.forEach(subCounty => {
        const tableBody = document.getElementById(`${subCounty.toLowerCase()}-fixtures`);
        if (tableBody) {
            tableBody.innerHTML = "";
            const subCountyFixtures = fixtures.filter(f => f.subCounty === subCounty);
            subCountyFixtures.forEach(fixture => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${fixture.matchNo}</td>
                    <td>${fixture.date}</td>
                    <td>${fixture.time}</td>
                    <td>${fixture.homeTeam}</td>
                    <td>${fixture.awayTeam}</td>
                    <td>${fixture.venue}</td>
                `;
                tableBody.appendChild(row);
            });
        }
    });
}

// Handle result submission (for results.html)
document.getElementById("result-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const matchNo = document.getElementById("matchNo").value;
    const homeScore = parseInt(document.getElementById("homeScore").value);
    const awayScore = parseInt(document.getElementById("awayScore").value);
    const fixture = fixtures.find(f => f.matchNo === matchNo);
    if (fixture) {
        const existingResultIndex = results.findIndex(r => r.matchNo === matchNo);
        if (existingResultIndex !== -1) {
            results[existingResultIndex] = {
                matchNo,
                date: fixture.date,
                homeTeam: fixture.homeTeam,
                homeScore,
                awayTeam: fixture.awayTeam,
                awayScore,
                venue: fixture.venue
            };
        } else {
            results.push({
                matchNo,
                date: fixture.date,
                homeTeam: fixture.homeTeam,
                homeScore,
                awayTeam: fixture.awayTeam,
                awayScore,
                venue: fixture.venue
            });
        }
        localStorage.setItem("netball_results", JSON.stringify(results));
        document.getElementById("result-form").reset();
        displayResults();
    } else {
        alert("Invalid Match No. Please enter a valid Match No. (e.g., V1, V2, ..., V86)");
    }
});

// Display results (for results.html and admin.html)
function displayResults() {
    const tableBody = document.getElementById("results-table") || document.getElementById("admin-results-table");
    if (tableBody) {
        tableBody.innerHTML = "";
        results.forEach(result => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${result.matchNo}</td>
                <td>${result.date}</td>
                <td>${result.homeTeam}</td>
                <td>${result.homeScore} - ${result.awayScore}</td>
                <td>${result.awayTeam}</td>
                <td>${result.venue}</td>
                ${tableBody.id === "admin-results-table" ? `<td><button class="btn btn-sm btn-warning edit-result" data-match-no="${result.matchNo}">Edit</button></td>` : ""}
            `;
            tableBody.appendChild(row);
        });
        // Add event listeners for edit buttons in admin portal
        if (tableBody.id === "admin-results-table") {
            document.querySelectorAll(".edit-result").forEach(button => {
                button.addEventListener("click", function() {
                    const matchNo = this.getAttribute("data-match-no");
                    const result = results.find(r => r.matchNo === matchNo);
                    if (result) {
                        document.getElementById("matchNo").value = result.matchNo;
                        document.getElementById("homeScore").value = result.homeScore;
                        document.getElementById("awayScore").value = result.awayScore;
                    }
                });
            });
        }
    }
}

// Display standings (placeholder for sub-county league)
function displayStandings() {
    const tableBody = document.getElementById("standings-table");
    if (tableBody) {
        tableBody.innerHTML = "";
        standings.forEach(team => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${team.team}</td>
                <td>${team.played}</td>
                <td>${team.won}</td>
                <td>${team.drawn}</td>
                <td>${team.lost}</td>
                <td>${team.goalsFor}</td>
                <td>${team.goalsAgainst}</td>
                <td>${team.goalDifference}</td>
                <td>${team.points}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// Populate match number dropdown in admin portal
function populateMatchDropdown() {
    const matchNoSelect = document.getElementById("matchNo");
    if (matchNoSelect) {
        matchNoSelect.innerHTML = '<option value="">Select Match</option>';
        fixtures.forEach(fixture => {
            if (fixture.awayTeam !== "(Advances)") {
                const option = document.createElement("option");
                option.value = fixture.matchNo;
                option.textContent = `${fixture.matchNo}: ${fixture.homeTeam} vs ${fixture.awayTeam} (${fixture.date})`;
                matchNoSelect.appendChild(option);
            }
        });
    }
}

// Handle admin login
document.getElementById("login-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        setAdminLoggedIn(true);
        document.getElementById("login-content").style.display = "none";
        document.getElementById("admin-content").style.display = "block";
        populateMatchDropdown();
        displayResults();
    } else {
        alert("Invalid username or password");
    }
});

// Handle admin logout
document.getElementById("logout-btn")?.addEventListener("click", function() {
    setAdminLoggedIn(false);
    document.getElementById("admin-content").style.display = "none";
    document.getElementById("login-content").style.display = "block";
    document.getElementById("login-form").reset();
});

// Handle admin result submission
document.getElementById("admin-result-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const matchNo = document.getElementById("matchNo").value;
    const homeScore = parseInt(document.getElementById("homeScore").value);
    const awayScore = parseInt(document.getElementById("awayScore").value);
    const fixture = fixtures.find(f => f.matchNo === matchNo);
    if (fixture) {
        const existingResultIndex = results.findIndex(r => r.matchNo === matchNo);
        if (existingResultIndex !== -1) {
            results[existingResultIndex] = {
                matchNo,
                date: fixture.date,
                homeTeam: fixture.homeTeam,
                homeScore,
                awayTeam: fixture.awayTeam,
                awayScore,
                venue: fixture.venue
            };
        } else {
            results.push({
                matchNo,
                date: fixture.date,
                homeTeam: fixture.homeTeam,
                homeScore,
                awayTeam: fixture.awayTeam,
                awayScore,
                venue: fixture.venue
            });
        }
        localStorage.setItem("netball_results", JSON.stringify(results));
        document.getElementById("admin-result-form").reset();
        document.getElementById("matchNo").value = "";
        displayResults();
    } else {
        alert("Invalid Match No. Please select a valid Match No.");
    }
});

// Initialize page
document.addEventListener("DOMContentLoaded", function() {
    displayFixtures();
    displayResults();
    displayStandings();
    if (document.getElementById("admin-content")) {
        if (isAdminLoggedIn()) {
            document.getElementById("login-content").style.display = "none";
            document.getElementById("admin-content").style.display = "block";
            populateMatchDropdown();
            displayResults();
        } else {
            document.getElementById("admin-content").style.display = "none";
            document.getElementById("login-content").style.display = "block";
        }
    }
});

