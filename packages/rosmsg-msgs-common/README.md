# rosmsg-msgs-common

[![npm version](https://img.shields.io/npm/v/@lichtblick/rosmsg-msgs-common.svg?style=flat)](https://www.npmjs.com/package/@lichtblick/rosmsg-msgs-common)

This library exports a map of ROS 1 and ROS 2 datatype string keys to [@lichtblick/message-definition](https://github.com/lichtblick-suite/message-definition) `MessageDefinition` values for most common ROS 1 and ROS 2 message definitions. The ROS 1 message definitions were extracted from the `ros:noetic-robot-focal` Docker container using the `gendeps --cat` command. ROS 2 message definitions were extracted from [rcl_interfaces](https://github.com/ros2/rcl_interfaces), [common_interfaces](https://github.com/ros2/common_interfaces), and [unique_identifier_msgs](https://github.com/ros2/unique_identifier_msgs) repository branches using the [gendeps2](https://github.com/lichtblick-suite/rosmsg/blob/main/src/gendeps2.ts) utility.

## License

@lichtblick/rosmsg-msgs-common is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Releasing

1. Run `yarn version --[major|minor|patch]` to bump version
2. Run `git push && git push --tags` to push new tag
3. GitHub Actions will take care of the rest
