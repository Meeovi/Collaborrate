"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CurrenciesAvgAggregate = class CurrenciesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CurrenciesAvgAggregate.prototype, "id", void 0);
CurrenciesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CurrenciesAvgAggregate", {
        isAbstract: true
    })
], CurrenciesAvgAggregate);
exports.CurrenciesAvgAggregate = CurrenciesAvgAggregate;
