# Al Firma

Site vitrine et blog d’Al Firma, construit avec Next.js et exporté en fichiers
statiques. Les articles sont des fichiers MDX versionnés dans Git.

## Développement

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`. La commande
`npm run build` génère l’export de production dans `out/`.

## Rédiger et publier un article

Les articles sont des fichiers MDX stockés dans `src/content/blog/`. Un agent
ou un développeur peut créer un fichier, renseigner son frontmatter puis
proposer la modification dans Git.

Chaque article doit contenir au minimum :

- un titre éditorial et, si nécessaire, un titre SEO ;
- un slug stable ;
- une description de 120 à 160 caractères ;
- une date, un auteur, une catégorie et des mots-clés ;
- une image principale et son texte alternatif ;
- le contenu MDX avec ses liens vers les sources.

Après validation, le déploiement du VPS exécute `npm ci`, `npm run build`, puis
met en ligne le dossier `out/`. Aucun contenu éditorial n’est stocké dans une
base de données séparée.

## SEO éditorial

Chaque article génère :

- une URL statique avec balise canonique ;
- les métadonnées Open Graph et Twitter ;
- un schéma `Article` avec auteur et dates de mise à jour ;
- une entrée dans `sitemap.xml` et `feed.xml`.

Le slug d’un article publié doit rester stable. En cas de consolidation, garder
l’ancien fichier avec `redirectTo`, `canonicalUrl` et `noIndex` afin de
préserver l’ancienne URL.

Avant de publier, exécuter les contrôles locaux :

```bash
npm run lint
npm run build
npm run seo:check
```

Le contrôle SEO inspecte l’export statique : canonicals, H1, landmarks,
JSON-LD, liens internes et URLs exclues du sitemap.
