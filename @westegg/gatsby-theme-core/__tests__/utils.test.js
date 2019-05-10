/* eslint-disable global-require */
jest.mock("read-pkg-up", () => ({
  sync: jest.fn(() => ({ pkg: {} }))
}))

let readPkgUpSyncMock

beforeEach(() => {
  jest.resetModules()
  readPkgUpSyncMock = require("read-pkg-up").sync
})

const mockPkg = (pkg = {}) => {
  readPkgUpSyncMock.mockImplementationOnce(() => ({ pkg }))
}

describe("Package.json utils", () => {
  it("hasDevDependencies returns true if a package is in devDependencies", () => {
    mockPkg({ devDependencies: { typescript: "^3.2.2" } })
    expect(require("../utils").hasDevDependencies("typescript")).toBe(true)
    expect(require("../utils").hasDependencies("typescript")).toBe(false)
  })

  it("hasDependencies returns true if a package is in dependencies", () => {
    mockPkg({ dependencies: { react: "16.8.0" } })
    expect(require("../utils").hasDevDependencies("react")).toBe(false)
    expect(require("../utils").hasDependencies("react")).toBe(true)
  })
})
