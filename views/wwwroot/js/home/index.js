const mongoose = require('mongoose');
var Registrations = mongoose.model('Registration', registrationSchema);

// find all registrations
Registrations.find({ 'name': 'Roberston Howard' }, 'name email', function (err, robRegs) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
});

// const regs = await Registrations.find().
//     where('name').equals('Robertson Howard').
//     select('name email');

var table = document.getElementById('robTable');
var myTable = new DataTable({
    columns: [
        {data: [robRegs[0].name, robRegs[1].name] },
        {data: 'email' },
    ]
});
