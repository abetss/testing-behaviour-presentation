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

### some articles from testing in toilet

- ToTT: test behavior not methods
- ToTT:don't put logic in tests
- ToTT: YANGI
- ToTT: Change-Detector Tests Considered Harmful
- React/Redux Integration Tests with Jest & Enzyme
- Write tests. Not too many. Mostly integration.
- How to apply the "Avoid Hasty Abstraction" principle to your test code.
- Write fewer, longer tests

