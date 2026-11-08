select
    id,
    ingested_at
from {{ ref('stg_exemple') }}
