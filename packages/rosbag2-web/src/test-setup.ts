import { TextEncoder, TextDecoder } from "node:util";

// JSDOM does not provide TextEncoder and TextDecoder
// @ts-expect-error ignore type mismatch with util TextEncoder and global one
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
