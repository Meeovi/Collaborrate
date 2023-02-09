"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let UsersSumAggregate = class UsersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], UsersSumAggregate.prototype, "id", void 0);
UsersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsersSumAggregate", {
        isAbstract: true
    })
], UsersSumAggregate);
exports.UsersSumAggregate = UsersSumAggregate;
