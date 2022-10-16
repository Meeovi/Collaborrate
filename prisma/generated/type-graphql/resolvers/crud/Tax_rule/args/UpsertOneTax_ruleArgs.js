"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateInput_1 = require("../../../inputs/Tax_ruleCreateInput");
const Tax_ruleUpdateInput_1 = require("../../../inputs/Tax_ruleUpdateInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let UpsertOneTax_ruleArgs = class UpsertOneTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], UpsertOneTax_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateInput_1.Tax_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateInput_1.Tax_ruleCreateInput)
], UpsertOneTax_ruleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateInput_1.Tax_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateInput_1.Tax_ruleUpdateInput)
], UpsertOneTax_ruleArgs.prototype, "update", void 0);
UpsertOneTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTax_ruleArgs);
exports.UpsertOneTax_ruleArgs = UpsertOneTax_ruleArgs;
