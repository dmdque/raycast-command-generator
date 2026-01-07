/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Model - Which AI model to use */
  "model": "gemini-flash-lite" | "claude-haiku",
  /** Google AI API Key - Google AI API key for Gemini (required if using Gemini) */
  "googleApiKey"?: string,
  /** Anthropic API Key - Anthropic API key for Claude (required if using Claude) */
  "anthropicApiKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `generate-command` command */
  export type GenerateCommand = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `generate-command` command */
  export type GenerateCommand = {}
}

