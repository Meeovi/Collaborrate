"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaxesSumAggregate = class TaxesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaxesSumAggregate.prototype, "id", void 0);
TaxesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaxesSumAggregate", {
        isAbstract: true
    })
], TaxesSumAggregate);
exports.TaxesSumAggregate = TaxesSumAggregate;
