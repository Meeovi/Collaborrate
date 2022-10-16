"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let AccountsSumAggregate = class AccountsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AccountsSumAggregate.prototype, "id", void 0);
AccountsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AccountsSumAggregate", {
        isAbstract: true
    })
], AccountsSumAggregate);
exports.AccountsSumAggregate = AccountsSumAggregate;
