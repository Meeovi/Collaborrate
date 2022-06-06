"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTax_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleWhereInput_1 = require("../../../inputs/Tax_ruleWhereInput");
let DeleteManyTax_ruleArgs = class DeleteManyTax_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereInput_1.Tax_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereInput_1.Tax_ruleWhereInput)
], DeleteManyTax_ruleArgs.prototype, "where", void 0);
DeleteManyTax_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTax_ruleArgs);
exports.DeleteManyTax_ruleArgs = DeleteManyTax_ruleArgs;
