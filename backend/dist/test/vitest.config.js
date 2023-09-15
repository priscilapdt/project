"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
const rollup_plugin_swc_1 = __importDefault(require("rollup-plugin-swc"));
exports.default = (0, config_1.defineConfig)({
    plugins: [
        (0, rollup_plugin_swc_1.default)({
            jsc: {
                parser: {
                    syntax: "typescript",
                    // tsx: true, // If you use react
                    dynamicImport: true,
                    decorators: true,
                },
                target: "es2021",
                transform: {
                    decoratorMetadata: true,
                },
            },
        }),
    ],
    esbuild: false,
});
