import React, { useEffect, Children, ReactNode, useMemo, FunctionComponentElement } from "react";

type renderChildrenByNameCallback<T> = (element: FunctionComponentElement<T>, index: number) => any;

export const useRenderChildrenByName = <T = any>(
	children: ReactNode,
	name: string | string[],
	cb: renderChildrenByNameCallback<T>,
	deps: any[] = [children]
): ReactNode => {
	return useMemo(
		() =>
			Children.map(children, (c, index) => {
				const element = c as FunctionComponentElement<T>;
				const displayName = element.type.displayName || '';

				if (name.includes(displayName)) {
					return cb(element, index);
				}
			}),
		[deps]
	);
};
