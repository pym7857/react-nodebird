const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');    // gzip (확장자 .gz)

module.exports = withBundleAnalyzer({
    distDir: '.next',
    webpack(config) {
        //console.log('config:', config);                 // 기본적으로 next가 어떻게 웹팩을 설정하고 있나 확인가능 
        //console.log('rules', config.module.rules[0])    // 바벨을 최신문법을 그냥 쓸 수 있던게 아니라, next에서 처음부터 이렇게 제공을 해줬기 때문에 쓸 수 있던것.(= 처음부터 next에서 바벨로더를 넣어줬었음)
        const prod = process.env.NODE_ENV === 'production'
        const plugins = [
            ...config.plugins,
            new webpack.ContextReplacementPlugin(
                /moment[/\\]locale$/, 
                /^\.\/ko$/
            ),
        ];
        if (prod) {                                 // 배포 일때만, CompressionPlugin 사용하도록.
            plugins.push(new CompressionPlugin());  // CompressionPlugin(): 파일확장자를 .gz로 만들어줌.  ex) main.js.gz
        }
        return {
            ...config,
            // 기존 설정(config)에 덮어 씌울 부분 
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',  // hidden-source-map : 소스코드 숨기면서 에러시 소스맵 제공
                                                           // eval: 빠르게 웹팩 적용
            plugins,
        };
    },
});