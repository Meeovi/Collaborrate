"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaxesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let FindUniqueTaxesOrThrowArgs = class FindUniqueTaxesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], FindUniqueTaxesOrThrowArgs.prototype, "where", void 0);
FindUniqueTaxesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaxesOrThrowArgs);
exports.FindUniqueTaxesOrThrowArgs = FindUniqueTaxesOrThrowArgs;
