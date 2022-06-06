"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileOrderByWithRelationInput_1 = require("../../../inputs/Upload_fileOrderByWithRelationInput");
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let AggregateUpload_fileArgs = class AggregateUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], AggregateUpload_fileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_fileOrderByWithRelationInput_1.Upload_fileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateUpload_fileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], AggregateUpload_fileArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUpload_fileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUpload_fileArgs.prototype, "skip", void 0);
AggregateUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateUpload_fileArgs);
exports.AggregateUpload_fileArgs = AggregateUpload_fileArgs;
