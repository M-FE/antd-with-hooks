const PREFIX = 'data-test';

export const genSelector = (val: string): string => {
    return `[data-test="${val}"]`;
};
