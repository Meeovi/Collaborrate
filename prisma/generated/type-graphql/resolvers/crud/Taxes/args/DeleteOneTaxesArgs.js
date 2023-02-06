"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let DeleteOneTaxesArgs = class DeleteOneTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], DeleteOneTaxesArgs.prototype, "where", void 0);
DeleteOneTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTaxesArgs);
exports.DeleteOneTaxesArgs = DeleteOneTaxesArgs;
