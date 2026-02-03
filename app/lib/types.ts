export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Hardware" | "Software" | "Service";
  updatedAt: number;
};
