// jest.config.js
module.exports = {
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)'],
     transform: {
    '^.+\\.jsx?$': 'babel-jest',
    },
    };
    
    