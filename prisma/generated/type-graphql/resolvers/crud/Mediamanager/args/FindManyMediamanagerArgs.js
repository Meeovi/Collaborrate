"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerOrderByWithRelationInput_1 = require("../../../inputs/MediamanagerOrderByWithRelationInput");
const MediamanagerWhereInput_1 = require("../../../inputs/MediamanagerWhereInput");
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
const MediamanagerScalarFieldEnum_1 = require("../../../../enums/MediamanagerScalarFieldEnum");
let FindManyMediamanagerArgs = class FindManyMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereInput_1.MediamanagerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereInput_1.MediamanagerWhereInput)
], FindManyMediamanagerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerOrderByWithRelationInput_1.MediamanagerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMediamanagerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], FindManyMediamanagerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMediamanagerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMediamanagerArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerScalarFieldEnum_1.MediamanagerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMediamanagerArgs.prototype, "distinct", void 0);
FindManyMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMediamanagerArgs);
exports.FindManyMediamanagerArgs = FindManyMediamanagerArgs;
