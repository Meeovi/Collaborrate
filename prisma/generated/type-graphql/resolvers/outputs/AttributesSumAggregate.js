"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let AttributesSumAggregate = class AttributesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AttributesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], AttributesSumAggregate.prototype, "prod_id", void 0);
AttributesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttributesSumAggregate", {
        isAbstract: true
    })
], AttributesSumAggregate);
exports.AttributesSumAggregate = AttributesSumAggregate;
