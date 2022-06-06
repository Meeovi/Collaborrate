"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbols = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_symbols = class Currency_symbols {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbols.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbols.prototype, "use_standard", void 0);
Currency_symbols = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbols", {
        isAbstract: true
    })
], Currency_symbols);
exports.Currency_symbols = Currency_symbols;
