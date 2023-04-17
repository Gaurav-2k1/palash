import projects from "@/data/Projects";
export default function handler(req, res) {
    const { id } = req.query
    const data = projects.find((proj) =>
        proj.id === parseInt(id))
    res.status(200).json(data)
}