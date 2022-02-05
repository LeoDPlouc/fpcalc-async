import { promisify } from "util"
import fpcalc from "fpcalc"

function fp1arg(arg, callback) {
    if (arg.options) fpcalc(arg.file, arg.options, callback)
    else fpcalc(arg.file, callback)
}

const fp = promisify(fp1arg)

async function fpcalcAsync(file, options) {
    var arg = { file: file }
    if (options) arg.options = options

    return await fp(arg)
}

export default fpcalcAsync