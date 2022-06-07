"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
let FindUniqueUpload_file_morphArgs = class FindUniqueUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], FindUniqueUpload_file_morphArgs.prototype, "where", void 0);
FindUniqueUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUpload_file_morphArgs);
exports.FindUniqueUpload_file_morphArgs = FindUniqueUpload_file_morphArgs;