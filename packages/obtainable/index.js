export async function obtain(obtainable, params, ifthrow) {
  try {
    const res = typeof obtainable === "function"
      ? obtainable(params)
      : obtainable;

    return await res;
  } catch {
    return ifthrow;
  }
}

export function obtainSync(obtainable, params, ifthrow) {
  try {
    const res = typeof obtainable === "function"
      ? obtainable(params)
      : obtainable;

    return res;
  } catch {
    return ifthrow;
  }
}

export default { obtain, obtainSync };
