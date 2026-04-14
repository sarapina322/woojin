# Woojin Kwon Portfolio Setup Guide

This repository was customized from the `al-folio` template to reflect your current academic profile, research directions, and major undergraduate leadership / service experiences.

## 1. Before deployment

Update these fields in `_config.yml`:

- `url`: `https://<your-github-username>.github.io`
- `baseurl`:
  - leave blank if the repo is `<your-github-username>.github.io`
  - set to `/<repo-name>` if you deploy as a project page

## 2. Social links to add later

Edit `_data/socials.yml` and fill in any of the following when ready:

- GitHub username
- LinkedIn username
- Google Scholar user ID
- ORCID ID

## 3. Which CV is already wired in

- navbar / social PDF button → `assets/pdf/woojin_kwon_academic_cv.pdf`
- expanded CV is linked from the about page and CV page

If you want, you can replace either file without changing the rest of the site structure.

## 4. How to add publications later

### Files to prepare

For each new paper, ideally prepare:

1. final PDF or public preprint PDF
2. one preview image (PNG / JPG), usually a figure or cover graphic
3. BibTeX entry
4. optional links: code, project page, demo, DOI / publisher page, arXiv

### Where to put them

- PDF → `assets/pdf/`
- preview image → `assets/img/publication_preview/`
- BibTeX entry → `_bibliography/papers.bib`

### BibTeX template

```bibtex
@article{kwon2026paper,
  title        = {Your paper title},
  author       = {Kwon, Woojin and Coauthor, Name},
  year         = {2026},
  journal      = {Journal Name},
  abbr         = {JNL},
  abstract     = {One-paragraph abstract or short summary.},
  bibtex_show  = {true},
  selected     = {true},
  pdf          = {your_paper.pdf},
  preview      = {your_preview.png},
  code         = {https://github.com/your-repo},
  website      = {https://doi.org/...}
}
```

### Important notes

- `pdf` should only contain the filename if the file is placed in `assets/pdf/`
- `preview` should only contain the filename if the image is placed in `assets/img/publication_preview/`
- set `selected = {true}` if you want the paper featured on the home page later

## 5. Extra materials that would improve the site further

If you want a stronger next version, prepare and add:

- final public GitHub username / repo links
- LinkedIn, Google Scholar, ORCID
- an official high-resolution profile photo
- 3–5 research visuals (figures, pipeline diagrams, screenshots, posters)
- links for any demos, code repositories, lab page, or media coverage
- publication metadata once papers or preprints are public
- a short one-line bio and a longer 100–150 word bio, if you want multiple versions for different pages

## 6. Files most heavily customized

- `_config.yml`
- `_data/socials.yml`
- `_data/cv.yml`
- `_pages/about.md`
- `_pages/cv.md`
- `_pages/projects.md`
- `_pages/publications.md`
- `_projects/`
- `_news/`

## 7. Suggested GitHub Pages workflow

1. Create a GitHub repository
2. Upload this customized site
3. Update `url` / `baseurl` in `_config.yml`
4. Push to `main`
5. In GitHub → **Settings → Pages**, use **GitHub Actions** as the source if prompted
6. Wait for the deploy workflow to finish

If you later want a bilingual Korean / English version, the easiest next step is to duplicate the about / projects pages and add Korean counterparts rather than translating everything at once.
