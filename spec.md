# Specification

## Summary
**Goal:** Change the global application background to bright red in both light and dark themes while maintaining readable contrast for text and core surfaces.

**Planned changes:**
- Update OKLCH CSS variable values in `frontend/src/index.css` for `--background` in `:root` (light) and `.dark` (dark) to render a bright red background via existing `bg-background`.
- Adjust any dependent surface/contrast tokens as needed (e.g., foreground/surface tokens used by cards/popovers) so text and primary surfaces remain readable against the bright red background without per-component overrides.

**User-visible outcome:** The app background appears bright red in both light and dark modes, and text/cards remain legible without any layout or content changes.
