"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphOrderByWithRelationInput_1 = require("../../../inputs/Upload_file_morphOrderByWithRelationInput");
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
let AggregateUpload_file_morphArgs = class AggregateUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], AggregateUpload_file_morphArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphOrderByWithRelationInput_1.Upload_file_morphOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateUpload_file_morphArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], AggregateUpload_file_morphArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUpload_file_morphArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUpload_file_morphArgs.prototype, "skip", void 0);
AggregateUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateUpload_file_morphArgs);
exports.AggregateUpload_file_morphArgs = AggregateUpload_file_morphArgs;
