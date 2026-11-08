# ADR 0001 — Adopter une architecture en couches raw → staging → marts

- **Statut** : accepté
- **Date** : 2026-11-07

## Contexte

La plateforme doit rester lisible et reproductible, avec des données brutes
conservées et des tables métier stables pour la dataviz.

## Décision

Toute donnée suit le chemin `raw → staging → marts` :

- `raw` conserve la donnée source sans transformation.
- `staging` nettoie, type et normalise.
- `marts` expose les tables métier testées.

## Conséquences

- Un modèle `marts` ne référence jamais une source brute.
- Chaque couche possède ses tests.
- Les évolutions de schéma sont documentées dans un ADR.
