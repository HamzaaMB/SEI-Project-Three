import Day from '../models/day.js'


//! INDEX Route
export const getAllDays = async (_req, res) => {
  try {
    const eachDay = await Day.find()
    return res.status(200).json(eachDay)
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}