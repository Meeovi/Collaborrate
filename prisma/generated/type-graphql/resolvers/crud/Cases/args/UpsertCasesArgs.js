"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesCreateInput_1 = require("../../../inputs/CasesCreateInput");
const CasesUpdateInput_1 = require("../../../inputs/CasesUpdateInput");
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let UpsertCasesArgs = class UpsertCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], UpsertCasesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCreateInput_1.CasesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesCreateInput_1.CasesCreateInput)
], UpsertCasesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesUpdateInput_1.CasesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesUpdateInput_1.CasesUpdateInput)
], UpsertCasesArgs.prototype, "update", void 0);
UpsertCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCasesArgs);
exports.UpsertCasesArgs = UpsertCasesArgs;
