import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockExecuteJavaScript = vi.fn().mockResolvedValue(undefined)
const mockGetMainWindow = vi.fn(() => ({
  webContents: {
    executeJavaScript: mockExecuteJavaScript
  }
}))

vi.mock('electron', () => ({
  ipcMain: {
    handle: vi.fn((_channel: string, handler: () => void) => {
      handler()
    })
  }
}))

vi.mock('@logger', () => ({
  loggerService: {
    withContext: () => ({
      debug: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn()
    })
  }
}))

vi.mock('../WindowService', () => ({
  windowService: {
    getMainWindow: () => mockGetMainWindow()
  }
}))

import { reduxService } from '../ReduxService'

describe('ReduxService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('dispatches actions to the renderer store', async () => {
    await reduxService.dispatch({ type: 'llm/updateProvider', payload: { id: 'openai', apiKey: 'new-key' } })

    expect(mockExecuteJavaScript).toHaveBeenCalled()
  })
})
