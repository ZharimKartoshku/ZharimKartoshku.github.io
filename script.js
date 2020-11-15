
let a = Document.getElementById("").value;
let b = Document.getElementById("").value;
let c = Document.getElementById("").value;

if (a & b & c > 0) {
    function fullqrtresh() { //Решение полного квадратного уравнения после нажатия кнопки
        let D = sqr(b) - 4 * a * c;
            if (D>0) {
                let x1 = ( -b + sqrt(D) ) / ( 2  * a );
                let x2 = ( -b - sqrt(D) ) / ( 2 * a );
                document.write(x1, x2);
            }
            else if (D=0) {
                let x = b / ( 2 * a );
                document.write(x);
            }
            else if (D<0) {
                document.write ("haven't any results!");
            }
        }
}
else if  (b = 0) {
    function resh() {
        let x1 = -1 * sqrt(c);
        ;

    }
}

x^2 + 9 = 0
a = 1
b = 0
c = 9
(x - 3)(x + 3) = 0
x - 3 = 0
x + 3 = 0
x = 3, -3
