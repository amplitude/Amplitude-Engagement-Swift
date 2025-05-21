// swift-tools-version: 6.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Amplitude-Engagement-Swift",
    platforms: [
        .iOS(.v15),
    ],
    products: [
      .library(name: "AmplitudeEngagementSwift", targets: ["AmplitudeEngagementTarget"])
    ],
    dependencies: [],
    targets: [
        .binaryTarget(
            name: "AmplitudeEngagementSwift",
            path: "Sources/AmplitudeEngagementSwift.xcframework"),
       .binaryTarget(
           name: "AmplitudeSwift",
           path: "Sources/AmplitudeSwift.xcframework"),
        .binaryTarget(
            name: "AmplitudeCore",
            path: "Sources/AmplitudeCore.xcframework"),
        .binaryTarget(
            name: "AnalyticsConnector",
            path: "Sources/AnalyticsConnector.xcframework"),
        // Wrapper target that depends on both the binary framework and its dependencies
        // needed because you can't specify dependencies 
        .target(
            name: "AmplitudeEngagementTarget",
            dependencies: [
                .targetItem(name: "AmplitudeEngagementSwift", condition: nil),
                .targetItem(name: "AmplitudeSwift", condition: nil),
                .targetItem(name: "AmplitudeCore", condition: nil),
                .targetItem(name: "AnalyticsConnector", condition: nil)
            ],
            path: "Sources/Wrapper"
        )
    ],
)
