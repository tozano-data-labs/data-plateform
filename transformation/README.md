# transformation

Projet dbt de la plateforme. Cible par défaut : DuckDB (sans secret).

## Structure

```text
transformation/
├── dbt_project.yml
├── profiles.yml        # profil « ci » DuckDB
└── models/
    ├── staging/        # nettoyage et normalisation des sources
    └── marts/          # tables métier prêtes à l'emploi
```

## Commandes

```bash
pip install dbt-core dbt-duckdb
dbt deps
dbt parse --profiles-dir .
dbt build --profiles-dir .
```

## Règles

- Une colonne technique `ingested_at` sur chaque modèle staging.
- Tests `not_null` et `unique` sur les clés.
- Aucun modèle ne lit directement une source sans passer par `staging`.
- Toute décision de schéma structurante fait l'objet d'un ADR.
