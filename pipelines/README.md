# pipelines

Code d'ingestion Python : extraction depuis les sources, validation, chargement
vers la zone `raw`.

## Structure

```text
pipelines/
├── src/data_platform/   # code réutilisable
└── tests/               # tests pytest
```

## Commandes

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
ruff check .
ruff format --check .
pytest --cov --cov-fail-under=80
```

## Règles

- Aucun identifiant ni secret en dur : tout passe par l'environnement.
- Les données d'exemple sont synthétiques ou publiques.
- Chaque source possède au moins un test de schéma et un test de complétude.
