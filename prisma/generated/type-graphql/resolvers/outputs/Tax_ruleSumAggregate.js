"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Tax_ruleSumAggregate = class Tax_ruleSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_ruleSumAggregate.prototype, "prod_id", void 0);
Tax_ruleSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_ruleSumAggregate", {
        isAbstract: true
    })
], Tax_ruleSumAggregate);
exports.Tax_ruleSumAggregate = Tax_ruleSumAggregate;
