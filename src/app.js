export default function app() {
  const a = { b: 1 };
  console.log({
    ...a,
    c: 2,
    d: 3,
  });
}
