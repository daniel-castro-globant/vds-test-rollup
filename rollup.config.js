import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./packages/button/package.json");

export default [
    {
        input: "src/index.js",
        output: {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            babel({ presets: ["@babel/preset-react"] }),
            commonjs(),
            terser(),
            copy({ targets: [
                { src: 'src/*.scss', dest: 'dist' },
                { src: 'src/fonts', dest: 'dist' }
            ]})
        ],
        external: [/\.scss$/],
    }
];