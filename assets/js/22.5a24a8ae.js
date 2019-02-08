(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{212:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("We've started adding the TypeScript support to Vue Storefront - mostly because of the following reasons:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Therefore we're refactoring just:")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("where it makes sense. The key TypeScript feature we feel is usable are data types.")]),e._v(" "),s("p",[e._v("We're in the middle of "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/issues/1213",target:"_blank",rel:"noopener noreferrer"}},[e._v("refactoring "),s("code",[e._v("core/components")]),e._v(" to "),s("code",[e._v("core/api")]),e._v(" modules"),s("OutboundLink")],1),e._v(". All the modules should be created using TypeScript")]),e._v(" "),e._m(6),e._v(" "),e._m(7)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"typescript-action-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-action-plan","aria-hidden":"true"}},[this._v("#")]),this._v(" TypeScript Action Plan")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("developer convenience (intellisense support in the IDEs)")]),this._v(" "),t("li",[this._v("types safety and code-testability")]),this._v(" "),t("li",[this._v("making Vue Storefront code base easier to understand for newcomers.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"desired-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#desired-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Desired state")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Type Script is for internal implementation only. Does NOT affect ES users, but should improve TS integration for TS users.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Desired state is that Vue Storefront Core outputs JS libraries, it's written using some TypeScript features, but all the user code (themes, extensions) is still JavaScript. No TypeScript experience is required to build Vue Storefront stores. "),t("strong",[this._v("This is just for core developers and transparent to the end users.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("core/api")]),this._v(" "),t("li",[this._v("core/store")]),this._v(" "),t("li",[this._v("core/lib")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-action-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-action-plan","aria-hidden":"true"}},[this._v("#")]),this._v(" The Action Plan:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Introduce types - move _.js modules to _.ts modules incrementally without breaking changes.")]),e._v(" "),s("li",[e._v("Use types when it's appropriate in your newly written modules and new features.")]),e._v(" "),s("li",[e._v("One Vuex module, or just few components refactored within one release (once a month) is fine.")]),e._v(" "),s("li",[e._v("All "),s("code",[e._v("core/api")]),e._v(" modules should be created using TypeScript.")]),e._v(" "),s("li",[e._v("All new modules and Vuex stores should be created using TypeScript.")]),e._v(" "),s("li",[s("strong",[e._v("For now please don't refactor existing UI layer (components, pages) to use TypeScript. We should focus at Vuex, core libraries and APIs at first to not introduce a chaos into theme development.")])]),e._v(" "),s("li",[e._v("We should put the types/interfaces inside "),s("code",[e._v("core/store/types")]),e._v(" for all Entity/Data related models or in "),s("code",[e._v("core/types")]),e._v(" for some shared ones; for example: "),s("code",[e._v("Product.ts")]),e._v(" should be placed in "),s("code",[e._v("core/store/types/product/Product.ts")])]),e._v(" "),s("li",[e._v("We should use minimal possible set of interfaces. Try to introduce 1-2 interfaces per entity (e.g. Product shouldn't be represented by more than 2 interfaces)")])])}],!1,null,null,null);i.options.__file="typescript.md";t.default=i.exports}}]);