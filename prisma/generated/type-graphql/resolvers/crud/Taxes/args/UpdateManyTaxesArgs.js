"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesUpdateManyMutationInput_1 = require("../../../inputs/TaxesUpdateManyMutationInput");
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
let UpdateManyTaxesArgs = class UpdateManyTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesUpdateManyMutationInput_1.TaxesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesUpdateManyMutationInput_1.TaxesUpdateManyMutationInput)
], UpdateManyTaxesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], UpdateManyTaxesArgs.prototype, "where", void 0);
UpdateManyTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTaxesArgs);
exports.UpdateManyTaxesArgs = UpdateManyTaxesArgs;
