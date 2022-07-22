import React from 'react';
import {homeWorkReducer} from './homeWorkReducer';
import {stateType} from '../HW8'

let initialState: stateType

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('Sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT_UP'})
    console.log(newState)
    expect(newState[5].name).toBe('Александр')
})

test('Sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT_DOWN'})
    console.log(newState)
    expect(newState[3].name).toBe('Ирина')
})

test('Check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK_18'})
    console.log(newState)
    expect(newState.find(item => item.age < 18)).toBeUndefined()
})