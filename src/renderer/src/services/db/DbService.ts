/**
 * @deprecated Scheduled for removal in v2.0.0
 * --------------------------------------------------------------------------
 * ⚠️ NOTICE: V2 DATA&UI REFACTORING (by 0xfullex)
 * --------------------------------------------------------------------------
 * STOP: Feature PRs affecting this file are currently BLOCKED.
 * Only critical bug fixes are accepted during this migration phase.
 *
 * This file is being refactored to v2 standards.
 * Any non-critical changes will conflict with the ongoing work.
 *
 * 🔗 Context & Status:
 * - Contribution Hold: https://github.com/CherryHQ/cherry-studio/issues/10954
 * - v2 Refactor PR   : https://github.com/CherryHQ/cherry-studio/pull/10162
 * --------------------------------------------------------------------------
 */
import type { Message, MessageBlock } from '@renderer/types/newMessage'

import { DexieMessageDataSource } from './DexieMessageDataSource'
import type { MessageDataSource } from './types'

class DbService implements MessageDataSource {
  private static instance: DbService
  private dexieSource: DexieMessageDataSource

  private constructor() {
    this.dexieSource = new DexieMessageDataSource()
  }

  static getInstance(): DbService {
    if (!DbService.instance) {
      DbService.instance = new DbService()
    }
    return DbService.instance
  }

  fetchMessages(topicId: string, _forceReload?: boolean) {
    return this.dexieSource.fetchMessages(topicId)
  }

  getRawTopic(topicId: string) {
    return this.dexieSource.getRawTopic(topicId)
  }

  appendMessage(topicId: string, message: Message, blocks: MessageBlock[], insertIndex?: number) {
    return this.dexieSource.appendMessage(topicId, message, blocks, insertIndex)
  }

  updateMessage(topicId: string, messageId: string, updates: Partial<Message>) {
    return this.dexieSource.updateMessage(topicId, messageId, updates)
  }

  updateMessageAndBlocks(
    topicId: string,
    messageUpdates: Partial<Message> & Pick<Message, 'id'>,
    blocksToUpdate: MessageBlock[]
  ) {
    return this.dexieSource.updateMessageAndBlocks(topicId, messageUpdates, blocksToUpdate)
  }

  deleteMessage(topicId: string, messageId: string) {
    return this.dexieSource.deleteMessage(topicId, messageId)
  }

  deleteMessages(topicId: string, messageIds: string[]) {
    return this.dexieSource.deleteMessages(topicId, messageIds)
  }

  updateBlocks(blocks: MessageBlock[]) {
    return this.dexieSource.updateBlocks(blocks)
  }

  deleteBlocks(blockIds: string[]) {
    return this.dexieSource.deleteBlocks(blockIds)
  }

  clearMessages(topicId: string) {
    return this.dexieSource.clearMessages(topicId)
  }

  topicExists(topicId: string) {
    return this.dexieSource.topicExists(topicId)
  }

  ensureTopic(topicId: string) {
    return this.dexieSource.ensureTopic(topicId)
  }

  updateSingleBlock(blockId: string, updates: Partial<MessageBlock>) {
    return this.dexieSource.updateSingleBlock(blockId, updates)
  }

  bulkAddBlocks(blocks: MessageBlock[]) {
    return this.dexieSource.bulkAddBlocks(blocks)
  }

  updateFileCount(fileId: string, delta: number, deleteIfZero: boolean = false) {
    return this.dexieSource.updateFileCount(fileId, delta, deleteIfZero)
  }

  updateFileCounts(files: Array<{ id: string; delta: number; deleteIfZero?: boolean }>) {
    return this.dexieSource.updateFileCounts(files)
  }
}

export const dbService = DbService.getInstance()

export { DbService }
