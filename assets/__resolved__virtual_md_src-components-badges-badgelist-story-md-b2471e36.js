const html = `<h1 id="badgelist" tabindex="-1">BadgeList <a class="header-anchor" href="#badgelist" aria-hidden="true">#</a></h1>
<p>The <code>BadgeList</code> component displays a collection of badges with filtering and sorting capabilities. It supports both grid and list layouts, pagination, and loading states.</p>
<h2 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h2>
<ul>
<li>When you need to display multiple badges in a collection</li>
<li>When you want to provide pagination for large collections of badges</li>
<li>When you need to show a loading state while badges are being fetched</li>
<li>When you want to provide different layout options (grid or list)</li>
</ul>
<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2>
<p>Use the controls in the right panel to customize the component behavior.</p>
<h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">BadgeList</span><span style="color: #C9D1D9"> :</span><span style="color: #79C0FF">badges</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">myBadges</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9"> /&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h3 id="list-layout" tabindex="-1">List Layout <a class="header-anchor" href="#list-layout" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">BadgeList</span><span style="color: #C9D1D9"> :</span><span style="color: #79C0FF">badges</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">myBadges</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">layout</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;list&quot;</span><span style="color: #C9D1D9"> /&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h3 id="with-pagination" tabindex="-1">With Pagination <a class="header-anchor" href="#with-pagination" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">BadgeList</span></span>
<span class="line"><span style="color: #C9D1D9">  :</span><span style="color: #79C0FF">badges</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">myBadges</span><span style="color: #C9D1D9">&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  :</span><span style="color: #79C0FF">page-size</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #79C0FF">10</span><span style="color: #C9D1D9">&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  :</span><span style="color: #79C0FF">current-page</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #79C0FF">1</span><span style="color: #C9D1D9">&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  :</span><span style="color: #79C0FF">show-pagination</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #79C0FF">true</span><span style="color: #C9D1D9">&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  @</span><span style="color: #79C0FF">page-change</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">handlePageChange</span><span style="color: #C9D1D9">&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">/&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h3 id="custom-empty-state" tabindex="-1">Custom Empty State <a class="header-anchor" href="#custom-empty-state" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">BadgeList</span><span style="color: #C9D1D9"> :</span><span style="color: #79C0FF">badges</span><span style="color: #C9D1D9">=</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">[]</span><span style="color: #C9D1D9">&quot;</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;template #empty&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;p&gt;No badges found. Earn your first badge!&lt;/p&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/template&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">BadgeList</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>badges</code></td>
<td><code>(OB2.Assertion | OB3.VerifiableCredential)[]</code></td>
<td>Required</td>
<td>Array of badges to display</td>
</tr>
<tr>
<td><code>layout</code></td>
<td><code>'grid' | 'list'</code></td>
<td><code>'grid'</code></td>
<td>Layout mode for displaying badges</td>
</tr>
<tr>
<td><code>interactive</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Whether badges are clickable</td>
</tr>
<tr>
<td><code>loading</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Whether to show loading state</td>
</tr>
<tr>
<td><code>pageSize</code></td>
<td><code>number</code></td>
<td><code>9</code></td>
<td>Number of badges to display per page</td>
</tr>
<tr>
<td><code>currentPage</code></td>
<td><code>number</code></td>
<td><code>1</code></td>
<td>Current page number</td>
</tr>
<tr>
<td><code>showPagination</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Whether to show pagination controls</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>string</code></td>
<td><code>'List of badges'</code></td>
<td>Accessibility label for the badge list</td>
</tr>
</tbody>
</table>
<h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Payload</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>badge-click</code></td>
<td><code>OB2.Assertion | OB3.VerifiableCredential</code></td>
<td>Emitted when a badge is clicked</td>
</tr>
<tr>
<td><code>page-change</code></td>
<td><code>number</code></td>
<td>Emitted when the current page changes</td>
</tr>
</tbody>
</table>
<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Props</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>empty</code></td>
<td>None</td>
<td>Content to display when there are no badges</td>
</tr>
<tr>
<td><code>badge</code></td>
<td><code>{ badge, normalized }</code></td>
<td>Custom badge rendering</td>
</tr>
</tbody>
</table>
<h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-hidden="true">#</a></h2>
<p>The component includes several accessibility features:</p>
<ul>
<li>The badge list has an appropriate ARIA label</li>
<li>Loading state is announced to screen readers</li>
<li>Empty state is announced to screen readers</li>
<li>Pagination controls are keyboard accessible</li>
</ul>
`;
const frontmatter = {};
const relativePath = "src/components/badges/BadgeList.story.md";
export {
  frontmatter,
  html,
  relativePath
};
//# sourceMappingURL=__resolved__virtual_md_src-components-badges-badgelist-story-md-b2471e36.js.map
