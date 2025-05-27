module.exports = {
  "branches": ["main"],
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      }
    }],
    [
      "@semantic-release/github", {
        "assets": [
          { "path": "Sources/AmplitudeEngagementSwift.xcframework.zip" },
        ]
    }],
    [
      "@google/semantic-release-replace-plugin",
      {
        "replacements": [
          {
            "files": ["AmplitudeEngagementSwift.podspec"],
            "from": "amplitude_engagement_version = \".*\"",
            "to": "amplitude_engagement_version = \"${nextRelease.version}\"",
            "results": [
              {
                "file": "AmplitudeEngagementSwift.podspec",
                "hasChanged": true,
                "numMatches": 1,
                "numReplacements": 1
              }
            ],
            "countMatches": true
          },
        ]
      }
    ],
    ["@semantic-release/git", {
      "assets": ["AmplitudeEngagementSwift.podspec", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "pod trunk push AmplitudeEngagementSwift.podspec --allow-warnings",
    }],
  ],
}
