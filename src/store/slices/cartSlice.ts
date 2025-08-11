// Define the product type expected in the cart
interface Product {
  id: string | number;
  qty: number;
  // other product fields as needed
  [key: string]: any;
}

// Action types
interface AddItemAction {
  type: "ADDITEM";
  payload: Product;
}

interface DelItemAction {
  type: "DELITEM";
  payload: Product;
}

type CartAction = AddItemAction | DelItemAction;

// Action creators
export const addCart = (product: Product): AddItemAction => ({
  type: "ADDITEM",
  payload: product,
});

export const delCart = (product: Product): DelItemAction => ({
  type: "DELITEM",
  payload: product,
});

// Get initial cart from localStorage
const getInitialCart = (): Product[] => {
  if (typeof window === "undefined") return []; // for SSR safety
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Reducer

const handleCart = (
  state: Product[] = getInitialCart(),
  action: CartAction | { type: string }
): Product[] => {
  // type guard to check if action is CartAction
  function isCartAction(act: any): act is CartAction {
    return act.type === "ADDITEM" || act.type === "DELITEM";
  }

  if (!isCartAction(action)) {
    // Unknown action, return state
    return state;
  }

  const product = action.payload;
  let updatedCart: Product[];

  switch (action.type) {
    case "ADDITEM":
      const existAdd = state.find((x) => x.id === product.id);
      if (existAdd) {
        updatedCart = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        updatedCart = [...state, { ...product, qty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case "DELITEM":
      const existDel = state.find((x) => x.id === product.id);
      if (!existDel) return state;

      if (existDel.qty === 1) {
        updatedCart = state.filter((x) => x.id !== existDel.id);
      } else {
        updatedCart = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
  }
};

export default handleCart;
