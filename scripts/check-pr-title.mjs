#!/usr/bin/env node
// Vérifie qu'un titre de PR respecte : <gitmoji> <type>(<scope>): <description>
// Usage : node scripts/check-pr-title.mjs "✨ feat(ingestion): add source"

export const TYPES = {
  feat: "✨",
  fix: "🐛",
  docs: "📚",
  refactor: "♻️",
  test: "✅",
  chore: "🔧",
  security: "🔒",
  ci: "🚑",
  build: "📦",
  revert: "⏪",
};

export const SCOPES = [
  "ingestion",
  "orchestration",
  "dbt",
  "quality",
  "dataviz",
  "infra",
  "docker",
  "deps",
  "docs",
  "ci",
];

const MAX_LENGTH = 72;
const strip = (s) => s.replace(/️/g, "");

export function checkTitle(title) {
  const errors = [];
  if (title.length > MAX_LENGTH) {
    errors.push(`Titre trop long (${title.length} > ${MAX_LENGTH}).`);
  }
  const match = /^(\S+) (\w+)\(([\w-]+)\): (.+)$/u.exec(title);
  if (!match) {
    errors.push("Format attendu : <gitmoji> <type>(<scope>): <description>");
    return errors;
  }
  const [, emoji, type, scope, description] = match;
  if (!(type in TYPES)) {
    errors.push(`Type inconnu : ${type}. Autorisés : ${Object.keys(TYPES).join(", ")}.`);
  } else if (strip(emoji) !== strip(TYPES[type])) {
    errors.push(`Le gitmoji de « ${type} » doit être ${TYPES[type]}.`);
  }
  if (!SCOPES.includes(scope)) {
    errors.push(`Scope inconnu : ${scope}. Autorisés : ${SCOPES.join(", ")}.`);
  }
  if (description.endsWith(".")) {
    errors.push("La description ne doit pas finir par un point.");
  }
  return errors;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const title = process.argv[2] ?? "";
  const errors = checkTitle(title);
  if (errors.length > 0) {
    console.error(`Titre invalide : ${title}`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Titre valide : ${title}`);
}
