# @lichtblick/rosbag2-web

> _ROS 2 (Robot Operating System) bag reader for the browser 👜_

[![npm version](https://img.shields.io/npm/v/@lichtblick/rosbag2-web.svg?style=flat)](https://www.npmjs.com/package/@lichtblick/rosbag2-web)

## Introduction

`rosbag2-web` enables web browsers to read the contents of ROS 2 SQLite files. It is used by [Lichtblick](https://github.com/lichtblick-suite) to support reading data in this legacy file format. This SQLite format has been superseded by [MCAP](https://mcap.dev).

## License

@lichtblick/rosbag2-web is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Releasing

1. Run `yarn version --[major|minor|patch]` to bump version
2. Run `git push && git push --tags` to push new tag
3. GitHub Actions will take care of the rest
