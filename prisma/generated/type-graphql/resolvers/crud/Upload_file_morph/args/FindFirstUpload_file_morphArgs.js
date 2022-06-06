"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphOrderByWithRelationInput_1 = require("../../../inputs/Upload_file_morphOrderByWithRelationInput");
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
const Upload_file_morphScalarFieldEnum_1 = require("../../../../enums/Upload_file_morphScalarFieldEnum");
let FindFirstUpload_file_morphArgs = class FindFirstUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], FindFirstUpload_file_morphArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithRelationInput_1.Upload_file_morphOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUpload_file_morphArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], FindFirstUpload_file_morphArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUpload_file_morphArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUpload_file_morphArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphScalarFieldEnum_1.Upload_file_morphScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUpload_file_morphArgs.prototype, "distinct", void 0);
FindFirstUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUpload_file_morphArgs);
exports.FindFirstUpload_file_morphArgs = FindFirstUpload_file_morphArgs;
