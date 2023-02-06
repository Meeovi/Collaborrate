"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaxesAvgAggregate = class TaxesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaxesAvgAggregate.prototype, "id", void 0);
TaxesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaxesAvgAggregate", {
        isAbstract: true
    })
], TaxesAvgAggregate);
exports.TaxesAvgAggregate = TaxesAvgAggregate;
