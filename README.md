# MediaFire Download Page Worker

> A proof-of-concept for building download pages in CloudFlare Workers 

Directory
```
├── index.tsx           # Web worker entry point, handles request
├── assets              # Static resources
│   ├── images            # Rasters and vectors
│   └── locales           # Translations
├── interface           # User interface
│   ├── base              # Core components (dialogs, buttons, etc.)
│   ├── layouts           # HTML layouts (the html page)
│   ├── pages             # Page templates (free download, wallpaper ad, etc.)
│   ├── stacks            # Building block components (download button, upload info box, etc.)
│   └── theme.ts          # Style guide and themes (colors, font sizes, breakpoints etc.)
├── modules             # Main worker logic
│   └── download.ts       # Download page functions (fetch info, choose template, etc.)
└── utils               # Helper functions
    ├── common.ts         # General utils (format bytes, etc.)
    └── mediafire.ts      # MediaFire utils (check quickkey format, etc.)
```
