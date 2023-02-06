"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let FindUniqueTaxesArgs = class FindUniqueTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], FindUniqueTaxesArgs.prototype, "where", void 0);
FindUniqueTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaxesArgs);
exports.FindUniqueTaxesArgs = FindUniqueTaxesArgs;
