# 📦 VSCode Class Name Extractor

![Version](https://img.shields.io/visual-studio-marketplace/v/your-username.class-name-extractor)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/your-username.class-name-extractor)
![License](https://img.shields.io/github/license/your-username/class-name-extractor)

A simple yet powerful Visual Studio Code extension that extracts all class names from the currently open HTML file and presents them in a Quick Pick menu. Perfect for frontend developers working with large component files, Angular templates, or legacy HTML.

---

## ✨ Features

- 🔍 Scans the active HTML document for `class="..."` attributes
- 🧠 Automatically extracts and deduplicates individual class names
- ⚡ Fast and regex-based parsing
- 🎯 Opens a searchable quick-pick menu to inspect the results

---

## 🚀 Usage

1. Open any `.html` or `.component.html` file.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.
3. Run: **`List Class Names in HTML`**
4. Select a class name from the Quick Pick menu to view or copy it.

> You can also bind this command to a custom keyboard shortcut.

---

## 🧪 Example

Given this HTML:

```html
<div class="card primary large">
  <span class="icon small"></span>
</div>
```

The extension will extract:

- card
- primary
- large
- icon
- small