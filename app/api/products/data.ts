import type { Product } from "@/app/lib/types";

export const baseProducts: Product[] = [
  { id: "p1", name: "Mechanical Keyboard", price: 129, category: "Hardware", updatedAt: Date.now() },
  { id: "p2", name: "Wireless Mouse", price: 59, category: "Hardware", updatedAt: Date.now() },
  { id: "p3", name: "Cloud Backup", price: 19, category: "Service", updatedAt: Date.now() },
  { id: "p4", name: "Team Chat", price: 12, category: "Software", updatedAt: Date.now() },
  { id: "p5", name: "Monitor Arm", price: 89, category: "Hardware", updatedAt: Date.now() },
];
