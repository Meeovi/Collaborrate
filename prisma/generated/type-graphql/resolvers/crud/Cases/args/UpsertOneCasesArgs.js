"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesCreateInput_1 = require("../../../inputs/CasesCreateInput");
const CasesUpdateInput_1 = require("../../../inputs/CasesUpdateInput");
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let UpsertOneCasesArgs = class UpsertOneCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], UpsertOneCasesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesCreateInput_1.CasesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesCreateInput_1.CasesCreateInput)
], UpsertOneCasesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesUpdateInput_1.CasesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CasesUpdateInput_1.CasesUpdateInput)
], UpsertOneCasesArgs.prototype, "update", void 0);
UpsertOneCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCasesArgs);
exports.UpsertOneCasesArgs = UpsertOneCasesArgs;
