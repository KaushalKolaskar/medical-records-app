# medical-records-app
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Personal Medical Records</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f4f3;
      padding: 20px;
    }
    h1, h2 {
      font-size: 24px;
    }
    h1 {
      font-weight: bold;
    }
    input, textarea, select, button {
      margin: 5px 0;
      padding: 8px;
      font-size: 14px;
    }
    input[type="text"], input[type="password"], input[type="email"], textarea, select {
      width: 250px;
    }
    button {
      cursor: pointer;
    }
    .section {
      margin-bottom: 40px;
    }
    ul {
      padding-left: 20px;
    }
    ul li a {
      color: blue;
      text-decoration: underline;
    }
    footer {
      margin-top: 40px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>Personal Medical Records</h1>
  <ul>
    <li><a href="#login">Login</a></li>
    <li><a href="#history">Medical History</a></li>
    <li><a href="#meds">Medication Tracker</a></li>
    <li><a href="#appointments">Appointments</a></li>
    <li><a href="#labs">Lab Results</a></li>
    <li><a href="#emergency">Emergency Info</a></li>
  </ul>

  <div class="section" id="login">
    <h2>Login</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>

  <div class="section" id="history">
    <h2>Medical History</h2>
    <textarea placeholder="Allergies, past surgeries, chronic conditions..."></textarea><br />
    <input type="file" multiple />
    <br />
    <button>Save</button>
  </div>

  <div class="section" id="meds">
    <h2>Medication Tracker</h2>
    <input type="text" placeholder="Medication Name" />
    <input type="text" placeholder="Dosage" />
    <input type="text" placeholder="Frequency" />
    <button>Add Medication</button>
  </div>

  <div class="section" id="appointments">
    <h2>Appointments</h2>
    <input type="text" placeholder="Doctor's Name" />
    <input type="date" />
    <br />
    <textarea placeholder="Notes..."></textarea><br />
    <button>Add Appointment</button>
  </div>

  <div class="section" id="labs">
    <h2>Lab Results</h2>
    <input type="file" />
    <button>Upload Lab Result</button>
  </div>

  <div class="section" id="emergency">
    <h2>Emergency Information</h2>
    <input type="text" placeholder="Emergency Contact" />
    <input type="text" placeholder="Blood Type" />
    <br />
    <textarea placeholder="Allergies, chronic conditions..."></textarea><br />
    <button>Save Emergency Info</button>
  </div>

  <footer>
    © 2023 Personal Medical Records App
  </footer>

</body>
</html>
