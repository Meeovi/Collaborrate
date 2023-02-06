"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesCreateInput_1 = require("../../../inputs/TaxesCreateInput");
const TaxesUpdateInput_1 = require("../../../inputs/TaxesUpdateInput");
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
let UpsertOneTaxesArgs = class UpsertOneTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], UpsertOneTaxesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesCreateInput_1.TaxesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesCreateInput_1.TaxesCreateInput)
], UpsertOneTaxesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesUpdateInput_1.TaxesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaxesUpdateInput_1.TaxesUpdateInput)
], UpsertOneTaxesArgs.prototype, "update", void 0);
UpsertOneTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTaxesArgs);
exports.UpsertOneTaxesArgs = UpsertOneTaxesArgs;
