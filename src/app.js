export default function app() {
  const a = { b: 2 };
  console.log({
    ...a,
    c: 3,
    d: 4,
  });
}
