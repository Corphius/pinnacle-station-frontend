module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
    },
    {
      test: /\.(jpg|jpeg|png|svg)$/,
      use: {
        loader: 'url-loader'
      }
    }
  ]
}

