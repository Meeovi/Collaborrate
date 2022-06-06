"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Tax_rateSumAggregate = class Tax_rateSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_rateSumAggregate.prototype, "prod_id", void 0);
Tax_rateSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_rateSumAggregate", {
        isAbstract: true
    })
], Tax_rateSumAggregate);
exports.Tax_rateSumAggregate = Tax_rateSumAggregate;
