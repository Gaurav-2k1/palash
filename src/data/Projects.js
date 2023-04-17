import powerbi from '../assets/project/Power-BI-Dashboard.png'
import bi from '../assets/project/po.png'
import sa from '../assets/project/sa.png'
import asp from '../assets/project/aspweb.jpg'
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
            Cloud: "Power BI Service"
        },
        Roles: [
            " Responsible for development of interactive reports as per requirement.",
            "Involved in data analytics and BI,specifically data ingestion from DB / excel, cleaning & shaping data as per report need.",
            "RLS implementation ",
            "Data modelling to connect with  different table.Writing DAX query to  create measures.",
            "Publishing reports on power bi service for end users.Created Confluence and SharePoint page",
            "Responsible for gateway configuration and scheduling."
        ]
    },
    {
        id: 2,
        company: "Infosys Technologies Ltd, Pune,Maharashtra",
        url: bi,
        projectDetail: {
            name: "NIA CA/VISION APPLICATION & POWER BI REPORT FOR BROADCOM",
            Duration: "March 2020 - June 2021",
            Tools: "Power BI Desktop and Apache NiFi",
            Database: "SQL Server",
            Language: "Python, SQL/PLSQL",
            Cloud: "MinIO, Box and Power BI Service"
        },
        Roles: [
            "Responsible for Deployment of AI Product into Linux system and end to end spoke testing",
            "Responsible to train model and achieve good accuracy.",
            "Development of end-to-end integration using Apache NIFI. Integrate Upstream and downstream system in automated fashion",
            "Writing SQL queries to get metadata from upstreamsystem.",
            "Responsible for development of interactive reports/dashboards and publishing on power biservice.",
        ]
    },
    {
        id: 3,
        company: "Infosys Technologies Ltd, Pune, Maharashtra",
        url: sa,
        projectDetail: {
            name: "POWER BI REPORT FOR MARS",
            Duration: "Mar 2019- Feb 2020",
            Tools: "Power BI Desktop",
            Database: "SQL Server",
            Language: "SQL/PLSQL",
            Cloud: "Power BI Service"
        },
        Roles: [
            "Responsible for development of interactive reports as perrequirement.",
            "Involved in data analytics and BI, specifically data ingestion from DB/excel, cleaning & shaping data as per report need.",
            "Data modelling to connect with different table. Writing DAX query to create measures.",
            "Publishing reports on power bi service for end users.",
        ]
    },
    {
        id: 4,
        company: "Hexaware Technologies Ltd, Mumbai, Maharashtra",
        url: asp,
        projectDetail: {
            name: "WEB APPLICATION FOR CHANGI GENERAL HOSPITAL (CGH) And REPORT GENERATION (SSIS) FOR ADITYA BIRLA (SM & HM)",
            Duration: " Mar 2016- Feb 2019",
            Tools: "VS 2013, Star team Crystal Report, MSBI- SSIS",
            Database: "SQL Server",
            Language: "C#, SQL/PLSQL, ASP.NET, ADO.NET",
            Cloud: ""
        },
        Roles: [
            "Involvement in writing maintainable and extensible code in a development environment that complies with all code standards and methodologies.",
            "Responsible for creating reports with crystalreport tool",
            "Involved in the preparation of Reports using SSIS – MSBItool",
            "Writing SQL Queries, Stored Procedures for pulling data required for SSIS Reports.",
            "Designing & Developing SSIS Packages according to businessrequirements"
        ]
    }
]


export default projects;