import con from '../assets/techstack/cloud/convo.jpg'
import power from '../assets/techstack/cloud/power.jpg';
import redshift from '../assets/techstack/database/redshift.webp';
import sql from '../assets/techstack/database/sql.png';
import ml from '../assets/techstack/ai/ml.jpg';
import model from '../assets/techstack/ai/modelops.png';
import nlp from '../assets/techstack/ai/nlp.jpg';
import ado from '../assets/techstack/framework/ado.png';
import asp from '../assets/techstack/framework/asp.jpg';
import auto from '../assets/techstack/platform/automate.jpg';
import poweri from '../assets/techstack/platform/powerbi.webp';
import powerbi from '../assets/techstack/tools/powerbitool.png';
import dbveawer from '../assets/techstack/tools/dbveawer.png';
import tableu from '../assets/techstack/tools/tableau.png';
import dax from '../assets/techstack/tools/DAX.png';
import editor from '../assets/techstack/tools/editor.png';
import SSis from '../assets/techstack/tools/SSIS.png';
import azure from '../assets/techstack/cloud/azure.jpg';
import sp from '../assets/techstack/cloud/sharepoint.jpg';
import sapbo from '../assets/techstack/tools/sapbo.jpg';
import spotfire from '../assets/techstack/tools/spotfire.jpg';
import excel from '../assets/techstack/tools/msexcel.jpg';
import datalake from '../assets/techstack/cloud/datalake.png'

const stack = {
    Cloud: [
        {
            icon: azure,
            name: "Azure Blob Storage"
        },
        {
            icon: con,
            name: "Confluence"
        },
        {
            icon: sp,
            name: "SharePoint"
        },
        {
            icon: power,
            name: " Power BI Service"
        },
        {
            icon: datalake,
            name: "Azure Datalake"
        }
    ],
    Databases: [
        {
            icon: redshift,
            name: "Amazon Redshift"
        },
        {
            icon: sql,
            name: "SQL Server"
        },

    ],
    AI: [
        {
            icon: ml,
            name: " Machine learning"
        },
        {
            icon: model,
            name: "Modelops"
        },
        {
            icon: nlp,
            name: "NLP"
        },

    ],

    Platform: [
        {
            icon: poweri,
            name: "Power App"
        },
        {
            icon: auto,
            name: "Power Automate"
        },

    ],
    Framework: [
        {
            icon: ado,
            name: "ADO.Net"
        },
        {
            icon: asp,
            name: "ASP.Net"
        },

    ],
    Tools: [
        {
            icon: powerbi,
            name: "Power BI"
        },
        {
            icon: tableu,
            name: "Tableau"
        },
        {
            icon: SSis,
            name: "SSIS"
        },
        {
            icon: dax,
            name: "DAX Studio"
        },
        {
            icon: editor,
            name: "Tabular Editor"
        },
        {
            icon: dbveawer,
            name: "DB Veawer"
        },
        {
            icon: sapbo,
            name: "SAP BO"
        },
        {
            icon: spotfire,
            name: "Spotfire"
        },
        {
            icon: excel,
            name: "MS Excel"
        },

    ],
}

export default stack;