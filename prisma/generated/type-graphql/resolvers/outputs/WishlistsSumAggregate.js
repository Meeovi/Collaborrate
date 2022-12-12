"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let WishlistsSumAggregate = class WishlistsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WishlistsSumAggregate.prototype, "id", void 0);
WishlistsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WishlistsSumAggregate", {
        isAbstract: true
    })
], WishlistsSumAggregate);
exports.WishlistsSumAggregate = WishlistsSumAggregate;
