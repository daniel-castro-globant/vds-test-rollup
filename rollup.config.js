import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
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
            resolve({ resolveOnly: module => {
                console.log(module);
                return !module.includes('.scss')
            } }),
            babel({ presets: ["@babel/preset-react"] }),
            commonjs(),
            postcss(),
            terser(),
            copy({ targets: [
                { src: 'src/*.scss', dest: 'dist' },
                { src: 'src/fonts', dest: 'dist' }
            ]})
        ],
        external: [/\.scss$/],
    }
];