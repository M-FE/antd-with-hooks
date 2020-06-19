import OriginMenu from './Menu';
import Item from './MenuItem';

export type MenuProps = typeof OriginMenu & {
    Item: typeof Item;
}

const Menu = OriginMenu as MenuProps;

Menu.Item = Item;

export default Menu;
