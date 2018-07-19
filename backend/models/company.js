const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var CompanySchema = new mongoose.Schema({
    username: String,
    password: String,
    companyName: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    logo: String,
    about: String,
    realtorImage: String,
    createdAt: { type: Date, default: Date.now },
    accountTotal: { type: Number, default: 0 },
    paymentBid: { type: Number, default: 25},
    couponCode: [String],
    freeLeads: { type: Number, default: 0 },
    amountOfLeads: { type: Number, default: 0 },
    refundedLeads: { type: Number, default: 0 },
    canceledLeads: { type: Number, default: 0 },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: { type: Boolean, default: false }
});

CompanySchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Company", CompanySchema);
