"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileCreateInput_1 = require("../../../inputs/Upload_fileCreateInput");
const Upload_fileUpdateInput_1 = require("../../../inputs/Upload_fileUpdateInput");
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let UpsertUpload_fileArgs = class UpsertUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], UpsertUpload_fileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCreateInput_1.Upload_fileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileCreateInput_1.Upload_fileCreateInput)
], UpsertUpload_fileArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileUpdateInput_1.Upload_fileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileUpdateInput_1.Upload_fileUpdateInput)
], UpsertUpload_fileArgs.prototype, "update", void 0);
UpsertUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertUpload_fileArgs);
exports.UpsertUpload_fileArgs = UpsertUpload_fileArgs;
