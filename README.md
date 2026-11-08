# data-platform

Monorepo de la plateforme de données de **tozano-data-labs** : sources, pipelines
d'ingestion, transformation (dbt), dataviz et infrastructure.

## Architecture

```text
raw → staging → marts
```

| Dossier | Rôle |
| --- | --- |
| `pipelines/` | Ingestion Python (extraction, validation, chargement) |
| `transformation/` | Projet dbt (modèles staging et marts, tests de qualité) |
| `dataviz/` | Dashboards et visualisations |
| `infra/` | Docker, orchestration, déploiement |
| `docs/` | Architecture, ADR, qualité, RGPD |

## Démarrage

```bash
# Pipelines
cd pipelines
python -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
pytest

# Transformation
cd transformation
pip install dbt-core dbt-duckdb
dbt deps
dbt build --profiles-dir .
```

## Conventions

- Commits : `<gitmoji> <type>(<scope>): <description en anglais>`.
- Aucun secret en clair ; `.env` n'est jamais commité.
- Données d'exemple publiques ou synthétiques uniquement.
- La CI appelle les workflows de
  [`shared-workflows`](https://github.com/tozano-data-labs/shared-workflows) `@v1`.

## CI

Le workflow `.github/workflows/ci.yml` exécute `ci-python`, `ci-dbt`, `dependency-review`
et `pr-title` depuis `shared-workflows@v1`.
