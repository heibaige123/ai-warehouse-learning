/**
 * 将多个 `Uint8Array` 缓冲区拼接成一个连续的 `Uint8Array`。
 *
 * 当你需要将多段二进制数据合并为一块连续的缓冲区时非常有用，
 * 例如在组装流式响应数据时使用。
 *
 * @param buffers - 要拼接的 `Uint8Array` 实例数组。
 * @returns 包含所有输入缓冲区数据的新 `Uint8Array`。
 *
 * @example
 * ```ts
 * const a = new Uint8Array([1, 2, 3]);
 * const b = new Uint8Array([4, 5, 6]);
 * const result = concatBytes([a, b]);
 * // result => Uint8Array [1, 2, 3, 4, 5, 6]
 * ```
 */
export function concatBytes(buffers: Uint8Array[]): Uint8Array {
  let length = 0;
  for (const buffer of buffers) {
    length += buffer.length;
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const buffer of buffers) {
    output.set(buffer, index);
    index += buffer.length;
  }

  return output;
}

/**
 * 将字符串编码为 UTF-8 字节的 `Uint8Array`。
 *
 * 使用浏览器/Node.js 内置的 `TextEncoder` API，并缓存编码器实例，
 * 以避免后续调用时重复分配开销。
 *
 * @param str - 要编码的字符串。
 * @returns 包含 UTF-8 编码字节的 `Uint8Array`。
 *
 * @example
 * ```ts
 * const bytes = encodeUTF8('Hello, OpenAI!');
 * // bytes => Uint8Array [72, 101, 108, 108, 111, 44, 32, 79, 112, 101, 110, 65, 73, 33]
 * ```
 */
let encodeUTF8_: (str: string) => Uint8Array;
export function encodeUTF8(str: string) {
  let encoder;
  return (
    encodeUTF8_ ??
    ((encoder = new (globalThis as any).TextEncoder()), (encodeUTF8_ = encoder.encode.bind(encoder)))
  )(str);
}

/**
 * 将 UTF-8 字节的 `Uint8Array` 解码回字符串。
 *
 * 使用浏览器/Node.js 内置的 `TextDecoder` API，并缓存解码器实例，
 * 以避免后续调用时重复分配开销。
 *
 * @param bytes - 包含 UTF-8 编码字节的 `Uint8Array`。
 * @returns 解码后的字符串。
 *
 * @example
 * ```ts
 * const bytes = new Uint8Array([72, 101, 108, 108, 111]);
 * const str = decodeUTF8(bytes);
 * // str => "Hello"
 * ```
 */
let decodeUTF8_: (bytes: Uint8Array) => string;
export function decodeUTF8(bytes: Uint8Array) {
  let decoder;
  return (
    decodeUTF8_ ??
    ((decoder = new (globalThis as any).TextDecoder()), (decodeUTF8_ = decoder.decode.bind(decoder)))
  )(bytes);
}
