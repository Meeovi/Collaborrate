"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesOrderByWithRelationInput_1 = require("../../../inputs/CasesOrderByWithRelationInput");
const CasesWhereInput_1 = require("../../../inputs/CasesWhereInput");
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
const CasesScalarFieldEnum_1 = require("../../../../enums/CasesScalarFieldEnum");
let FindManyCasesArgs = class FindManyCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereInput_1.CasesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereInput_1.CasesWhereInput)
], FindManyCasesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesOrderByWithRelationInput_1.CasesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCasesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], FindManyCasesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCasesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCasesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesScalarFieldEnum_1.CasesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCasesArgs.prototype, "distinct", void 0);
FindManyCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCasesArgs);
exports.FindManyCasesArgs = FindManyCasesArgs;
