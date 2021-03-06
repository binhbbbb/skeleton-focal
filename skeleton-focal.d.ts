/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   skeleton-focal.js
 *   skeleton-focal.js
 */

/**
 * `skeleton-focal`
 */
declare class SkeletonFocal extends Polymer.Element {

  /**
   * The URL of an image.
   */
  src: string|null|undefined;

  /**
   * This image will be used as a background/placeholder until the src
   * image has loaded.  Use of a data-URI for placeholder is encouraged
   * for instant rendering.
   */
  placeholder: string|null|undefined;

  /**
   * When true, the image is prevented from loading and any placeholder is
   * shown.  This may be useful when a binding to the src property is known
   * to be invalid, to prevent 404 requests.
   */
  preventLoad: boolean|null|undefined;

  /**
   * CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
   */
  crossorigin: string|null|undefined;

  /**
   * X Axis position (0 - 1)
   */
  x: number|null|undefined;

  /**
   * Y Axis position (0 - 1)
   */
  y: number|null|undefined;

  /**
   * Read-only value that is true when the image is loaded.
   */
  readonly loaded: boolean|null|undefined;

  /**
   * Reset position
   */
  reset(): void;
}

interface HTMLElementTagNameMap {
  "skeleton-focal": SkeletonFocal;
  "skeleton-focal": SkeletonFocal;
}

/**
 * `skeleton-focal`
 */
declare class SkeletonFocal extends Polymer.Element {

  /**
   * The URL of an image.
   */
  src: string|null|undefined;

  /**
   * This image will be used as a background/placeholder until the src
   * image has loaded.  Use of a data-URI for placeholder is encouraged
   * for instant rendering.
   */
  placeholder: string|null|undefined;

  /**
   * When true, the image is prevented from loading and any placeholder is
   * shown.  This may be useful when a binding to the src property is known
   * to be invalid, to prevent 404 requests.
   */
  preventLoad: boolean|null|undefined;

  /**
   * CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
   */
  crossorigin: string|null|undefined;

  /**
   * X Axis position (0 - 1)
   */
  x: number|null|undefined;

  /**
   * Y Axis position (0 - 1)
   */
  y: number|null|undefined;

  /**
   * Read-only value that is true when the image is loaded.
   */
  readonly loaded: boolean|null|undefined;

  /**
   * Reset position
   */
  reset(): void;
}
