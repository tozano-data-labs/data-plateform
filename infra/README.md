# infra

Infrastructure locale et déploiement : Docker, orchestration, stockage.

## Démarrage local

```bash
docker compose up -d
```

## Règles

- Aucun secret dans les fichiers compose ; utiliser `.env` (ignoré par git).
- Les images sont épinglées par version.
- Toute décision structurante (orchestrateur, entrepôt, stockage) fait l'objet d'un ADR.
