function ucapkanSalam(waktu) {
  return function (nama) {
    return `${nama}, ${waktu}`;
  };
}

let selamatPagi = ucapkanSalam("malam");

console.dir(selamatPagi());
