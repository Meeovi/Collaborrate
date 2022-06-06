"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
let DeleteManyUpload_file_morphArgs = class DeleteManyUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], DeleteManyUpload_file_morphArgs.prototype, "where", void 0);
DeleteManyUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUpload_file_morphArgs);
exports.DeleteManyUpload_file_morphArgs = DeleteManyUpload_file_morphArgs;
