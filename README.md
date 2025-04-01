# Dog Breed Explorer - SFWRTECH 4WP3 Assignment #8

## Overview

This is a mobile application built with **React Native** using the Expo Snack IDE. The app allows users to explore dog images by fetching data from the [Dog API](https://dog.ceo/dog-api/). Users can either retrieve a random dog image or search for an image of a specific breed.

## Features

- **Random Dog Image**: Click "Get Random Dog" to fetch a random dog image from the Dog API.
- **Breed-Specific Search**: Enter a breed (e.g., "husky") in the text input and click "Get Breed Dog" to fetch an image of that breed.
- **Dynamic Display**: Results are shown in a list with an image and title, styled using Flexbox for a custom layout.

## Requirements Met

- **Web Service**: Uses the Dog API (https://dog.ceo/api/).
- **Parameter**: Breed name from user input is passed as a parameter (e.g., `/breed/husky/images/random`).
- **React Native Components**:
  - `TextInput`: For entering a dog breed.
  - `Button`: Two buttons ("Get Random Dog" and "Get Breed Dog").
  - `FlatList`: Displays fetched dog data.
  - `Image`: Shows the dog picture.
- **Flexbox**: Custom layout with header, input section, button row, and list area.

## Live view of the project on Expo app

[Expo App Preview](exp://u.expo.dev/933fd9c0-1666-11e7-afca-d980795c5824?runtime-version=exposdk%3A52.0.0&channel-name=production&snack=%40jaiv24%2Ffetch-dog&snack-channel=XlwI1BVezo)
