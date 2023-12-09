import { createProxyMiddleware } from 'http-proxy-middleware'

const target = 'http://localhost:4000' // 대상 서버 주소로 변경해야 합니다.

module.exports = function (app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
