// membuat alias

export type ID = string | number;
export type FullName = string;

// buat type dengan object
export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  bestSeller?: string; // optional property
};
