"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstGlossaryOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/GlossaryOrderByWithRelationAndSearchRelevanceInput");
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
const GlossaryScalarFieldEnum_1 = require("../../../../enums/GlossaryScalarFieldEnum");
let FindFirstGlossaryOrThrowArgs = class FindFirstGlossaryOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], FindFirstGlossaryOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryOrderByWithRelationAndSearchRelevanceInput_1.GlossaryOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGlossaryOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], FindFirstGlossaryOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGlossaryOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstGlossaryOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryScalarFieldEnum_1.GlossaryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstGlossaryOrThrowArgs.prototype, "distinct", void 0);
FindFirstGlossaryOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstGlossaryOrThrowArgs);
exports.FindFirstGlossaryOrThrowArgs = FindFirstGlossaryOrThrowArgs;
