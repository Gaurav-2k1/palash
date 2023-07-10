import powerbi from '../assets/project/Power-BI-Dashboard.png'
import bi from '../assets/project/po.png'
// import sa from '../assets/project/sa.png'
// import asp from '../assets/project/aspweb.jpg'
const projects = [
    {
        id: 1,
        company: "Accenture Ltd, Pune, Maharashtra",
        url: powerbi,
        projectDetail: {
            name: " POWER BI REPORT FOR BP",
            Duration: "June 2021 - till date",
            Tools: "Power BI Desktop & DBVeawer",
            Database: "Amazon Redshift",
            Language: "SQL/PLSQL ",
            Cloud: "Power BI Service,Azure Blob Storage"
        },
        Roles: [
            " Responsible for development of interactive reports as per requirement.",
            "Involved in data analytics and BI,specifically data ingestion from DB / excel, cleaning & shaping data as per report need.",
            "RLS implementation ",
            "Data modelling to connect with  different table.Writing DAX query to  create measures.",
            "Publishing reports on power bi service for end users.",
            "Responsible for gateway configuration and scheduling."
        ]
    },
    {
        id: 2,
        company: "Tata Consultancy Services, Pune, Maharashtra",
        url: bi,
        projectDetail: {
            name: "POWER BI & SAP BO REPORTS FOR SHELL",
            Duration: "Sep 2018 - June 2021",
            Tools: "Power BI Desktop,Web Intelligence and UDT",
            Database: "SQL Server",
            Language: "SQL",
            Cloud: "Power BI Service"
        },
        Roles: [
            "Developed various Canned reports with complex features, created charts and templates.",
            "Used linked universe to promote reusability and reduce maintenance time.",
            "Responsible for development of interactive reports/dashboards and publishing on power biservice.",
            "Data modelling to connect with different table. Writing DAX query to create measures.",
            "Responsible for gateway configuration and scheduling.",
        ]
    },
    
]


export default projects;