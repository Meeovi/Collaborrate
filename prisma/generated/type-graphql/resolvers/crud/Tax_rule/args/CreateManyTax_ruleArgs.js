"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateManyInput_1 = require("../../../inputs/Tax_ruleCreateManyInput");
let CreateManyTax_ruleArgs = class CreateManyTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateManyInput_1.Tax_ruleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTax_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTax_ruleArgs.prototype, "skipDuplicates", void 0);
CreateManyTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTax_ruleArgs);
exports.CreateManyTax_ruleArgs = CreateManyTax_ruleArgs;
