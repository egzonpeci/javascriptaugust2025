class Student {
  constructor(id, name, address, email, phone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  getNameEmail() {
    document.writeln(`Emri: ${this.name} dhe email ${this.email}<br>`);
  }

  showMessages() {
    document.writeln(`<h4>
        
            Studenti me emrin ${this.name} dhe me email ${this.email}
            <br> mund ta kontaktoni ne kete numer te telefonit ${this.phone}
        
        </h4>`);
  }

  static Msg(x) {
    console.log(x.name);
  }
}

// Student.Msg();

let student_1 = new Student(
  1,
  "Filan",
  "Prishtine",
  "mail@mail.com",
  "044123123"
);

Student.Msg(student_1);

let student_2 = new Student(2, "test", "est", "test@mail.com", "044123123");

student_1.getNameEmail();
student_2.getNameEmail();

student_1.showMessages();

student_2.showMessages();
