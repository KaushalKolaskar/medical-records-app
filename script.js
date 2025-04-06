function addMedication() {
    const name = document.querySelector('#medication input:nth-of-type(1)').value;
    const dosage = document.querySelector('#medication input:nth-of-type(2)').value;
    const frequency = document.querySelector('#medication input:nth-of-type(3)').value;
  
    if (name && dosage && frequency) {
      const list = document.getElementById("medication-list");
      const item = document.createElement("li");
      item.textContent = `${name} - ${dosage} - ${frequency}`;
      list.appendChild(item);
  
      document.querySelectorAll('#medication input').forEach(input => input.value = '');
    } else {
      alert("Please fill in all fields.");
    }
  }
  