import { setAppStatusAC, setErrorAC } from "@/app/app-slice.ts"
import type { BaseResponse } from "@/common/types"
import type { Dispatch } from "@reduxjs/toolkit"

export const handleAppErrors = <T>(dispatch: Dispatch, data: BaseResponse<T>) => {
  dispatch(setErrorAC({ error: data.messages.length ? data.messages[0] : "Some error occurred" }))
  dispatch(setAppStatusAC({ status: "failed" }))
}

//
// export function identity1(arg: number): number {
//   return arg
// }
//
// export function identity2(arg: string): string {
//   return arg
// }
//
// export function identity3(arg: Todolist[]): Todolist[] {
//   return arg
// }
//
// export function identity<T>(arg: T): T {
//   return arg
// }

// identity(1)

// const getFirstElement = <T>(array: T[]): T => {
//   return array[0]
// }
//
// // Пример 1: Массив чисел
// const numbers = [1, 2, 3, 4, 5]
// console.log(getFirstElement(numbers)) // 1
//
// // Пример 2: Массив строк
// const words = ["hello", "world", "typescript"]
// console.log(getFirstElement(words)) // 'hello'

// функция должна быть дженериковой и работать с массивами любого типа;
// функция-предикат принимает элемент массива и возвращает boolean;
// если ни один элемент массива не удовлетворяет условию, функция должна возвращать пустой массив:

// const filterArray = <T>(array: T[], fn: (el: T) => boolean): T[] => {
//   return array.filter(fn)
// }
//
// // Пример 1: Фильтрация чисел
// const numbers = [1, 2, 3, 4, 5]
// const isEven = (num: number) => num % 2 === 0
//
// console.log(filterArray(numbers, isEven)) // [2, 4]
//
// // Пример 2: Фильтрация строк
// const words = ["hello", "tworld", "typescript"]
// const startsWithT = (word: string) => word.startsWith("t")
//
// console.log(filterArray(words, startsWithT)) // ["typescript"]

// Напишите дженериковую функцию mapArray, принимающую массив элементов любого типа и функцию-преобразователь (transform), применяющую эту функцию к каждому элементу массива, и возвращающую новый массив с результатами преобразований:

// const mapArray = <T, V>(array: T[], transform: (el: T) => V) => {
//   return array.map(transform)
// }
//
// // Пример 1: Преобразование чисел в строки
// const numbers = [1, 2, 3, 4]
// const transformNumberToString = (num: number) => `Number: ${num}`
//
// console.log(mapArray(numbers, transformNumberToString))
//
// // // Пример 2: Преобразование строк в их длины
// const words = ["hello", "world", "typescript"]
// const getLength = (word: string) => word.length
//
// console.log(mapArray(words, getLength)) // [5, 5, 10]
// //
// // Пример 3: Преобразование объектов в строки
// type Person = { name: string; age: number }
// const people: Person[] = [
//   { name: "Agnes", age: 25 },
//   { name: "Robert", age: 30 },
// ]
// const toDescription = (person: Person) => `${person.name} is ${person.age} years old`
//
// console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]
