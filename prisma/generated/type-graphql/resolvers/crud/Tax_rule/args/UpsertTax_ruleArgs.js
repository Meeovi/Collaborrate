"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateInput_1 = require("../../../inputs/Tax_ruleCreateInput");
const Tax_ruleUpdateInput_1 = require("../../../inputs/Tax_ruleUpdateInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let UpsertTax_ruleArgs = class UpsertTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], UpsertTax_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateInput_1.Tax_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateInput_1.Tax_ruleCreateInput)
], UpsertTax_ruleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateInput_1.Tax_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateInput_1.Tax_ruleUpdateInput)
], UpsertTax_ruleArgs.prototype, "update", void 0);
UpsertTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTax_ruleArgs);
exports.UpsertTax_ruleArgs = UpsertTax_ruleArgs;
