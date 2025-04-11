// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Index.html">들어가며</a></li><li class="chapter-item expanded affix "><li class="part-title">Unity</li><li class="chapter-item expanded "><a href="Unity/unity.webp.html">🎨 unity.webp</a></li><li class="chapter-item expanded "><a href="Unity/unity.libsodium.html">🔑 unity.libsodium</a></li><li class="chapter-item expanded "><a href="Unity/SqlCipher4Unity3D.html">💾 SqlCipher4Unity3D</a></li><li class="chapter-item expanded affix "><li class="part-title">NF</li><li class="chapter-item expanded "><a href="NF/NF.Tool.UnityPackage.html">🌶️ NF.Tool.UnityPackage</a></li><li class="chapter-item expanded "><a href="NF/NF.Tool.ReleaseNoteMaker.html">🌶️ NF.Tool.ReleaseNoteMaker</a></li><li class="chapter-item expanded "><a href="NF/nf.unitylibs.managers.assetbundlemanagement.html">nf.unitylibs.managers.assetbundlemanagement</a></li><li class="chapter-item expanded "><a href="NF/nf.unitylibs.managers.patchmanagement.html">nf.unitylibs.managers.patchmanagement</a></li><li class="chapter-item expanded "><a href="nf/nf.unitytools.essentials.html">nf.unitytools.essentials</a></li><li class="chapter-item expanded affix "><li class="part-title">✒️ 노트</li><li class="chapter-item expanded "><a href="note/note.project-record.html">note.project-record</a></li><li class="chapter-item expanded affix "><li class="part-title">사이트</li><li class="chapter-item expanded "><a href="site/netpyoung.github.io.html">http://netpyoung.github.io</a></li><li class="chapter-item expanded affix "><li class="part-title">생각</li><li class="chapter-item expanded "><a href="think/adr.html">Architecture Decision Records</a></li><li class="chapter-item expanded "><a href="think/changelog-based-on-git-history.html">ChangeLog based on git history</a></li><li class="chapter-item expanded "><a href="think/markup-language.html">Markup Language</a></li><li class="chapter-item expanded "><a href="think/template-language.html">Template Language</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
