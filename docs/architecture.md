# Architecture

## Couches

```text
sources → raw → staging → marts → dataviz
```

- **raw** : données brutes, chargées telles quelles, jamais modifiées.
- **staging** : nettoyage, typage, normalisation des noms de colonnes.
- **marts** : tables métier, documentées et testées, consommées par la dataviz.

## Composants

| Composant | Techno | Dossier |
| --- | --- | --- |
| Ingestion | Python | `pipelines/` |
| Transformation | dbt + DuckDB | `transformation/` |
| Dataviz | à définir (ADR) | `dataviz/` |
| Infra | Docker Compose | `infra/` |

## Principes

- Reproductibilité : `docker compose up` et `dbt build` suffisent en local.
- Traçabilité : colonne `ingested_at` sur les modèles staging.
- Qualité : tests de schéma, d'unicité et de complétude.
- Sécurité : aucun secret en clair, pas de données personnelles réelles.
