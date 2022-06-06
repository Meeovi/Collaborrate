"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop_settingsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Shop_settingsSumAggregate = class Shop_settingsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Shop_settingsSumAggregate.prototype, "id", void 0);
Shop_settingsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Shop_settingsSumAggregate", {
        isAbstract: true
    })
], Shop_settingsSumAggregate);
exports.Shop_settingsSumAggregate = Shop_settingsSumAggregate;
