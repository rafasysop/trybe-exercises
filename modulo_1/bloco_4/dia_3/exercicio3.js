let n = 5;

for (let i=1;i<=n;i++) {
  let tri = "";
  for (let i2=n;i2>i;i2--) {
    tri += " ";
  }
  for (let i3=1;i3<=i;i3++){
    tri += "*";
  }
  console.log(tri)
}