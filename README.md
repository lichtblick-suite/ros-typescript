# ROS TypeScript monorepo

This repository is home to several TypeScript-based NPM packages for ROS 1 and ROS 2 support.

| Package                                                                 | License    | Version                                                                                                                                                                        | Description                                                                                                            |
| ----------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [`@lichtblick/ros1`](./packages/ros1)                                   | MIT        | [![@lichtblick/ros1 on NPM](https://img.shields.io/npm/v/@lichtblick/ros1)](https://www.npmjs.com/package/@lichtblick/ros1)                                                    | Standalone TypeScript implementation of the ROS 1 protocol using `@lichtblick/xmlrpc` with a pluggable transport layer |
| [`@lichtblick/rosbag`](./packages/rosbag)                               | Apache-2.0 | [![@lichtblick/rosbag on NPM](https://img.shields.io/npm/v/@lichtblick/rosbag)](https://www.npmjs.com/package/@lichtblick/rosbag)                                              | Node.js & browser compatible module for reading rosbag binary data files                                               |
| [`@lichtblick/rosbag2`](./packages/rosbag2)                             | MIT        | [![@lichtblick/rosbag2 on NPM](https://img.shields.io/npm/v/@lichtblick/rosbag2)](https://www.npmjs.com/package/@lichtblick/rosbag2)                                           | ROS 2 legacy SQLite bag reader abstract implementation                                                                 |
| [`@lichtblick/rosbag2-node`](./packages/rosbag2-node)                   | MIT        | _not published_                                                                                                                                                                | ROS 2 legacy SQLite bag reader for Node.js                                                                             |
| [`@lichtblick/rosbag2-web`](./packages/rosbag2-web)                     | MIT        | [![@lichtblick/rosbag2-web on NPM](https://img.shields.io/npm/v/@lichtblick/rosbag2-web)](https://www.npmjs.com/package/@lichtblick/rosbag2-web)                               | ROS 2 legacy SQLite bag reader for the browser                                                                         |
| [`@lichtblick/rosmsg`](./packages/rosmsg)                               | MIT        | [![@lichtblick/rosmsg on NPM](https://img.shields.io/npm/v/@lichtblick/rosmsg)](https://www.npmjs.com/package/@lichtblick/rosmsg)                                              | ROS 1 and ROS 2 message definition parser                                                                              |
| [`@lichtblick/rosmsg-msgs-common`](./packages/rosmsg-msgs-common)       | MIT        | [![@lichtblick/rosmsg-msgs-common on NPM](https://img.shields.io/npm/v/@lichtblick/rosmsg-msgs-common)](https://www.npmjs.com/package/@lichtblick/rosmsg-msgs-common)          | Common ROS message definitions using `@lichtblick/rosmsg`                                                              |
| [`@lichtblick/rosmsg-serialization`](./packages/rosmsg-serialization)   | MIT        | [![@lichtblick/rosmsg-serialization on NPM](https://img.shields.io/npm/v/@lichtblick/rosmsg-serialization)](https://www.npmjs.com/package/@lichtblick/rosmsg-serialization)    | ROS 1 message serialization                                                                                            |
| [`@lichtblick/rosmsg2-serialization`](./packages/rosmsg2-serialization) | MIT        | [![@lichtblick/rosmsg2-serialization on NPM](https://img.shields.io/npm/v/@lichtblick/rosmsg2-serialization)](https://www.npmjs.com/package/@lichtblick/rosmsg2-serialization) | ROS 2 message serialization using `@lichtblick/cdr`                                                                    |
| [`@lichtblick/rostime`](./packages/rostime)                             | MIT        | [![@lichtblick/rostime on NPM](https://img.shields.io/npm/v/@lichtblick/rostime)](https://www.npmjs.com/package/@lichtblick/rostime)                                           | ROS Time and Duration primitives and helper methods                                                                    |
| [`@lichtblick/xmlrpc`](./packages/xmlrpc)                               | MIT        | [![@lichtblick/xmlrpc on NPM](https://img.shields.io/npm/v/@lichtblick/xmlrpc)](https://www.npmjs.com/package/@lichtblick/xmlrpc)                                              | XMLRPC client and server with pluggable server backend                                                                 |

## Development

- `yarn lint`: run lint on specified file(s), or all files if not specified
- `yarn build`: build all packages in topological order
- `yarn test`: run all tests

## Publishing

Packages are published via the `Publish to NPM` workflow, which runs when a GitHub Release is published. To release a package:

1. Bump the `version` in the target package's `package.json` to match the version you intend to release.
2. Create a release in the [GitHub Releases UI](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release) using a tag named `packagename/vX.Y.Z` (e.g. `rosbag/v1.2.3`). The package name is parsed from the tag prefix.
3. Publishing the release triggers the workflow, which builds the package and its dependencies in topological order and runs `npm publish` for just that package with provenance.
