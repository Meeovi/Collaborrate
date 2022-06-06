"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportmSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ImportmSumAggregate = class ImportmSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ImportmSumAggregate.prototype, "id", void 0);
ImportmSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ImportmSumAggregate", {
        isAbstract: true
    })
], ImportmSumAggregate);
exports.ImportmSumAggregate = ImportmSumAggregate;
