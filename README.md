# Rails/React Tutorial

I was following [this tutorial](https://www.pluralsight.com/guides/building-a-crud-interface-with-react-and-ruby-on-rails) to learn React and see what the newest stable Rails version (5.2) is like.

The tutorial was a little old (looks like it used an older version of Rails) so there were some differences in what I had to do to make it work.

Since Rails 5.2 includes webpacker I used it to generate a rails app with react (as shown in the end of [this post](https://medium.com/react-on-rails/free-tutorial-how-to-use-react-with-webpacker-and-rails-5-1-92af8e8d9d63).

## Some differences to the original tutorial
- This version of rails uses npm and yarn to manage javascript libraries and they're all compiled and run on a separate server as explained [here](https://github.com/rails/webpacker#development).
- The Javascript assets that need to be compiled are now located in the `/root/javascript` directory.
- I'm not using react-rails like in the tutorial so I made quite a few changes to the `*.js.jsx` files in the tutorial in order to make things work.

## More info...
- This project uses postgres but you can easily change that out to sqlite.
- The Foreman gem is used to run both the webpack server and rails server with just `foreman start`
