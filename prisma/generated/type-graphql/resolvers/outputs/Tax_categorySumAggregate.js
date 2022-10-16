"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categorySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Tax_categorySumAggregate = class Tax_categorySumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_categorySumAggregate.prototype, "id", void 0);
Tax_categorySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_categorySumAggregate", {
        isAbstract: true
    })
], Tax_categorySumAggregate);
exports.Tax_categorySumAggregate = Tax_categorySumAggregate;
