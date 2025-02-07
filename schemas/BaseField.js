const emailField = {
  pattern:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,64}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,64}[a-zA-Z0-9])?)*$/i,
  message: {
    required: "Email tidak boleh kosong",
    pattern: "Parameter email tidak sesuai format",
  },
};

const passwordField = {
  pattern:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // (min. 8 chars, 1 lowercase, 1 uppercase, 1 special char)
  // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // (min. 8 chars, 1 lowercase, 1 uppercase, tapi special char tidak boleh)
  // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/, // (min. 8 chars, 1 lowercase, 1 uppercase, special char optional)
  message: {
    required: "Password wajib diisi",
    pattern:
      "Password minimal 8 karakter, setidaknya 1 huruf besar, 1 huruf kecil, 1 nomor dan 1 special karakter!",
    // pattern: "Password contains at least uppercase letter, lowercase letter, and numbers"
  },
};

const phoneField = {
  pattern: /^[0-9]+$/,
  // pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  // pattern: /^\s*\d*\s*$/,
  // pattern: /[0][8][0-9]{7,11}$/, // ex: 08x{7,11}
  message: {
    required: "Phone tidak boleh kosong",
    pattern: "Phone tidak valid",
  },
};

const firstNameField = {
  message: {
    required: "First Name tidak boleh kosong",
  }
}

const lastNameField = {
  message: {
    required: "Last Name tidak boleh kosong",
  }
}

module.exports = {
  emailField,
  passwordField,
  phoneField,
  firstNameField,
  lastNameField
};
