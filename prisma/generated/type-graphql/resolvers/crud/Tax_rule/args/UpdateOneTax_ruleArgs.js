"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleUpdateInput_1 = require("../../../inputs/Tax_ruleUpdateInput");
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let UpdateOneTax_ruleArgs = class UpdateOneTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateInput_1.Tax_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateInput_1.Tax_ruleUpdateInput)
], UpdateOneTax_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], UpdateOneTax_ruleArgs.prototype, "where", void 0);
UpdateOneTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTax_ruleArgs);
exports.UpdateOneTax_ruleArgs = UpdateOneTax_ruleArgs;
