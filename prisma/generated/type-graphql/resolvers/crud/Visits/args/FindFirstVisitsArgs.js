"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVisitsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisitsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/VisitsOrderByWithRelationAndSearchRelevanceInput");
const VisitsWhereInput_1 = require("../../../inputs/VisitsWhereInput");
const VisitsWhereUniqueInput_1 = require("../../../inputs/VisitsWhereUniqueInput");
const VisitsScalarFieldEnum_1 = require("../../../../enums/VisitsScalarFieldEnum");
let FindFirstVisitsArgs = class FindFirstVisitsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereInput_1.VisitsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsWhereInput_1.VisitsWhereInput)
], FindFirstVisitsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsOrderByWithRelationAndSearchRelevanceInput_1.VisitsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVisitsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisitsWhereUniqueInput_1.VisitsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisitsWhereUniqueInput_1.VisitsWhereUniqueInput)
], FindFirstVisitsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVisitsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVisitsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisitsScalarFieldEnum_1.VisitsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVisitsArgs.prototype, "distinct", void 0);
FindFirstVisitsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstVisitsArgs);
exports.FindFirstVisitsArgs = FindFirstVisitsArgs;
