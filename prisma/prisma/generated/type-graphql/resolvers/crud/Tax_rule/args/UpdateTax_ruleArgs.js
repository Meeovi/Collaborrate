"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleUpdateInput_1 = require("../../../inputs/Tax_ruleUpdateInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let UpdateTax_ruleArgs = class UpdateTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateInput_1.Tax_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateInput_1.Tax_ruleUpdateInput)
], UpdateTax_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], UpdateTax_ruleArgs.prototype, "where", void 0);
UpdateTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTax_ruleArgs);
exports.UpdateTax_ruleArgs = UpdateTax_ruleArgs;
