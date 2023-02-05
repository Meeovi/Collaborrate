"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPagesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PagesOrderByWithRelationAndSearchRelevanceInput");
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
const PagesScalarFieldEnum_1 = require("../../../../enums/PagesScalarFieldEnum");
let FindFirstPagesOrThrowArgs = class FindFirstPagesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], FindFirstPagesOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesOrderByWithRelationAndSearchRelevanceInput_1.PagesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPagesOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], FindFirstPagesOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPagesOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPagesOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesScalarFieldEnum_1.PagesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPagesOrThrowArgs.prototype, "distinct", void 0);
FindFirstPagesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPagesOrThrowArgs);
exports.FindFirstPagesOrThrowArgs = FindFirstPagesOrThrowArgs;
