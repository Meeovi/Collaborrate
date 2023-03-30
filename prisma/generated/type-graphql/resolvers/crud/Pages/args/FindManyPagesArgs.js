"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByWithRelationInput_1 = require("../../../inputs/PagesOrderByWithRelationInput");
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
const PagesScalarFieldEnum_1 = require("../../../../enums/PagesScalarFieldEnum");
let FindManyPagesArgs = class FindManyPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], FindManyPagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesOrderByWithRelationInput_1.PagesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], FindManyPagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyPagesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesScalarFieldEnum_1.PagesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyPagesArgs.prototype, "distinct", void 0);
FindManyPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyPagesArgs);
exports.FindManyPagesArgs = FindManyPagesArgs;
