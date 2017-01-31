process.env.NODE_ENV = 'test';

const fs = require('fs');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc', "utf8"));

// eslint-disable-next-line func-names
module.exports = function (wallaby) {

    return {
        files: [
            'src/**/*.ts*',
            '!src/**/*.test.ts*',
        ],

        tests: [
            'src/**/*.test.ts*',
        ],

        preprocessors: {
            'src/**/*.js*': file => require('babel-core').transform(
                    file.content,
                    { sourceMap: true, presets: babelrc.env.test.presets }
                )
        },

        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--harmony',
            },
        },

        testFramework: 'jest',

        setup: (w) => {
            w.testFramework.configure({
                moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
            });
        },

    };
};
