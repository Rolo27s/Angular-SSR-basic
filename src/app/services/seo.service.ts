import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private title: Title,
    private meta: Meta
  ) {}

  setCanonicalURL(url?: string) {
    const canURL = url ?? this._document.URL;
    const head = this._document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this._document.querySelector(`link[rel='canonical']`) || null;

    if (!element) {
      element = this._document.createElement('link');
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }

    element.setAttribute('href', canURL);
  }

  setIndexFollow(state: boolean = true) {
    this.meta.updateTag({ name: "robots", content: state ? "index, follow" : "noindex, nofollow" });
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMetaTag(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

}
