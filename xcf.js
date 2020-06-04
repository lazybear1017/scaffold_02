export const obj = {
  context: 'E:\\onlyG\\studyDemo\\everest\\react16',
  target: 'web',
  watch: true,
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\onlyG\\studyDemo\\everest\\react16\\build',
    publicPath: './',
    filename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'E:\\onlyG\\studyDemo\\everest\\react16\\src'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.json',
      '.wasm'
    ],
    mainFields: [
      'browser',
      'main',
      'module'
    ],
    modules: [
      'node_modules',
      'E:\\onlyG\\studyDemo\\everest\\react16\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      'E:\\onlyG\\studyDemo\\everest\\react16\\node_modules',
      'E:\\onlyG\\studyDemo\\everest\\react16\\node_modules\\@uyun\\cli-webpack\\node_modules'
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    hot: true,
    contentBase: 'E:\\onlyG\\studyDemo\\everest\\react16\\public',
    watchContentBase: true,
    publicPath: '',
    disableHostCheck: true,
    clientLogLevel: 'warning',
    compress: true,
    overlay: true,
    quiet: true,
    inline: true,
    proxy: [
      {
        context: [
          '/tenant/**',
          '/api/**',
          '/notify/**',
          '/frontend/**'
        ],
        target: 'http://newprod.dev.cn/'
      }
    ]
  },
  module: {
    rules: [
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('modules').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('css').oneOf('modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[local]--[hash:base64:7]'
                  },
                  sourceMap: true,
                  localsConvention: 'camelCaseOnly',
                  importLoaders: 1
                }
              },
              /* config.module.rule('css').oneOf('modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('modules').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('postcss').oneOf('modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[local]--[hash:base64:7]'
                  },
                  sourceMap: true,
                  localsConvention: 'camelCaseOnly',
                  importLoaders: 1
                }
              },
              /* config.module.rule('postcss').oneOf('modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('modules').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('stylus').oneOf('modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[local]--[hash:base64:7]'
                  },
                  sourceMap: true,
                  localsConvention: 'camelCaseOnly',
                  importLoaders: 1
                }
              },
              /* config.module.rule('stylus').oneOf('modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  preferPathResolver: 'webpack',
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  preferPathResolver: 'webpack',
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('modules').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('less').oneOf('modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[local]--[hash:base64:7]'
                  },
                  sourceMap: true,
                  localsConvention: 'camelCaseOnly',
                  importLoaders: 1
                }
              },
              /* config.module.rule('less').oneOf('modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                  plugins: [
                    {
                      minVersion: [
                        2,
                        1,
                        0
                      ],
                      options: {
                        themes: [
                          'white',
                          'blue'
                        ],
                        modules: true
                      }
                    }
                  ],
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('style-loader') */
              {
                loader: 'style-loader'
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  modules: false,
                  sourceMap: true,
                  importLoaders: 1
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                  plugins: [
                    {
                      minVersion: [
                        2,
                        1,
                        0
                      ],
                      options: {
                        themes: [
                          'white',
                          'blue'
                        ],
                        modules: false
                      }
                    }
                  ],
                  sourceMap: true
                }
              }
            ]
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      minSize: 614400,
      maxSize: 1024000
    },
    sideEffects: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true
  },
  plugins: [
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BABEL_ENV: '"development"',
          CMD: '"start"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(
      {
        activeModules: false
      }
    ),
    /* config.plugin('collect') */
    new CollectWebpackPlugin(
      {
        root: 'E:\\onlyG\\studyDemo\\everest\\react16'
      }
    ),
    /* config.plugin('ignore-moment') */
    new IgnorePlugin(
      {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      }
    ),
    /* config.plugin('html-index') */
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: 'E:\\onlyG\\studyDemo\\everest\\react16\\public\\index.html',
        templateParameters: function () { /* omitted long function */ },
        inject: true,
        chunksSortMode: 'auto',
        chunks: [
          'index'
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        compilationSuccessInfo: {
          messages: [
            '你的应用程序运行在: http://localhost:8081/'
          ],
          notes: [
            '你也能够使用下面地址访问: \n\n    http://192.168.0.106:8081/\n    http://127.0.0.1:8081/\n'
          ]
        },
        onErrors: function () { /* omitted long function */ }
      }
    )
  ],
  entry: {
    index: [
      './src/index.js'
    ]
  }
}
