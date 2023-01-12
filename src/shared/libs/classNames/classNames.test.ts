import { classNames } from './classNames';

describe('classNames', () => {
    test('with param only', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional', () => {
        const expected = 'class class1 class2';
        expect(classNames(
            'class',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'class class1 class2 hovered scrollable';
        expect(classNames(
            'class',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with false mods', () => {
        const expected = 'class class1 class2 hovered';
        expect(classNames(
            'class',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with false mods', () => {
        const expected = 'class class1 class2 hovered';
        expect(classNames(
            'class',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
