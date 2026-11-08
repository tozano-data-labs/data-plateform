"""Utilitaires d'ingestion partagés."""

from __future__ import annotations

import re

_COLUMN_PATTERN = re.compile(r"[^a-z0-9_]+")


def normalize_column_name(name: str) -> str:
    """Normalise un nom de colonne en snake_case ASCII.

    >>> normalize_column_name("Code Commune")
    'code_commune'
    """
    normalized = _COLUMN_PATTERN.sub("_", name.strip().lower())
    return normalized.strip("_")


def ensure_not_empty(rows: list[dict[str, object]], source: str) -> None:
    """Lève une erreur si une source ne renvoie aucune ligne."""
    if not rows:
        raise ValueError(f"La source {source!r} ne contient aucune ligne")
