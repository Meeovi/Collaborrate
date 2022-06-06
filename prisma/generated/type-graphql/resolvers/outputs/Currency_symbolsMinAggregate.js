"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_symbolsMinAggregate = class Currency_symbolsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsMinAggregate.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbolsMinAggregate.prototype, "use_standard", void 0);
Currency_symbolsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsMinAggregate", {
        isAbstract: true
    })
], Currency_symbolsMinAggregate);
exports.Currency_symbolsMinAggregate = Currency_symbolsMinAggregate;
