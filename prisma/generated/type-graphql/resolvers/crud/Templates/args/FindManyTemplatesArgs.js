"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesOrderByWithRelationInput_1 = require("../../../inputs/TemplatesOrderByWithRelationInput");
const TemplatesWhereInput_1 = require("../../../inputs/TemplatesWhereInput");
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
const TemplatesScalarFieldEnum_1 = require("../../../../enums/TemplatesScalarFieldEnum");
let FindManyTemplatesArgs = class FindManyTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereInput_1.TemplatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesWhereInput_1.TemplatesWhereInput)
], FindManyTemplatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TemplatesOrderByWithRelationInput_1.TemplatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTemplatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], FindManyTemplatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTemplatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTemplatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TemplatesScalarFieldEnum_1.TemplatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTemplatesArgs.prototype, "distinct", void 0);
FindManyTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTemplatesArgs);
exports.FindManyTemplatesArgs = FindManyTemplatesArgs;
