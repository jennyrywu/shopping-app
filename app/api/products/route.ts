import { NextResponse } from "next/server";
import { baseProducts } from "./data";
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleInPlace<T>(arr: T[], seed: number) {
  const rand = mulberry32(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function expensiveExpand(products: typeof baseProducts) {
  const expanded = [];
  for (let i = 0; i < 800; i++) {
    for (const p of products) {
      expanded.push({
        ...p,
        id: `${p.id}-${i}`,
        name: `${p.name} ${i}`,
        updatedAt: p.updatedAt + i,
      });
    }
  }
  return expanded;
}

// INTENTIONAL UI/UX BUG: random order to make the list feel messy
const seed = 123456;
const PRODUCTS_PAYLOAD = expensiveExpand(baseProducts);
shuffleInPlace(PRODUCTS_PAYLOAD, seed);

export async function GET() {
  return NextResponse.json(PRODUCTS_PAYLOAD);
}
