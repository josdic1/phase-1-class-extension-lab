// Your code here
class Polygon {
   constructor(array) {
      this.array = array;
   }


   get countSides() {
      return this.array.length;
   }



   get perimeter() {
      let total = 0
      for (let i = 0; i < this.array.length; i++) {
         total += this.array[i]
      }
      return total
   }


   get isValid() {
      if (this.countSides === 3) {
         const [a, b, c] = this.array
         return a + b > c && a + c > b && b + c > a;
      }
   }
}

class Triangle extends Polygon {
   constructor(sides) {
      if (sides.length !== 3) {
         throw new Error("A triangle has 3 sides");
      }
      super(sides)
   }
}

class Square extends Polygon {
   constructor(sides) {
      if (sides.length !== 4) {
         throw new Error('A square has 4 sides')
      } else {
         super(sides)
      }
   }

   get isValid() {
      if (this.countSides === 4) {
         const [a, b, c, d] = this.array
         return a === b && a === c && a === d && b === c && b === d && c === d
      }
   }

   get area() {
      const [a, b] = this.array
      const sum = a * b
      return sum
   }

}
