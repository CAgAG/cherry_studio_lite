import type { AssistantPreset } from '@renderer/types'

export const getAgentsFromSystemAgents = (systemAgents: any) => {
  const agents: AssistantPreset[] = []
  for (let i = 0; i < systemAgents.length; i++) {
    for (let j = 0; j < systemAgents[i].group.length; j++) {
      const agent = {
        ...systemAgents[i],
        group: systemAgents[i].group[j],
        topics: [],
        type: 'agent'
      } as AssistantPreset
      agents.push(agent)
    }
  }
  return agents
}

const EMPTY_SYSTEM_PRESETS: AssistantPreset[] = []

/** Built-in assistant presets are not shipped in this fork. */
export function useSystemAssistantPresets() {
  return EMPTY_SYSTEM_PRESETS
}

export function groupByCategories(data: AssistantPreset[]) {
  const groupedMap = new Map<string, AssistantPreset[]>()
  data.forEach((item) => {
    item.group?.forEach((category) => {
      if (!groupedMap.has(category)) {
        groupedMap.set(category, [])
      }
      groupedMap.get(category)?.push(item)
    })
  })
  const result: Record<string, AssistantPreset[]> = {}
  Array.from(groupedMap.entries()).forEach(([category, items]) => {
    result[category] = items
  })
  return result
}
