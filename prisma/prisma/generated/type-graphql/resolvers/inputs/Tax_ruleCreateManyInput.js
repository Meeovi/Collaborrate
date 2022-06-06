"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Tax_ruleCreateManyInput = class Tax_ruleCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateManyInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Tax_ruleCreateManyInput.prototype, "prod_id", void 0);
Tax_ruleCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateManyInput", {
        isAbstract: true
    })
], Tax_ruleCreateManyInput);
exports.Tax_ruleCreateManyInput = Tax_ruleCreateManyInput;
