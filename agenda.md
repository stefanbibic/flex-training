# Flex training

Disclaimer: There are people signed up for this training that are not front end developers so this will be beginner level intro.

## How does it work

CSS flexbox is a one-dimensional layout pattern and one of the most popular ways for doing layouts today.

There are two main components in flex layout, that is the parent component which is the container and that sets the flex rule and then child components that follow those.
Once inside the flex container child components can also have properties that change their behaviour in boundaries set by the parent.

## Container props

1. display

- flex

2. flex-direction

- row (default)
- row-reverse
- column
- column-reverse

3. flex-wrap

- nowrap (default)
- wrap
- wrap-reverse

4. justify-content

- flex-start (default)
- flex-end
- center
- space-between
- space-around
- space-evenly

5. align-items

- stretch (default)
- flex-start
- flex-end
- center

## Child properties

1. order

- 0 (default)
- 1,2,3,4...

2. flex-grow

- 0 (default)
- 1,2,3,4...

3. flex-shrink

- 0
- 1 (default)
- 2,3,4...

4. flex-basis

- 0 (default)
- any size value

5. align-self

- stretch
- flex-start
- flex-end
- center
