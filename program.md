# baseball-site Performance Optimization Program

## Objective

Optimize the baseball-site (http://localhost:3509) to achieve fast load times suitable for production use. The site currently takes ~2.9s due to external dependencies.

## Target Metrics

| Metric | Current | Goal | Status |
|--------|---------|------|--------|
| Total Load Time | 2933 ms | < 500ms | ⚠️ needs work |
| DOM Content Loaded | 2933 ms | < 400ms | ⚠️ needs work |
| External API Calls | 1 (Google Fonts) | 0 | ⚠️ external dependency |

## Benchmark Tool

Use `benchmark.mjs` to measure progress:

```bash
node benchmark.mjs http://localhost:3509
```

The benchmark will report:
- Simple metrics (quick navigation timing)
- Detailed metrics (full resource breakdown)
- Per-resource transfer sizes and durations

## Optimization Constraints

**You CAN modify:**
- `public/index.html` — HTML structure, resources, fonts
- `public/app.js` — client-side logic, lazy loading strategies
- `server.js` — server configuration, caching, compression
- Any new files under `public/`

**The baseline is intentionally unoptimized** (see `server.js` comment). Build from there.

## What Makes This Site "Slow"

From the benchmark output:

```
[1] https://fonts.googleapis.com/css2?family=R...    | 2908.2ms | Transfer: 2 KB
```

The external Google Fonts API call is blocking and takes ~2.9s. This dominates all other resources combined (8ms).

### Known Slow Resources (from benchmark):
1. **Google Fonts API** - 2908ms, 2KB, external network hop
2. `vendor/lodash.min.js` - 3.2ms, 300 bytes
3. `app.js` - 3.5ms, 300 bytes  
4. Image assets (combined ~138ms)

## Optimization Strategies to Explore

### 1. Eliminate External Dependencies
- Replace Google Fonts with system fonts (`Inter`, `Arial`, etc.)
- Inline critical CSS or use local font files
- Remove external font API entirely if possible

### 2. Server-Side Optimizations
- Enable ETag and content caching headers
- Add gzip/brotli compression
- Configure immutable cache for static assets
- Optimize image delivery (responsive images, next-gen formats)

### 3. Client-Side Strategies
- Lazy load non-critical JavaScript
- Defer non-essential resources until after paint
- Use resource hints (`preconnect`, `dns-prefetch`) where needed

### 4. Code & Asset Reduction
- Remove unused dependencies (lodash?)
- Inline or minify critical code paths
- Compress image assets

## Experimentation Loop

1. Modify a file with an optimization idea
2. Commit with clear message: `git commit -m "Optimize: <what was done>"`
3. Run benchmark: `node benchmark.mjs http://localhost:3509`
4. Check if metrics improved: val_bpb -> Total Load Time (lower is better)
5. If improved: keep the change, advance the branch
6. If worse or equal: revert and try something else

## Result Logging

Log experiments to a results file in TSV format:

```
commit	total_ms	dom_ms	status	description
a1b2c3d	2933	2933	keep	baseline (unoptimized)
b2c3d4e	245	240	keep	remove Google Fonts, use system font
```

Columns:

- `commit` — git commit hash (7 chars)
- `total_ms` — total load time from benchmark
- `dom_ms` — DOM content loaded time from benchmark
- `status` — `keep`, `discard`, or `crash`
- `description` — short description of what was changed

## Success Criteria

The site is "production-ready" when:
- **Total Load Time < 500ms** (ideally < 300ms)
- No external blocking API calls
- Images cached with proper headers
- Minimal client-side dependencies

## Notes

- The server runs on `localhost:3509` — ensure it's running before benchmarking
- Benchmark uses Playwright + modern performance APIs for accurate timing
- All resources are served from the `public/` directory via Express static middleware
