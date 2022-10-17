"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateInput_1 = require("../../../inputs/Tax_ruleCreateInput");
let CreateOneTax_ruleArgs = class CreateOneTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateInput_1.Tax_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateInput_1.Tax_ruleCreateInput)
], CreateOneTax_ruleArgs.prototype, "data", void 0);
CreateOneTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTax_ruleArgs);
exports.CreateOneTax_ruleArgs = CreateOneTax_ruleArgs;
