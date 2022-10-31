"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesCreateManyInput_1 = require("../../../inputs/TaxesCreateManyInput");
let CreateManyTaxesArgs = class CreateManyTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesCreateManyInput_1.TaxesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTaxesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTaxesArgs.prototype, "skipDuplicates", void 0);
CreateManyTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTaxesArgs);
exports.CreateManyTaxesArgs = CreateManyTaxesArgs;
