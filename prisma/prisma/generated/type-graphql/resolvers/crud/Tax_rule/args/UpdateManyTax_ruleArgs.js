"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleUpdateManyMutationInput_1 = require("../../../inputs/Tax_ruleUpdateManyMutationInput");
const Tax_ruleWhereInput_1 = require("../../../inputs/Tax_ruleWhereInput");
let UpdateManyTax_ruleArgs = class UpdateManyTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateManyMutationInput_1.Tax_ruleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateManyMutationInput_1.Tax_ruleUpdateManyMutationInput)
], UpdateManyTax_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], UpdateManyTax_ruleArgs.prototype, "where", void 0);
UpdateManyTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTax_ruleArgs);
exports.UpdateManyTax_ruleArgs = UpdateManyTax_ruleArgs;
