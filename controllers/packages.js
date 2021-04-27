import Package from '../models/package.js'

//! INDEX Route
export const getAllPackages = async (_req, res) => {
  try {
    const packagesLibrary = await Package.find()
    return res.status(200).json(packagesLibrary)
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}

//! INDIVIDUAL Place Route
export const getOnePackage = async (req, res) => {
  try {
    const { id } = req.params
    const onePackage = await Package.findById(id)
    if (!onePackage) throw new Error()
    return res.status(200).json(onePackage)
  } catch (err) {
    return res.status(404).json({ message: 'Not Found' })
  }
}
