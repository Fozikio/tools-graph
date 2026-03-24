# @fozikio/tools-graph

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


Graph analysis plugin for cortex-engine. Inspect, link, and enrich the memory graph with connectivity reports, manual edges, and semantic suggestions.

## Install

```
npm install @fozikio/tools-graph
```

## Tools

| Tool | Description |
|------|-------------|
| `graph_report` | Graph connectivity report -- orphaned concepts, most/least connected nodes, category breakdown |
| `link` | Manually create a typed edge between two concepts (extends, refines, contradicts, supports, etc.) |
| `suggest_links` | Find potential links between a text and known concepts using embeddings |
| `suggest_tags` | Suggest tags for content based on semantic similarity to existing concepts |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-graph"
```

```typescript
import graphPlugin from "@fozikio/tools-graph";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [graphPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
