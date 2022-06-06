"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let DeleteTax_ruleArgs = class DeleteTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], DeleteTax_ruleArgs.prototype, "where", void 0);
DeleteTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTax_ruleArgs);
exports.DeleteTax_ruleArgs = DeleteTax_ruleArgs;
