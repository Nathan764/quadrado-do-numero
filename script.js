function quadrado() {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var n3 = Number(document.getElementById('n3').value)
    var n4 = Number(document.getElementById('n4').value)
    var n5 = Number(document.getElementById('n5').value)

    var quadrado1 = (n1 * n1)
    var quadrado2 = (n2 * n2)
    var quadrado3 = (n3 * n3)
    var quadrado4 = (n4 * n4)
    var quadrado5 = (n5 * n5)
    
    document.getElementById('resultado').innerHTML = `<p>Quadrado do primeiro numero ${quadrado1}<br>Quadrado do segundo numero ${quadrado2}<br>Quadrado do terceiro numero ${quadrado3}<br>Quadrado do quarto numero ${quadrado4}<br>Quadrado do quinto numero ${quadrado5}`;
    }