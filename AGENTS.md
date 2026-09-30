<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- The home route is a fixed 1920×1080 slide presentation scaled to the viewport; keep slide content and the downloadable PDF synchronized.
- Liivrr’s design system uses Bebas Neue for display, Manrope for body, IBM Plex Mono for labels, and semantic OKLCH tokens in `src/styles.css`.
