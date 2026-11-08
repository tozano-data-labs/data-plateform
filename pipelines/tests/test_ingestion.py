import pytest

from data_platform.ingestion import ensure_not_empty, normalize_column_name


def test_normalize_column_name():
    assert normalize_column_name("Code Commune") == "code_commune"
    assert normalize_column_name("  Date d'observation ") == "date_d_observation"


def test_ensure_not_empty_accepts_rows():
    ensure_not_empty([{"id": 1}], "exemple")


def test_ensure_not_empty_rejects_empty_source():
    with pytest.raises(ValueError, match="exemple"):
        ensure_not_empty([], "exemple")
