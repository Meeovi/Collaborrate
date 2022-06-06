"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_settingsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Sales_settingsSumAggregate = class Sales_settingsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Sales_settingsSumAggregate.prototype, "id", void 0);
Sales_settingsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Sales_settingsSumAggregate", {
        isAbstract: true
    })
], Sales_settingsSumAggregate);
exports.Sales_settingsSumAggregate = Sales_settingsSumAggregate;
