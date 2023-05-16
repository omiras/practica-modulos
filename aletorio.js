/**
 * un endpoint que cuando le hacen un GET devolvemos un número aletorio. Le puedes pasar dos numeros para que te calcule el número aletario en dicho intervalo. --> (1, 10) , quiero un número aleatorio entre 1 y 10
 *
 * Vamos a instalar un módulo o biblioteca de terceros (externa)
 */

// Load Chance
import { Chance } from "chance";
// Instantiate Chance so it can be used
var chance = new Chance();

console.log(chance.integer({ min: 1, max: 10 }));
