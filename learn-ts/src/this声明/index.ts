function double(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 9,
  double,
};
valid.double();

const invalid = {
  valve: 9,
  double,
};
invalid.double();
