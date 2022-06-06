"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphCreateInput_1 = require("../../../inputs/Upload_file_morphCreateInput");
const Upload_file_morphUpdateInput_1 = require("../../../inputs/Upload_file_morphUpdateInput");
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
let UpsertUpload_file_morphArgs = class UpsertUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], UpsertUpload_file_morphArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateInput_1.Upload_file_morphCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphCreateInput_1.Upload_file_morphCreateInput)
], UpsertUpload_file_morphArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphUpdateInput_1.Upload_file_morphUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphUpdateInput_1.Upload_file_morphUpdateInput)
], UpsertUpload_file_morphArgs.prototype, "update", void 0);
UpsertUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertUpload_file_morphArgs);
exports.UpsertUpload_file_morphArgs = UpsertUpload_file_morphArgs;
