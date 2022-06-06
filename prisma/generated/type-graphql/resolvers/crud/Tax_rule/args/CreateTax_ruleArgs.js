"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateInput_1 = require("../../../inputs/Tax_ruleCreateInput");
let CreateTax_ruleArgs = class CreateTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateInput_1.Tax_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateInput_1.Tax_ruleCreateInput)
], CreateTax_ruleArgs.prototype, "data", void 0);
CreateTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateTax_ruleArgs);
exports.CreateTax_ruleArgs = CreateTax_ruleArgs;
