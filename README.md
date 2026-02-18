# Coding Club Website

A website for our coding club built with Jekyll and the [CS50 theme](https://github.com/cs50/jekyll-theme-cs50/).

## Quick Start

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler
- Git

### Installation

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**
   ```bash
   bundle install # assuming ruby and jekyll is installed
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:4000`

## Customization Guide

### 1. Basic Configuration

Edit [_config.yml](_config.yml) to set your club's basic information:

```yaml
cs50:
  title: "Debug Club @GKCIET"          # Change to your club's name
  description: "Modify club tagline"  # Change to your club's tagline
  tz: Asia/Kolkata             # Change to your timezone
```

### 2. Site Content

Edit [_data/site.yml](_data/site.yml) to update the following dynamic content:
- **Hero Section**: Title, description, and call-to-action buttons.
- **Stats Bar**: Active members, projects count, and Discord status.


### 3. Update Navigation

Edit [_includes/nav.md](_includes/nav.md) to customize the navigation menu. Add or remove pages as needed.

### 4. Update Header & Footer

- **Header / Navbar**: Edit [`_includes/navbar.html`](_includes/navbar.html) to add a logo or modify the header/navigation
- **Footer**: Edit [`_includes/footer_custom.html`](_includes/footer_custom.html) to add contact info and social links

### 5. Customize Pages

Replace the placeholder content in these pages:

- **Home**: [index.md](index.md)
- **About**: [about.md](about.md)
- **Events**: [events.md](events.md)
- **Projects**: [projects.md](projects.md)
- **Resources**: [resources.md](resources.md)
- **todos**: [todo.md](todo.md)


### 6. Add an Alert Banner

To add a site-wide alert banner:

1. Uncomment the `alert` line in `_config.yml`:
   ```yaml
   cs50:
     alert: warning  # Can be: primary, secondary, success, danger, warning, info, light, dark
   ```

2. Edit [_includes/alert.md](_includes/alert.md) with your alert message

### 7. Update Logo 

1. Add your logo image to the `assets/` folder
2. Uncomment the logo line in [_includes/header.md](_includes/header.md):
   ```markdown
   ![Club Logo](/assets/your-logo.png)
   ```

## Content Guidelines

### Using Special Features

#### Time Display
Display times in visitors' local timezones:
```markdown
{% local "2025-03-15 18:00" %}
```

#### Alerts
Create colored alert boxes:
```markdown
{% alert primary %}
Your alert message here
{% endalert %}
```

Types: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

#### Spoilers
Hide content behind a clickable reveal:
```markdown
{% spoiler "Click to reveal" %}
Hidden content here
{% endspoiler %}
```

#### Collapsible Lists
- Use `*` for regular bullets
- Use `+` for collapsed subtrees
- Use `-` for expanded subtrees

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add the page to [_includes/nav.md](_includes/nav.md)

## Customizing Styles

To customize colors and styles, create `assets/page.scss`:

```scss
---
---

$link-color: #286dc0;  // Change link color

@import "page";

aside {
    background-color: #00356b;  // Change sidebar color
}
```

## Documentation

- **CS50 Jekyll Theme**: https://cs50.readthedocs.io/themes/jekyll/
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **Markdown Guide**: https://www.markdownguide.org/

## Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to repository Settings → Pages
3. Set source to main branch
4. Your site will be available at `https://yourusername.github.io/repository-name/`

### Other Hosting Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Similar to Netlify with easy GitHub integration
- **Custom Server**: Run `bundle exec jekyll build` and deploy the `_site/` folder

##  Project Structure

```
.
├── _config.yml           # Site configuration
├── _includes/            # Reusable components
│   ├── header.md        # Site header
│   ├── nav.md           # Navigation menu
│   ├── footer.md        # Site footer
│   └── alert.md         # Alert banner (optional)
├── _layouts/            # Page layouts
├── _sass/               # Styles
├── assets/              # Images, CSS, JS
├── index.md             # Home page
├── about.md             # About page
├── events.md            # Events page
├── projects.md          # Projects page
├── resources.md         # Resources page
└── README.md            # This file
```

##  Troubleshooting

### Port already in use
If port 4000 is already in use, specify a different port:
```bash
bundle exec jekyll serve --port 4001
```

### Changes not showing
Jekyll caches content. Try:
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### Ruby version issues
Check your Ruby version:
```bash
ruby --version
```
Install the required version using a version manager like [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project uses the CS50 Jekyll theme. See [LICENSE](LICENSE) for details.

## Support

- **Theme Documentation**: https://cs50.readthedocs.io/themes/jekyll/
- **Theme Repository**: https://github.com/cs50/jekyll-theme-cs50/
- **Jekyll Help**: https://jekyllrb.com/docs/

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/) and the [CS50 theme](https://github.com/cs50/jekyll-theme-cs50/)
