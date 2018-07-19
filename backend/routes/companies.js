var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

const Company = require('../models/company');

// Index - /companies
router.get('/', (req, res, next) => {
  // Dog.find()
  Company.find({}, (err, companies) => {
    return res.status(200).json(companies);
  });
});

// Create - /companies
router.post('/', (req, res, next) => {
  // Dog.create()
  const newCompany = new Company({
    username: 'company11',
    companyName: 'testco11',
    address: 'test address',
    city: 'test city',
    state: 'test state',
    zip: 'test zip',
    about: 'test about',
    logo: 'test logo'
  });

  Company.register(newCompany, 'test1234', (err, company) => {
    if (err) {
      console.log(err);
    }

    return res.send('Created company');
  })
});

// Show - /companies/:name
router.get('/:name', (req, res, next) => {
  Company.findOne({ companyName: req.params.name }, (err, company) => {
    return res.status(200).json(company);
  });
});

// Update - /companies/:name
router.put('/:name', (req, res, next) => {
  Company.update({ companyName: req.params.name }, {
    companyName: req.body.companyName
  }, (err, nAffected, response) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(response);
  })
});

// Delete - /companies/:name
router.delete('/:name', (req, res, next) => {
  // Dog.findByIdAndRemove()
  Company.deleteOne({ companyName: req.params.companyName })
  .then(result => {
    if (result.n > 0) {
      res.status(202).json({ message: "Deletion successful!" });
    } else {
      res.status(401).json({ message: "Not authorized" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Deleting post failed!"
    });
  });
});

module.exports = router;
