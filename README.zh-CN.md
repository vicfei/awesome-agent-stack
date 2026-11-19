# awesome-agent-stack

**agent 栈的源码级核证地图——分层、对比、由受治理的 agent 保持活着。**

不是又一个链接堆。从协议到治理共 13 层，每层一张机器周更的对比表，编辑笔记只在我们读过源码之后落笔（还没读的会老实标注）。

> 治理/准入/证据层（13）**在任何其他清单里都不存在**——我们查过。能找到的每张地图都停在编排层，这张不停。

## 十三层

| # | 层 | 回答的问题 |
|---|---|---|
| [01](atlas/01-foundations.md) | 基础与格式 | 大家都在借用的约定是什么？ |
| [02](atlas/02-tool-context.md) | 工具与上下文 | agent 怎么够到工具？（已定局层） |
| [03](atlas/03-agent-to-agent.md) | agent 间 | 独立 agent 怎么互相发现与委托？ |
| [04](atlas/04-agent-to-ui.md) | agent-界面 | 界面怎么驱动 agent？ |
| [05](atlas/05-harness-interfaces.md) | harness 接口 | 一套 API 驱动任意 harness——争夺中的槽位 |
| [06](atlas/06-runtimes.md) | 运行时与 harness | 谁在跑"模型↔工具↔文件"的循环？ |
| [07](atlas/07-orchestration.md) | 编排与蜂群 | 多 agent 怎么协同？ |
| [08](atlas/08-delivery.md) | 交付与 SOP | agent 的工作怎么变成受治理的交付？ |
| [09](atlas/09-cockpits.md) | 驾驶舱 | 人从哪里指挥舰队？ |
| [10](atlas/10-durable.md) | 持久执行 | 什么能挺过崩溃？ |
| [11](atlas/11-sandboxing.md) | 沙箱与基底 | 不受信的工作怎么隔离？ |
| [12](atlas/12-observability.md) | 可观测与日记 | agent 到底做了什么？ |
| [13](atlas/13-governance.md) | **治理、准入与证据** | 谁可以行动、凭什么证据、由谁批准？ |

## 怎么读

- 表格默认按 **90 天 commit 数**（维护度）排序而非 star（受众度）。star 照展示，但不作为排序。
- **`source-verified <日期>`** = 我们读过源码/跑过它，机制笔记亲手写的。**`not yet source-verified`** = 仅文档级。不装。
- **governance-adjacent** 列标记该条目是否自带策略/证据/人工审批面——大多数行是 ✗，这正是意义所在：让空白可见。

## 快速决策

- *选一个 coding agent 运行时* → [06](atlas/06-runtimes.md)
- *我在做要驱动多家 harness 的工具* → 先 [05](atlas/05-harness-interfaces.md)，编辑器场景加 [04](atlas/04-agent-to-ui.md)
- *想让 agent 们协作* → [07](atlas/07-orchestration.md)
- *需要信任它们做过的事（审计/证据/审批）* → [13](atlas/13-governance.md) 与 [12](atlas/12-observability.md)
- *在集群里跑 agent 工作负载* → [07](atlas/07-orchestration.md) + [10](atlas/10-durable.md) + [11](atlas/11-sandboxing.md)

## 心跳

指标每周由自动化刷新（`atlas/scripts/refresh.mjs` → PR → 人审合并），每次刷新落 [更新账本](ledger/updates.jsonl)。规则见 [EDITORIAL-POLICY.md](EDITORIAL-POLICY.md)——包括维护者关联项目与所有条目同一把尺那一条。

## 参与贡献

通过 PR 修改 `atlas/entries/data.mjs` 增改条目（仅编辑字段）。更正优先处理。详见 [EDITORIAL-POLICY.md](EDITORIAL-POLICY.md)。

## 致谢与许可

- 分层分类法站在 [awesome-agent-protocols](https://github.com/insodimension/awesome-agent-protocols) 的肩膀上（此处从协议扩展到全栈）。
- 内容许可：CC-BY-4.0；自动化代码：MIT。
