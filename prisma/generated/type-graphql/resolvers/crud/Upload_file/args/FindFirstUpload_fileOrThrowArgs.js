"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUpload_fileOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileOrderByWithRelationInput_1 = require("../../../inputs/Upload_fileOrderByWithRelationInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
const Upload_fileScalarFieldEnum_1 = require("../../../../enums/Upload_fileScalarFieldEnum");
let FindFirstUpload_fileOrThrowArgs = class FindFirstUpload_fileOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], FindFirstUpload_fileOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByWithRelationInput_1.Upload_fileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUpload_fileOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], FindFirstUpload_fileOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUpload_fileOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUpload_fileOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum_1.Upload_fileScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUpload_fileOrThrowArgs.prototype, "distinct", void 0);
FindFirstUpload_fileOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUpload_fileOrThrowArgs);
exports.FindFirstUpload_fileOrThrowArgs = FindFirstUpload_fileOrThrowArgs;
