import type { MinAppType } from '@renderer/types'

const emptyApps: MinAppType[] = []
const noop = (_apps: MinAppType[]) => {}

export const useMinapps = () => {
  return {
    minapps: emptyApps,
    disabled: emptyApps,
    pinned: emptyApps,
    updateMinapps: noop,
    updateDisabledMinapps: noop,
    updatePinnedMinapps: noop
  }
}
