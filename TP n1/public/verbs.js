function start(time_) {
  //----------
  let verb_, verb;
  verb_ = document.getElementById("verb");
  verb = verb_.value;
  //----------
  let time;
  time = time_;

  if (verb[verb.length - 1] == "r" || verb[verb.length - 1] == "R") {
    if (verb[verb.length - 2] == "a" || verb[verb.length - 2] == "A")
      fAr(verb, time);
    else if (verb[verb.length - 2] == "e" || verb[verb.length - 2] == "E")
      fEr(verb, time);
    else if (verb[verb.length - 2] == "i" || verb[verb.length - 2] == "I")
      fIr(verb, time);
    else {
      new $.Zebra_Dialog("Por favor, ingresar un verbo VALIDO", {
        type: "error",
        title: "Error",
      });
    }
  } else
    new $.Zebra_Dialog("Por favor, ingresar un verbo VALIDO", {
      type: "error",
      title: "Error",
    });
}

//A: &#225; E: &#233; I: &#237; O: &#243; U: &#250;

function fAr(verb, t) {
  let limit = verb.length - 2;
  let v = verb.substr(0, limit);
  v = v.toLowerCase();
  //------------------------------- PRESENTE
  if (t == "a" || t == "A") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "o<br>" +
        "<b>Tu </b>" +
        v +
        "as<br>" +
        "<b>El </b>" +
        v +
        "a<br>" +
        "<b>Nosotros </b>" +
        v +
        "amos<br>" +
        "<b>Vosotros </b>" +
        v +
        "&#225;is<br>" +
        "<b>Ellos </b>" +
        v +
        "an",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- PASADO
  } else if (t == "p" || t == "P") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "&#233;<br>" +
        "<b>Tu </b>" +
        v +
        "aste<br>" +
        "<b>El </b>" +
        v +
        "&#243;<br>" +
        "<b>Nosotros </b>" +
        v +
        "amos<br>" +
        "<b>Vosotros </b>" +
        v +
        "&#225;steis<br>" +
        "<b>Ellos </b>" +
        v +
        "aron",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- FUTURO
  } else if (t == "f" || t == "F") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "ar&#233;<br>" +
        "<b>Tu </b>" +
        v +
        "ar&#225;s<br>" +
        "<b>El </b>" +
        v +
        "ar&#225;<br>" +
        "<b>Nosotros </b>" +
        v +
        "aremos<br>" +
        "<b>Vosotros </b>" +
        v +
        "ar&#233;is<br>" +
        "<b>Ellos </b>" +
        v +
        "ar&#225;n",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- ERROR
  } else {
    new $.Zebra_Dialog("Por favor, ingresar un tiempo verbal VALIDO", {
      type: "error",
      title: "Error",
    });
  }
}

//A: &#225; E: &#233; I: &#237; O: &#243; U: &#250;

function fEr(verb, t) {
  let limit = verb.length - 2;
  let v = verb.substr(0, limit);
  v = v.toLowerCase();
  //------------------------------- PRESENTE
  if (t == "a" || t == "A") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "o<br>" +
        "<b>Tu </b>" +
        v +
        "es<br>" +
        "<b>El </b>" +
        v +
        "e<br>" +
        "<b>Nosotros </b>" +
        v +
        "emos<br>" +
        "<b>Vosotros </b>" +
        v +
        "&#233;is<br>" +
        "<b>Ellos </b>" +
        v +
        "en",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- PASADO
  } else if (t == "p" || t == "P") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "&#237;<br>" +
        "<b>Tu </b>" +
        v +
        "iste<br>" +
        "<b>El </b>" +
        v +
        "i&#243;<br>" +
        "<b>Nosotros </b>" +
        v +
        "imos<br>" +
        "<b>Vosotros </b>" +
        v +
        "isteis<br>" +
        "<b>Ellos </b>" +
        v +
        "ieron",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- FUTURO
  } else if (t == "f" || t == "F") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "er&#233;<br>" +
        "<b>Tu </b>" +
        v +
        "er&#225;s<br>" +
        "<b>El </b>" +
        v +
        "er&#225;<br>" +
        "<b>Nosotros </b>" +
        v +
        "eremos<br>" +
        "<b>Vosotros </b>" +
        v +
        "er&#233;is<br>" +
        "<b>Ellos </b>" +
        v +
        "er&#225;n",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- ERROR
  } else {
    new $.Zebra_Dialog("Por favor, ingresar un tiempo verbal VALIDO", {
      type: "error",
      title: "Error",
    });
  }
}

//A: &#225; E: &#233; I: &#237; O: &#243; U: &#250;

function fIr(verb, t) {
  let limit = verb.length - 2;
  let v = verb.substr(0, limit);
  v = v.toLowerCase();
  //------------------------------- PRESENTE
  if (t == "a" || t == "A") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "o<br>" +
        "<b>Tu </b>" +
        v +
        "es<br>" +
        "<b>El </b>" +
        v +
        "e<br>" +
        "<b>Nosotros </b>" +
        v +
        "imos<br>" +
        "<b>Vosotros </b>" +
        v +
        "&#237;s<br>" +
        "<b>Ellos </b>" +
        v +
        "en",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- PASADO
  } else if (t == "p" || t == "P") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "&#237;<br>" +
        "<b>Tu </b>" +
        v +
        "iste<br>" +
        "<b>El </b>" +
        v +
        "i&#243;<br>" +
        "<b>Nosotros </b>" +
        v +
        "imos<br>" +
        "<b>Vosotros </b>" +
        v +
        "isteis<br>" +
        "<b>Ellos </b>" +
        v +
        "ieron",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- FUTURO
  } else if (t == "f" || t == "F") {
    new $.Zebra_Dialog(
      "<b>Yo </b>" +
        v +
        "ir&#233;<br>" +
        "<b>Tu </b>" +
        v +
        "ir&#225;s<br>" +
        "<b>El </b>" +
        v +
        "ir&#225;<br>" +
        "<b>Nosotros </b>" +
        v +
        "iremos<br>" +
        "<b>Vosotros </b>" +
        v +
        "ir&#233;is<br>" +
        "<b>Ellos </b>" +
        v +
        "ir&#225;n",
      {
        type: "information",
        title: "Conjugacion del verbo: " + verb,
      }
    );
    //------------------------------- ERROR
  } else {
    new $.Zebra_Dialog("Por favor, ingresar un tiempo verbal VALIDO", {
      type: "error",
      title: "Error",
    });
  }
}
