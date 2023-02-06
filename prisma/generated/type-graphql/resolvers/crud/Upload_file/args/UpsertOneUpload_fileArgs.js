"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileCreateInput_1 = require("../../../inputs/Upload_fileCreateInput");
const Upload_fileUpdateInput_1 = require("../../../inputs/Upload_fileUpdateInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let UpsertOneUpload_fileArgs = class UpsertOneUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], UpsertOneUpload_fileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCreateInput_1.Upload_fileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileCreateInput_1.Upload_fileCreateInput)
], UpsertOneUpload_fileArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileUpdateInput_1.Upload_fileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileUpdateInput_1.Upload_fileUpdateInput)
], UpsertOneUpload_fileArgs.prototype, "update", void 0);
UpsertOneUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUpload_fileArgs);
exports.UpsertOneUpload_fileArgs = UpsertOneUpload_fileArgs;
