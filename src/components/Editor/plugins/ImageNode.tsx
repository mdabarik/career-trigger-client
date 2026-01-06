import { DecoratorNode } from "lexical";
import React, { JSX } from "react";

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __altText: string;

  static getType(): string {
    return "image";
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__altText, node.__key);
  }

  constructor(src: string, altText: string, key?: string) {
    super(key);
    this.__src = src;
    this.__altText = altText;
  }

  createDOM(): HTMLElement {
    const div = document.createElement("div");
    return div;
  }

  updateDOM(): boolean {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <img src={this.__src} alt={this.__altText} style={{ maxWidth: "100%" }} />
    );
  }
}

export function $createImageNode({
  src,
  altText,
}: {
  src: string;
  altText: string;
}) {
  return new ImageNode(src, altText);
}
