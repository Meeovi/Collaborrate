"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTax_rateArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateUpdateManyMutationInput_1 = require("../../../inputs/Tax_rateUpdateManyMutationInput");
const Tax_rateWhereInput_1 = require("../../../inputs/Tax_rateWhereInput");
let UpdateManyTax_rateArgs = class UpdateManyTax_rateArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateManyMutationInput_1.Tax_rateUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateManyMutationInput_1.Tax_rateUpdateManyMutationInput)
], UpdateManyTax_rateArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereInput_1.Tax_rateWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereInput_1.Tax_rateWhereInput)
], UpdateManyTax_rateArgs.prototype, "where", void 0);
UpdateManyTax_rateArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTax_rateArgs);
exports.UpdateManyTax_rateArgs = UpdateManyTax_rateArgs;
