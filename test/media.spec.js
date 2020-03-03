const chai = require("chai");
const expect = chai.expect;
const media = require("../routines/media");

describe("calcular media", ()=>{

    describe("notas de unidades",()=>{

        it("I unid=7; 2 unid = 9; média = 8",()=>{
            expect(media.calcularMedia(7,9)).to.equal(8);
        })
    
        it("I unid=3; 2 unid = 5; média = 4",()=>{
            expect(media.calcularMedia(3,5)).to.equal(4);
        })

    
    })

    describe("notas de segunda chamada",()=>{
        it("I unid=7; 2 ch = 9; média = 8",()=>{
            expect(media.calcularMedia(7,null,9)).to.equal(8);
        })

        it("II unid=10; 2 ch = 2; média = 6",()=>{
            expect(media.calcularMedia(null,10,2)).to.equal(6);
        })

        it("II  2 ch = 10; média = 5",()=>{
            expect(media.calcularMedia(null,null,10)).to.equal(5);
        })



    })

    describe("nota final",()=>{
        it("I unid=0; 2 ch = 0; média = 8",()=>{
            expect(media.calcularMedia(7,null,9)).to.equal(8);
        })
});