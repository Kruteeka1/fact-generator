const facts = [
    "The first website ever created is still online at http://info.cern.ch.",
    "HTML (HyperText Markup Language) was first introduced in 1993.",
    "CSS (Cascading Style Sheets) was introduced in 1996 to separate content from design.",
    "JavaScript was created in just 10 days by Brendan Eich in 1995.",
    "The average webpage size has increased by over 600% since 2010, now exceeding 2 MB.",
    "Google uses over 200 ranking factors to determine a website's search ranking.",
    "Nearly 60% of global web traffic now comes from mobile devices.",
    "The most commonly used web server software is Apache, followed by Nginx.",
    "Over 43% of all websites on the internet are built using WordPress.",
    "HTTP/3, the latest version of the HTTP protocol, offers improved speed and security through the use of QUIC."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
