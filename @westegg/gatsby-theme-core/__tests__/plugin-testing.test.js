const { findPluginObject, findPluginString } = require("../plugin-testing")

describe("Find Plugin Object utility", () => {
  const PLUGIN_NAME = "sample-plugin"
  const findSample = findPluginObject(PLUGIN_NAME)

  it("returns undefined if given an undefined config", () => {
    const plugin = findSample()
    expect(plugin).toBeUndefined()
  })

  it("returns undefined if the config objectdoes not have a plugins array", () => {
    const config = {
      plugins: {}
    }
    const plugin = findSample(config)
    expect(plugin).toBeUndefined()
  })

  it("returns the first instance of an object where the resolve key equals the string provided", () => {
    const expectedOutput = {
      resolve: PLUGIN_NAME,
      options: {
        test: "random valud"
      }
    }
    const config = {
      plugins: [
        "random-plugin",
        expectedOutput,
        "another-random-plugin",
        {
          resolve: PLUGIN_NAME,
          options: {}
        }
      ]
    }
    const plugin = findSample(config)
    expect(plugin).toEqual(expectedOutput)
  })
})
