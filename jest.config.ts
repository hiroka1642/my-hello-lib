// 型定義のインポート
import { Config } from '@jest/types';

// オプションを設定
const config: Config.InitialOptions = {
  // Jest の設定のベース
  preset: 'ts-jest',
  // test ファイルの置き場所
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  // Node.js 環境向けにテストする
  testEnvironment: 'node',
  // カバレッジ（テストコードの捕捉率）を収集する
  collectCoverage: true,
};

// 設定を default エクスポートします
export default config;
