"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileWhereUniqueInput_1 = require("../../../inputs/Upload_fileWhereUniqueInput");
let DeleteUpload_fileArgs = class DeleteUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereUniqueInput_1.Upload_fileWhereUniqueInput)
], DeleteUpload_fileArgs.prototype, "where", void 0);
DeleteUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteUpload_fileArgs);
exports.DeleteUpload_fileArgs = DeleteUpload_fileArgs;
