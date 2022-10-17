"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let DeleteOneTax_ruleArgs = class DeleteOneTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], DeleteOneTax_ruleArgs.prototype, "where", void 0);
DeleteOneTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTax_ruleArgs);
exports.DeleteOneTax_ruleArgs = DeleteOneTax_ruleArgs;
