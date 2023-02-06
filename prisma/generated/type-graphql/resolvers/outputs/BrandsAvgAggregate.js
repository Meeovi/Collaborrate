"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BrandsAvgAggregate = class BrandsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BrandsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BrandsAvgAggregate.prototype, "product", void 0);
BrandsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandsAvgAggregate", {
        isAbstract: true
    })
], BrandsAvgAggregate);
exports.BrandsAvgAggregate = BrandsAvgAggregate;
