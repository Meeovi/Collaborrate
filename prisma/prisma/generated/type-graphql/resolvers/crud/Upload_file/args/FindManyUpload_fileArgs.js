"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileOrderByWithRelationInput_1 = require("../../../inputs/Upload_fileOrderByWithRelationInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
const Upload_fileScalarFieldEnum_1 = require("../../../../enums/Upload_fileScalarFieldEnum");
let FindManyUpload_fileArgs = class FindManyUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], FindManyUpload_fileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByWithRelationInput_1.Upload_fileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUpload_fileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], FindManyUpload_fileArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUpload_fileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUpload_fileArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileScalarFieldEnum_1.Upload_fileScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUpload_fileArgs.prototype, "distinct", void 0);
FindManyUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyUpload_fileArgs);
exports.FindManyUpload_fileArgs = FindManyUpload_fileArgs;
