import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  { ignores: [".pnp.cjs"] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
