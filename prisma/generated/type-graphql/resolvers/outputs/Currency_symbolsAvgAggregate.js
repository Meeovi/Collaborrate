"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Currency_symbolsAvgAggregate = class Currency_symbolsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Currency_symbolsAvgAggregate.prototype, "id", void 0);
Currency_symbolsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsAvgAggregate", {
        isAbstract: true
    })
], Currency_symbolsAvgAggregate);
exports.Currency_symbolsAvgAggregate = Currency_symbolsAvgAggregate;
