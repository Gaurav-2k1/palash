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

    ]
}

export default stack;