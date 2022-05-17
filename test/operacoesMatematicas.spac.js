const { assert } = require("chai")

const soma = require('../src/operacoesMatematicas').soma
const subtracao = require('../src/operacoesMatematicas').subtracao
const multiplicacao = require('../src/operacoesMatematicas').multiplicacao
const divisao  = require('../src/operacoesMatematicas').divisao

describe('Testando a soma' , function() {
    describe('1 Teste: soma de dois positivos', function() {
        it("Se espera exito com retorno de 4", function (){
            const resultado = soma(2,2)
            assert.equal(resultado, 4)
        })
    })

    describe('2 Teste: soma de positivo com negativo', function() {
        it("Se espera exito com retorno de -3", function (){
            const y = soma(2,-5)
            assert.equal(y, -3)
        })
    })

    describe('3 Teste: soma de negativo com negativo', function() {
        it("Se espera exito com retorno de -25", function (){
            const y = soma(-20,-5)
            assert.equal(y, -25)
        })
    })

    describe('4 Teste: soma de numero com string', function() {
        it("Se espera uma concatenação com retorno de  9@", function (){
            const y = soma(9,'@')
            assert.equal(y,'9@')
        })
    })

});

describe('Testando a subtracao' , function() {
    describe('1 Teste: subtracao de dois positivos', function() {
        it("Se espera exito com retorno de 8", function (){
            const resultado = subtracao(16,8)
            assert.equal(resultado, 8)
        })
    })

    describe('2 Teste: subtracao de positivo com negativo', function() {
        it("Se espera exito com retorno de 24", function (){
            const resultado = subtracao(16,-8)
            assert.equal(resultado, 24)
        })
    })

    describe('3 Teste: subtracao de dois negativos', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = subtracao(-8,-8)
            assert.equal(resultado, 0)
        })
    })

    describe('4 Teste: subtracao de numero com string', function() {
        it("Se espera uma concatenação com retorno de  9@", function (){
            const y = soma(9,'@')
            assert.equal(y,'9@')
        })
    })

});

describe('Testando a multiplicacao' , function() {
    describe('1 Teste: multiplicacao de dois positivos', function() {
        it("Se espera exito com retorno de 50", function (){
            const resultado = multiplicacao(10,5)
            assert.equal(resultado, 50)
        })
    })

    describe('2 Teste: multiplicacao de positivo com negativo', function() {
        it("Se espera exito com retorno de 24", function (){
            const resultado = multiplicacao(5,-5)
            assert.equal(resultado, -25)
        })
    })

    describe('3 Teste: multiplicacao de dois negativos', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = multiplicacao(-8,-8)
            assert.equal(resultado, +64)
        })
    })

});

describe('Testando a divisao' , function() {
    describe('1 Teste: divisao de dois positivos', function() {
        it("Se espera exito com retorno de 5", function (){
            const resultado = divisao(10,2)
            assert.equal(resultado, 5)
        })
    })

    describe('2 Teste: divisao de positivo com negativo', function() {
        it("Se espera exito com retorno de 24", function (){
            const resultado = divisao(-50,5)
            assert.equal(resultado, -10)
        })
    })

    describe('3 Teste: divisao por 0', function() {
        it("Se espera exito com retorno de 0", function (){
            const resultado = divisao(2, 0)
            assert.equal(resultado, 'ERR')
        })
    })

});

