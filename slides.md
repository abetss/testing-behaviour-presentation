## What are the values we care when writing tests?

-- the more confidence it gives us the better
-- the less false alarm it gives the better
-- the cheaper to write the better
-- the cheaper to maintain the better
-- the cheaper they execute the better
-- the more readable the better


































## But what does it mean more confidence

-- the methods work as expected
-- verifies the behavior of a group of methods
-- verifies the behavior of the app in relation to user interaction
























### Questions
-- Can one of these take priority over the others





















































## Whats ideal
Most confidence with the least number of (cheap and expensive) tests?

-- The higher on the abstraction layer we can test that is still cheap
-- react is big (almost) pure function



(show diagram)


























## Some benefits of testing the <App /> component
-- every QA bug we can actually write an cheap integration test for it
-- able to write tests that includes the routing and the data layer
-- not having to write tests for reducers, saga, selectors, utils and components
-




























## Reading materials

### from testing in toilet

- [ToTT: test behavior not methods](https://testing.googleblog.com/2014/04/testing-on-toilet-test-behaviors-not.html)
- [ToTT:don't put logic in tests](https://testing.googleblog.com/2014/07/testing-on-toilet-dont-put-logic-in.html)
- [ToTT: YANGI](https://testing.googleblog.com/2017/08/code-health-eliminate-yagni-smells.html)
- [ToTT: Change-Detector Tests Considered Harmful](https://testing.googleblog.com/2015/01/testing-on-toilet-change-detector-tests.html)


### about benefits of writing more integration tests
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [React/Redux Integration Tests with Jest & Enzyme](https://www.freecodecamp.org/news/real-integration-tests-with-react-redux-and-react-router-417125212638/)
- [Integration Testing with React and Enzyme (ebay)](https://tech.ebayinc.com/engineering/integration-testing-with-react-and-enzyme/)

### testing code smell
- [How to apply the "Avoid Hasty Abstraction" principle to your test code.](https://kentcdodds.com/blog/aha-testing)
- [Write fewer, longer tests](https://kentcdodds.com/blog/write-fewer-longer-tests)

## example code
[integration test of react with redux](https://github.com/abetss/rates-scout/blob/master/src/features/rates/tests/rates.test.js)
