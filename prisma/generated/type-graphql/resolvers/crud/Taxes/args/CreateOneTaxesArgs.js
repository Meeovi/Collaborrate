"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesCreateInput_1 = require("../../../inputs/TaxesCreateInput");
let CreateOneTaxesArgs = class CreateOneTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesCreateInput_1.TaxesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesCreateInput_1.TaxesCreateInput)
], CreateOneTaxesArgs.prototype, "data", void 0);
CreateOneTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTaxesArgs);
exports.CreateOneTaxesArgs = CreateOneTaxesArgs;
