export class MyArray<T> {
  private elements: T[] = [];

  constructor(elems: T[]) {
    this.elements = elems;
  }

  public areElementsEqual(index1: number, index2: number): boolean {
    if (
      this.elements.length <= index1 ||
      this.elements.length <= index2 ||
      index2 < 0 ||
      index1 < 0
    )
      throw "Incorrect index";
    if (typeof this.elements[index1] === "object") {
      let areEqual = true;

      for (let propName in this.elements[index1]) {
        if (
          this.elements[index1][propName] !== this.elements[index2][propName]
        ) {
          areEqual = false;
          break;
        }
      }
      return areEqual;
    } else {
      return this.elements[index1] === this.elements[index2];
    }
  }

  public flatten() {
    this.elements = this.flattenArray(this.elements);
  }
  private flattenArray(arr: T[]): T[] {
    let flatArr: T[] = [];

    arr.forEach(function (elem) {
      if (Array.isArray(elem)) {
        let nestedArr = this.flattenArray(elem);
        flatArr = flatArr.concat(nestedArr);
      } else {
        flatArr.push(elem);
      }
    });

    return flatArr;
  }
}
