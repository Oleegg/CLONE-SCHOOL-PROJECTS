/**
 * @jest-environment jsdom
 */

import { Basket } from "../components/basket";


const basket = new Basket();
basket.bascetArr = ['1','2','3','4','5','6','7','8','9','0','11']

const arr = ['1','2','3'];


test('basket set',()=>{	
	expect(basket.bascetArr = arr).toBe(arr);
})

test('basket get', ()=>{
	expect(basket.bascetArr).toEqual(arr);
})

test('basket alarm function', ()=>{
	expect(basket.addAllarm()).toBeUndefined();
})

test('basket close alert function', ()=>{
	expect(basket.closeAllert()).toBeUndefined();
})

test('basket clear basket function', ()=>{
	expect(basket.clearBasket()).toBeUndefined();
})

test('basket add text', ()=>{
	expect(basket.addTextBasket()).toBeUndefined()
})

test('basket show basket', ()=>{
	expect(basket.showBasket()).toBeUndefined()
})

