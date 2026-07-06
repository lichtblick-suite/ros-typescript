import { TextEncoder, TextDecoder } from "node:util";

// JSDOM does not provide TextEncoder and TextDecoder
globalThis.TextEncoder = TextEncoder as typeof globalThis.TextEncoder;
globalThis.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
