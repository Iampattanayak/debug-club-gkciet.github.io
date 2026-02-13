import os
import shutil
import urllib.request
import subprocess
import sys

def on_rm_error(func, path, exc_info):
    # path contains the path of the file that couldn't be removed
    # let's just assume that it's read-only and unlink it.
    import stat
    os.chmod(path, stat.S_IWRITE)
    os.unlink(path)

def copy_dir(src, dst):
    # dirs_exist_ok=True allows overwriting existing directories
    # create parent dir if not exists
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copytree(src, dst, dirs_exist_ok=True)
    print(f"Copied {src} to {dst}")

def download_file(url, dst):
    print(f"Downloading {url} to {dst}")
    urllib.request.urlretrieve(url, dst)

def run_pygmentize(style, output_file):
    print(f"Generating {output_file} with style {style}")
    # pygmentize -S default -f html -a .highlight > _sass/default.scss
    try:
        # Try running as a module first to avoid path issues
        cmd = [sys.executable, "-m", "pygments.cmdline", "-S", style, "-f", "html", "-a", ".highlight"]
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        with open(output_file, "w", encoding='utf-8') as f:
            f.write(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error running pygments: {e}")
        print(f"Stderr: {e.stderr}")
    except Exception as e:
        print(f"Failed to run pygments: {e}")

def main():
    # 1. Copy node_modules to assets
    modules_to_copy = [
        "algoliasearch", "bootstrap", "bootstrap-table", "@fortawesome", 
        "@iframe-resizer", "instantsearch.js", "jquery", "luxon", 
        "mathjax", "@mathjax", "mermaid", "@twemoji", "vanilla-lazyload"
    ]
    
    os.makedirs("assets", exist_ok=True)
    
    for module in modules_to_copy:
        src = os.path.join("node_modules", module)
        dst = os.path.join("assets", module)
        if os.path.exists(src):
            copy_dir(src, dst)
        else:
            print(f"Warning: {src} not found")

    # 2. Download scratchblocks
    download_file("https://scratchblocks.github.io/js/scratchblocks-v3.6.4-min.js", "assets/scratchblocks.min.js")
    download_file("https://scratchblocks.github.io/js/scratchblocks-v3.6.4-min.js.map", "assets/scratchblocks.min.js.map")

    # 3. Copy bootstrap to _sass
    src_bootstrap = os.path.join("node_modules", "bootstrap")
    dst_bootstrap = os.path.join("_sass", "bootstrap")
    if os.path.exists(src_bootstrap):
        copy_dir(src_bootstrap, dst_bootstrap)

    # 4. Run Pygmentize
    os.makedirs("_sass", exist_ok=True)
    run_pygmentize("default", "_sass/default.scss")
    run_pygmentize("github-dark", "_sass/github-dark.scss")

    print("\nSetup complete!")

if __name__ == "__main__":
    main()
