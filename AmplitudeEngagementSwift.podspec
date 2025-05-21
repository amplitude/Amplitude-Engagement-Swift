amplitude_version = "0.0.1" # Version is managed automatically by semantic-release, please don't change it manually

Pod::Spec.new do |s|
  s.name                   = "AmplitudeEngagementSwift"
  s.version                = amplitude_version
  s.summary                = "Amplitude Engagement SDK for Guides & Surveys"
  s.homepage               = "https://amplitude.com"
  s.license                = { :type => "MIT" }
  s.author                 = { "Amplitude" => "dev@amplitude.com" }
  s.source                 = { :git => "https://github.com/amplitude/Amplitude-Engagement-Swift.git", :tag => "v#{s.version}" }

  s.swift_version = '5.9'

  s.ios.deployment_target  = '15.0'
  # s.ios.resource_bundle    = { 'AmplitudeEngagement': ['Sources/AmplitudeEngagement/Resources/engagement.js'] }
  s.ios.vendored_frameworks = [
    'Sources/AmplitudeEngagementSwift.xcframework',
  ]

  s.dependency 'AmplitudeCore', '>=1.0.12', '<2.0.0'

  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES' }
end
