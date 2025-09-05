document.getElementById("phone").addEventListener("input", function () {
  // فقط اعداد نگه‌داری میشه
  this.value = this.value.replace(/\D/g, "");
});

document.getElementById("reportForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const error = document.getElementById("error");

  if (/^09\d{9}$/.test(phone)) {
    error.style.display = "none";
    alert("گزارش ثبت شد ✅");
    this.submit();
  } else {
    error.style.display = "block";
  }
});
