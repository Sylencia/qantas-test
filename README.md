### Limitations

- getRatingDisplay did not have tests written as I haven't figured out how to make Jest work with CSS modules properly.

In an ideal scenario, it'd handle ratings of less than 0 and greater than 5 somehow from which the tests would test them for both stars and self rating. It'd then test 0 star, 5 star, and half star scenarios. Given the overall spread available it wouldn't be unfeasible to simply write a test for every possible scenario from 0 to 5 stars and 0 to 5 self rating (and tests outside either side).

### Credits

getRatingDisplay mostly used code provided by: https://coderwall.com/p/iml9ka/star-ratings-in-css-utf8
