const PREFIX = 'ant';

export const prefixCls = (str: string): string => {
    return [PREFIX, str].filter(Boolean).join('-');
}
