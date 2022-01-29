//CONSTRUCTOR FUNCTIONS

     function teacher(a,q) {
      this.age = a;
      this.qualification = q;
    }
    // CALL
    function person1(a,q,n, s) {
      teacher.call(this, a,q,n,s);
      this.name = n;
      this.subject = s;
    }
    //APPLY
    function person2(a,q,n, s) {
      teacher.apply(this, [a,q,n,s])
      this.name = n;
      this.subject = s;
    }
    //BIND
    function person3(a,q,n,s) {
      var x = teacher.bind(this,a,q,n,s);
      x();
      this.name = n;
      this.subject = s;
    }
    let p1 = new person1("24", "Bsc", "Rini", "Maths");
    let p2 = new person2("25", "Bcom", "Vishal", "Accounts");
    let p3 = new person3("16", "Arts", "Tista", "Fine Arts");
    console.log('person1:',p1);
    console.log('person2:',p2);
    console.log('person3:',p3);