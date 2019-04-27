/* eslint-disable global-require */
jest.mock("../utils", () => ({
  ...jest.requireActual("../utils"),
  hasDependencies: jest.fn(() => false),
  hasDevDependencies: jest.fn(() => false),
  get pkg() {
    return {
      dependencies: {},
      devDependencies: {}
    }
  }
}))
const { findPluginString, findPluginObject } = require("../plugin-testing")

let hasDependenciesMock
let hasDevDependenciesMock

beforeEach(() => {
  jest.resetModules()
  hasDependenciesMock = require("../utils").hasDependencies
  hasDevDependenciesMock = require("../utils").hasDevDependencies
})

const mockDeps = ({ dep = false, dev = false }) => {
  hasDependenciesMock.mockImplementation(() => dep)
  hasDevDependenciesMock.mockImplementation(() => dev)
}

describe("Gatsby Plugin Sitemap", () => {
  it("the sitemap option defaults to true and provides the sitemap plugin", () => {
    const config = require("../gatsby-config")()
    expect(config.plugins.includes("gatsby-plugin-sitemap")).toBeTruthy()
  })

  it("provides the sitemap plugin when the sitemap option is true", () => {
    const config = require("../gatsby-config")({ sitemap: true })
    expect(config.plugins.includes("gatsby-plugin-sitemap")).toBeTruthy()
  })

  it("does not provide the sitemap plugin when the sitemap option is false", () => {
    const config = require("../gatsby-config")({ sitemap: false })
    expect(config.plugins.includes("gatsby-plugin-sitemap")).toBeFalsy()
  })
})

describe("Gatsby Plugin Google Analytics", () => {
  const findAnalytics = findPluginObject("gatsby-plugin-google-analytics")

  it("does not add the analytics plugin if no option is passed", () => {
    const config = require("../gatsby-config")()
    const plugin = findAnalytics(config)
    expect(plugin).toBeUndefined()
  })

  it("adds the analytics plugin with defaults if the analytics option is a string", () => {
    const trackingId = "test-key"
    const expectedOptions = {
      trackingId,
      anonymize: true
    }
    const config = require("../gatsby-config")({ analytics: trackingId })
    const plugin = findAnalytics(config)

    expect(plugin).toBeDefined()
    expect(plugin.options).toEqual(expectedOptions)
  })

  it("accepts and merges an analytics settings object with a trackingId", () => {
    const settings = {
      trackingId: "sample-key"
    }
    const settingsExpected = {
      ...settings,
      anonymize: true
    }
    const config = require("../gatsby-config")({ analytics: settings })
    const plugin = findAnalytics(config)

    expect(plugin.options).toEqual(settingsExpected)
  })

  it("accepts an analytics settings object with overrides", () => {
    const overrideSettings = {
      trackingId: "another-key",
      anonymize: false
    }
    const config = require("../gatsby-config")({ analytics: overrideSettings })
    const plugin = findAnalytics(config)

    expect(plugin.options).toEqual(overrideSettings)
  })
})

describe("Gatsby Plugin TypeScript", () => {
  const hasTS = findPluginString("gatsby-plugin-typescript")

  it("adds the plugin if typescript is in the package devDependencies", () => {
    mockDeps({ dev: true })
    const config = require("../gatsby-config")()
    expect(hasTS(config)).toBe(true)
  })

  it("does not add the plugin if typescript is not in the package devDependencies or dependencies", () => {
    mockDeps({ dev: false, dep: false })
    const config = require("../gatsby-config")()
    expect(hasTS(config)).toBe(false)
  })
})

describe("Gatsby Plugin Emotion", () => {
  const hasEmotion = findPluginString("gatsby-plugin-emotion")

  it("adds the plugin if Emotion >= 10 is in the package dependencies", () => {
    mockDeps({ dep: true })
    const utils = require("../utils")
    const spy = jest.spyOn(utils, "pkg", "get")
    spy.mockReturnValueOnce({ dependencies: { "@emotion/core": "10.1.0" } })
    const config = require("../gatsby-config")()
    expect(hasEmotion(config)).toBe(true)
    spy.mockRestore()
  })

  it("does not add the plugin if Emotion < 10 is in the package dependencies", () => {
    mockDeps({ dep: true })
    const utils = require("../utils")
    const spy = jest.spyOn(utils, "pkg", "get")
    spy.mockReturnValueOnce({ dependencies: { "@emotion/core": "9.1.0" } })
    const config = require("../gatsby-config")()
    expect(hasEmotion(config)).toBe(false)
    spy.mockRestore()
  })

  it("does not add the plugin if Emotion is not in the package dependencies", () => {
    mockDeps({ dep: false })
    const config = require("../gatsby-config")()
    expect(hasEmotion(config)).toBe(false)
  })
})
