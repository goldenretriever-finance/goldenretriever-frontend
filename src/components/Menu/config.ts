import {BASE_LIQUIDITY_POOL_URL, BASE_SWAP_URL} from "../../config";

export interface MenuItem {
  label: string
  href: string
}

const MenuItemList: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Exchange',
    href: BASE_SWAP_URL,
  },
  {
    label: 'Liquidity',
    href: BASE_LIQUIDITY_POOL_URL,
  },
  {
    label: 'Farms',
    href: '/farms',
  },
  {
    label: 'Pools',
    href: '/pools',
  },
]

export default MenuItemList
