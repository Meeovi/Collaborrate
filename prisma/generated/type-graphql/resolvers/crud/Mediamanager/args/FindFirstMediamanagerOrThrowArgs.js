"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMediamanagerOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerOrderByWithRelationInput_1 = require("../../../inputs/MediamanagerOrderByWithRelationInput");
const MediamanagerWhereInput_1 = require("../../../inputs/MediamanagerWhereInput");
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
const MediamanagerScalarFieldEnum_1 = require("../../../../enums/MediamanagerScalarFieldEnum");
let FindFirstMediamanagerOrThrowArgs = class FindFirstMediamanagerOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereInput_1.MediamanagerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereInput_1.MediamanagerWhereInput)
], FindFirstMediamanagerOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerOrderByWithRelationInput_1.MediamanagerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMediamanagerOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], FindFirstMediamanagerOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMediamanagerOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMediamanagerOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MediamanagerScalarFieldEnum_1.MediamanagerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMediamanagerOrThrowArgs.prototype, "distinct", void 0);
FindFirstMediamanagerOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstMediamanagerOrThrowArgs);
exports.FindFirstMediamanagerOrThrowArgs = FindFirstMediamanagerOrThrowArgs;
