module.exports = {
  apps: [
    {
      name: 'live',
      script: './server/index.js',
      exec_mode: 'cluster',
      instances: process.env.MY_CPU_REQUEST || 1,
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
