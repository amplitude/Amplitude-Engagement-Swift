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
    dependencies: [
        .package(url: "https://github.com/amplitude/AmplitudeCore-Swift.git", from: "1.0.12"),
    ],
    targets: [
        .binaryTarget(
            name: "AmplitudeEngagementSwift",
            path: "Sources/AmplitudeEngagementSwift.xcframework"),
        .binaryTarget(name: "CQuickJS", path: "Sources/CQuickJS.xcframework"),
        .target(
            name: "AmplitudeEngagementTarget",
            dependencies: [
                .product(name: "AmplitudeCoreFramework", package: "AmplitudeCore-Swift"),
                .target(name: "AmplitudeEngagementSwift"),
                .target(name: "CQuickJS"),
            ],
            path: "Sources/Wrapper"
        )
    ],
)
