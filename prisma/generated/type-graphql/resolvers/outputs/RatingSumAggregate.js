"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let RatingSumAggregate = class RatingSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], RatingSumAggregate.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], RatingSumAggregate.prototype, "prod_id", void 0);
RatingSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingSumAggregate", {
        isAbstract: true
    })
], RatingSumAggregate);
exports.RatingSumAggregate = RatingSumAggregate;
