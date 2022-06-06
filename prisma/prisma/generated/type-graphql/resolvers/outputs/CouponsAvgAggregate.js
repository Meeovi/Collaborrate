"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CouponsAvgAggregate = class CouponsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CouponsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CouponsAvgAggregate.prototype, "prod_id", void 0);
CouponsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CouponsAvgAggregate", {
        isAbstract: true
    })
], CouponsAvgAggregate);
exports.CouponsAvgAggregate = CouponsAvgAggregate;
