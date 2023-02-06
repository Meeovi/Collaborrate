"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileWhereInput_1 = require("../../../inputs/Upload_fileWhereInput");
let DeleteManyUpload_fileArgs = class DeleteManyUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileWhereInput_1.Upload_fileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileWhereInput_1.Upload_fileWhereInput)
], DeleteManyUpload_fileArgs.prototype, "where", void 0);
DeleteManyUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUpload_fileArgs);
exports.DeleteManyUpload_fileArgs = DeleteManyUpload_fileArgs;
