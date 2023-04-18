import aws from '../assets/techstack/cloud/aws.png';
import con from '../assets/techstack/cloud/convo.jpg'
import minio from '../assets/techstack/cloud/minio.png';
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
import apache from '../assets/techstack/tools/apacheno.jpg';
import dbveawer from '../assets/techstack/tools/dbveawer.png';
import dax from '../assets/techstack/tools/DAX.png';
import editor from '../assets/techstack/tools/editor.png';
import SSis from '../assets/techstack/tools/SSIS.png';
import tableau from '../assets/techstack/tools/tableau.png';


const stack = {
    Cloud: [
        {
            icon: aws,
            name: " Amazon AWS S3 Bucket"
        },
        {
            icon: con,
            name: "Confluence"
        },
        {
            icon: minio,
            name: "MinIO"
        },
        {
            icon: power,
            name: " Power BI Service"
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
            icon: apache,
            name: "Apache NiFi"
        },
        {
            icon: dax,
            name: "DAX Studio"
        },
        {
            icon: dbveawer,
            name: "DB Veawer"
        },
        {
            icon: editor,
            name: "Tabular Editor"
        },
        {
            icon: powerbi,
            name: "Power BI"
        },
        {
            icon: SSis,
            name: "SSIS"
        },
        {
            icon: tableau,
            name: "Tableau"
        } 
    ], 
} 

export default stack;