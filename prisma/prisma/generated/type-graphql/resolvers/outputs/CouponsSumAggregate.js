"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let CouponsSumAggregate = class CouponsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CouponsSumAggregate.prototype, "prod_id", void 0);
CouponsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CouponsSumAggregate", {
        isAbstract: true
    })
], CouponsSumAggregate);
exports.CouponsSumAggregate = CouponsSumAggregate;
