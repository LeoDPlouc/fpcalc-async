declare module "fpcalc-async" {
    import { FpcalcOptions, FpcalcResult } from "fpcalc";

    function fpcalcAsync(file: string | ReadableStream): Promise<FpcalcResult<string>>
    function fpcalcAsync(file: string | ReadableStream, options: FpcalcOptions & { raw: true }): Promise<FpcalcResult<Buffer>>
    function fpcalcAsync(file: string | ReadableStream, options: FpcalcOptions & { raw: false }): Promise<FpcalcResult<string>>

    export default fpcalcAsync
}

declare module "fpcalc" {
    export interface FpcalcOptions {
        length?: number
        raw?: boolean
        command?: string
    }

    export interface FpcalcResult<T extends Buffer | string> {
        file?: string
        duration?: number
        fingerprint: T
    }

    function fpcalc(file: string | ReadableStream, callback: (err: Error, result: FpcalcResult<string>) => void)
    function fpcalc(file: string | ReadableStream, options: FpcalcOptions & { raw: true }, callback: (err: Error, result: FpcalcResult<Buffer>) => void)
    function fpcalc(file: string | ReadableStream, options: FpcalcOptions & { raw: false }, callback: (err: Error, result: FpcalcResult<string>) => void)

    export default fpcalc
}