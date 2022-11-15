"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUpload_fileOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let FindUniqueUpload_fileOrThrowArgs = class FindUniqueUpload_fileOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], FindUniqueUpload_fileOrThrowArgs.prototype, "where", void 0);
FindUniqueUpload_fileOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUpload_fileOrThrowArgs);
exports.FindUniqueUpload_fileOrThrowArgs = FindUniqueUpload_fileOrThrowArgs;
