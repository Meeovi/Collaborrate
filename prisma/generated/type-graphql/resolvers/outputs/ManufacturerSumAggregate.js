"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ManufacturerSumAggregate = class ManufacturerSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerSumAggregate.prototype, "product", void 0);
ManufacturerSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ManufacturerSumAggregate", {
        isAbstract: true
    })
], ManufacturerSumAggregate);
exports.ManufacturerSumAggregate = ManufacturerSumAggregate;
