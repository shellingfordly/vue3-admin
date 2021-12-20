import vue from "@vitejs/plugin-vue";
import { ViteEnv } from "../types/env";
import type { Plugin } from "vite";
import { configMockPlugin } from "./mock";
import { configSvgIconsPlugin } from "./svgSprite";
import { configHtmlPlugin } from "./html";
import windiCSS from "vite-plugin-windicss";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const plugins: (Plugin | Plugin[])[] = [vue()];

  plugins.push(configHtmlPlugin(viteEnv));
  plugins.push(configMockPlugin(isBuild));
  plugins.push(configSvgIconsPlugin(isBuild));
  plugins.push(windiCSS());

  return plugins;
}
