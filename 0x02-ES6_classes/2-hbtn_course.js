export default class HolbertonCourse {

  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get getName() {
    return this._name;
  }
  set setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get getLength() {
    return this._length;
  }

  set setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }
  get getStudents() {
    return this._students;
  }

  set setStudents(std) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    this._students = std;
  }
}
