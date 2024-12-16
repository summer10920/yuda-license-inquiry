# 佑大證書查詢系統

這個專案是一個使用 TypeScript 和 Vite 構建的 React 應用程式，旨在查詢證書。它包含一個用戶友好的介面，並整合了各種庫以增強功能。

## 功能

- **React**：一個用於構建用戶界面的 JavaScript 庫。
- **TypeScript**：JavaScript 的超集，增加了靜態類型。
- **Vite**：一個快速的構建工具，提供流暢的開發體驗和熱模塊替換（HMR）。
- **Material-UI**：一個流行的 React UI 框架，提供預設設計的組件。
- **ESLint**：一個用於識別和修復 JavaScript 代碼問題的工具。
- **Mock Service Worker (MSW)**：一個用於在開發過程中模擬 API 請求的庫。

## 開始使用

### 前置條件

- Node.js（版本 14 或更高）
- pnpm（推薦的包管理器）

### 安裝

1. 克隆倉庫：
   ```bash
   git clone <repository-url>
   cd yuda-license-inquiry
   ```

2. 使用 pnpm 安裝依賴：
   ```bash
   pnpm install
   ```

### 運行應用程式

要啟動開發伺服器，運行：
```bash
pnpm dev
```
打開瀏覽器並導航到 `http://localhost:3000` 以查看應用程式。

### 生產環境構建

要為生產環境構建應用程式，運行：
```bash
pnpm build
```
構建的文件將可在 `dist` 目錄中找到。

### 代碼檢查

要運行 ESLint 並檢查代碼質量問題，使用：
```bash
pnpm lint
```

## 配置

### ESLint 配置

要啟用類型感知的 lint 規則，請按如下方式更新您的 ESLint 配置：

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Mock Service Worker

要在開發過程中啟用 MSW 以模擬 API 請求，請確保環境變量 `VITE_ENABLE_MSW` 設置為 `true`。

## 授權

本專案根據 MIT 授權條款進行授權。
