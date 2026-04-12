// Benchmark runner for baseball-site using Playwright with modern metrics
// Measures web load time on localhost:3509

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PYTHON_SCRIPT = `"""Web Load Time Measurement using Playwright with Modern Metrics."""

import asyncio
from playwright.async_api import async_playwright


async def measure_simple(url):
    """Measure basic load time metrics using modern performance APIs."""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        timing_data = await page.evaluate("() => { const navEntry = performance.getEntriesByType('navigation')[0]; if (navEntry && navEntry.loadEventEnd !== undefined) { return { navigationStart: navEntry.fetchStart, domContentLoadedEventEnd: navEntry.domContentLoadedEventEnd, loadEventEnd: navEntry.loadEventEnd, fetchStart: navEntry.fetchStart }; } return { navigationStart: 0, domContentLoadedEventEnd: 0, loadEventEnd: 0, fetchStart: 0 }; }")

        await browser.close()

        return {
            "totalLoadTime": round(timing_data["loadEventEnd"] - timing_data["navigationStart"], 2),
            "domContentLoadedTime": round(timing_data["domContentLoadedEventEnd"] - timing_data["navigationStart"], 2)
        }


async def measure_detailed(url):
    """Measure detailed load time metrics with modern performance APIs."""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        print(f"Loading {url}...")

        response = await page.goto(url, wait_until="domcontentloaded")
        await page.wait_for_load_state("networkidle", timeout=30000)

        metrics = await page.evaluate("() => { const navEntry = performance.getEntriesByType('navigation')[0]; if (navEntry && navEntry.loadEventEnd !== undefined) { return { navigationStart: navEntry.fetchStart, domContentLoadedEventEnd: navEntry.domContentLoadedEventEnd, loadEventEnd: navEntry.loadEventEnd, fetchStart: navEntry.fetchStart }; } return { navigationStart: 0, domContentLoadedEventEnd: 0, loadEventEnd: 0, fetchStart: 0 }; }")

        resources = await page.evaluate("() => { const resources = performance.getEntriesByType('resource'); return resources.map(r => ({ name: r.name, initiatorType: r.initiatorType || 'unknown', duration: r.duration, transferSize: r.transferSize || null })); }")

        await browser.close()

        navStart = metrics.get("navigationStart") or 0
        domContentLoadedEnd = metrics.get("domContentLoadedEventEnd") or 0
        loadEventEnd = metrics.get("loadEventEnd") or 0

        totalLoadTime = loadEventEnd - navStart
        domContentLoadedTime = domContentLoadedEnd - navStart

        return {
            "url": url,
            "totalLoadTime": round(totalLoadTime, 2),
            "domContentLoadedTime": round(domContentLoadedTime, 2),
            "dnsLookupTime": "N/A (localhost)",
            "redirectTime": "N/A (no redirect)",
            "resources_count": len(resources),
            "responseStatus": response.status if response else None,
            "resourceDetails": [{"name": r["name"][:50], "duration": round(r["duration"], 2) or 0, "transferSize": r["transferSize"] or "-"} for r in resources]
        }


async def main(url=None):
    """Main entry point."""
    target_url = url or "http://localhost:3509"

    print("\\n" + "=" * 60)
    print("Web Load Time Measurement (Modern Metrics)")
    print(f"Target: {target_url}")
    print("=" * 60 + "\\n")

    simple_result = await measure_simple(target_url)
    print("Simple Metrics:")
    print(f"  Total Load Time:        {simple_result['totalLoadTime']:.2f} ms")
    print(f"  DOM Content Loaded:     {simple_result['domContentLoadedTime']:.2f} ms\\n")

    detailed_result = await measure_detailed(target_url)
    print("Detailed Metrics:")
    print(f"  Total Load Time:        {detailed_result['totalLoadTime']:.2f} ms")
    print(f"  DOM Content Loaded:     {detailed_result['domContentLoadedTime']:.2f} ms")
    print(f"  DNS Lookup Time:        {detailed_result['dnsLookupTime']}")
    print(f"  Redirect Time:          {detailed_result['redirectTime']}")
    print(f"  Resources Loaded:       {detailed_result['resources_count']}")
    print(f"  HTTP Status:            {detailed_result['responseStatus']}\\n")

    if detailed_result.get("resourceDetails") and len(detailed_result["resourceDetails"]) > 0:
        print("Resource Breakdown:")
        for i, res in enumerate(detailed_result["resourceDetails"], 1):
            name = f"{res['name']}"
            if len(name) > 45:
                name = name[:42] + "..."
            print(f"  [{i}] {name:<48} | {res['duration']}ms | Transfer: {res['transferSize']}")

    return detailed_result


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Measure website load times using modern performance metrics")
    parser.add_argument("url", nargs="?", help="Target URL (default: http://localhost:3509)")
    args = parser.parse_args()
    asyncio.run(main(args.url))
`

export async function runBenchmark(targetUrl = 'http://localhost:3509') {
    const originalPath = 'L:/code/dev/ai/autoresearch/original';
    const pythonPath = originalPath;
    const evalDir = path.join(pythonPath, 'eval');
    const scriptFile = path.join(evalDir, 'web_load_time.py');

    console.log(`Python script path: ${scriptFile}`);

    return new Promise((resolve, reject) => {
        const pythonCheck = spawn('python', ['--version'], { cwd: pythonPath });
        let versionOutput = '';

        pythonCheck.stdout.on('data', (data) => { versionOutput += data; });
        pythonCheck.stderr.on('data', (data) => { reject(new Error(data)); });
        pythonCheck.on('close', (code) => {
            if (!versionOutput || code !== 0) {
                console.error('Error: Python not found. Please install Python.');
                return resolve(null);
            }

            fs.access(evalDir, function(err) {
                if (err) {
                    console.log('Creating eval directory...');
                    fs.mkdirSync(evalDir, { recursive: true });
                }
            });

            const webLoadTimePath = path.join(evalDir, 'web_load_time.py');

            fs.access(webLoadTimePath, function(err) {
                if (err) {
                    console.log('Creating web_load_time.py...');
                    fs.writeFile(webLoadTimePath, PYTHON_SCRIPT, 'utf-8', (writeErr) => {
                        if (writeErr) {
                            reject(writeErr);
                            return;
                        }
                    });
                }
            });

            const child = spawn('python', [webLoadTimePath], {
                cwd: pythonPath,
                stdio: 'inherit'
            });

            child.on('close', (code) => {
                console.log(`\\nPython benchmark completed with exit code ${code}`);
                resolve(code === 0);
            });

            child.on('error', (err) => {
                console.error('Failed to spawn Python script:', err.message);
                reject(err);
            });
        });
    });
}

// Run if executed directly
if (import.meta.url === `file:///L:/code/dev/ai/autoresearch/baseball-site/benchmark.mjs`) {
  const url = process.argv[2] || 'http://localhost:3509';
  console.log(`Starting benchmark on ${url}...`);
  runBenchmark(url).then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
