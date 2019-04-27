const filterPluginObjects = config => {
  if (typeof config === "object" && Array.isArray(config.plugins)) {
    return config.plugins.filter(p => typeof p === "object")
  }
  return undefined
}

const findPluginObject = pluginName => config => {
  const plugins = filterPluginObjects(config)
  if (!plugins) {
    return undefined
  }
  return plugins.find(p => p.resolve === pluginName)
}

const findPluginString = pluginName => config =>
  config.plugins.includes(pluginName)

module.exports = { findPluginString, findPluginObject }
