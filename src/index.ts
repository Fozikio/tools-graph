/**
 * @fozikio/tools-graph — graph tools plugin for cortex-engine.
 *
 * Provides 4 tools: graph_report, link, suggest_links, suggest_tags.
 * Uses the generic CortexStore API and embedding/LLM providers.
 */

import type { ToolPlugin } from '@fozikio/cortex-engine';
import { graphReportTool } from './tools/graph-report.js';
import { linkTool } from './tools/link.js';
import { suggestLinksTool } from './tools/suggest-links.js';
import { suggestTagsTool } from './tools/suggest-tags.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-graph',
  tools: [
    graphReportTool,
    linkTool,
    suggestLinksTool,
    suggestTagsTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { graphReportTool } from './tools/graph-report.js';
export { linkTool } from './tools/link.js';
export { suggestLinksTool } from './tools/suggest-links.js';
export { suggestTagsTool } from './tools/suggest-tags.js';
