"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.General_settingsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let General_settingsSumAggregate = class General_settingsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], General_settingsSumAggregate.prototype, "id", void 0);
General_settingsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("General_settingsSumAggregate", {
        isAbstract: true
    })
], General_settingsSumAggregate);
exports.General_settingsSumAggregate = General_settingsSumAggregate;
