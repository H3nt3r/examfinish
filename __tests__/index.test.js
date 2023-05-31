// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/cities.js __fixtures__/cities1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/cities.js __fixtures__/cities2.csv',
  // @ts-ignore
  options,
);
const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Число записей: 22');
  assert.strictEqual(rows2[0], 'Число записей: 16');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Список округов: Приволжский федеральный округ, Северо-Западный федеральный округ, Северо-Кавказский федеральный округ, Сибирский федеральный округ, Уральский федеральный округ, Центральный федеральный округ, Южный федеральный округ');
  assert.strictEqual(rows2[1], 'Список округов: Приволжский федеральный округ, Северо-Западный федеральный округ, Сибирский федеральный округ, Уральский федеральный округ, Центральный федеральный округ, Южный федеральный округ');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Наибольшая площадь: 2339700 кв.км.');
  assert.strictEqual(rows2[2], 'Наибольшая площадь: 1435200 кв.км.');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Республика с наибольшим количеством населения: Республика Башкортостан');
  assert.strictEqual(rows2[3], 'Республика с наибольшим количеством населения: Республика Татарстан');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Наименьшая плотность населения: Красноярский край');
  assert.strictEqual(rows2[4], 'Наименьшая плотность населения: Тюменская область');
});
