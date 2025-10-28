import Event from "../models/event.js";
export const getEvent = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  const event = req.body;
  const newEvent = new Event(event);
  try {
    await newEvent.save();
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  const { title } = req.params;
  const event = req.body;
  const updatedEvent = await Event.findOneAndUpdate({ title }, event, {
    new: true,
  });
  res.status(200).json(updatedEvent);
};

export const deleteEvent = async (req, res) => {
  const { title } = req.params;
  const deletedEvent = await Event.findOneAndDelete({ title });
  res.status(200).json(deletedEvent);
};
