import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "src/index.js",
        output: {
            file: "dist/main.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            del({ targets: 'dist/*' }),
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