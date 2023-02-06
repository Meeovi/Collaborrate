"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesUpdateInput_1 = require("../../../inputs/TaxesUpdateInput");
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let UpdateOneTaxesArgs = class UpdateOneTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesUpdateInput_1.TaxesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesUpdateInput_1.TaxesUpdateInput)
], UpdateOneTaxesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], UpdateOneTaxesArgs.prototype, "where", void 0);
UpdateOneTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTaxesArgs);
exports.UpdateOneTaxesArgs = UpdateOneTaxesArgs;
