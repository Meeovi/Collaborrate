"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
let DeleteManyTaxesArgs = class DeleteManyTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], DeleteManyTaxesArgs.prototype, "where", void 0);
DeleteManyTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTaxesArgs);
exports.DeleteManyTaxesArgs = DeleteManyTaxesArgs;
