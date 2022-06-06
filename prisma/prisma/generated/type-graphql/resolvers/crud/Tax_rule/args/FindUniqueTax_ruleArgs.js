"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleWhereUniqueInput_1 = require("../../../inputs/Tax_ruleWhereUniqueInput");
let FindUniqueTax_ruleArgs = class FindUniqueTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], FindUniqueTax_ruleArgs.prototype, "where", void 0);
FindUniqueTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTax_ruleArgs);
exports.FindUniqueTax_ruleArgs = FindUniqueTax_ruleArgs;
