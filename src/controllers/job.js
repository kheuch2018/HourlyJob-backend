const Job = require("../models/jobSchema");

exports.publish = (req, res) => {
  const { Title, Rate, Email, Description } = req.body;
  try {
    const job = new Job({ Title, Rate, Email, Description });
    job
      .save()
      .then(job => res.send(job))
      .catch(err => res.send(err));
  } catch (err) {
    res.status(400).send("Invalid data");
  }
};

exports.show = (req, res) => {
  try {
    const jobs = Job.find({}, (err, jobs) => {
      if (err) return res.send(err);
      res.json(jobs);
    });
  } catch (ex) {
    res.send(ex);
  }
};
