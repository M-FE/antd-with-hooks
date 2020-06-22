import OriginMenu from './Menu';
import Item from './MenuItem';
import SubMenu from './SubMenu';

export type MenuProps = typeof OriginMenu & {
    Item: typeof Item;
    SubMenu: typeof SubMenu;
}

const Menu = OriginMenu as MenuProps;

Menu.Item = Item;
Menu.SubMenu = SubMenu;

export default Menu;
