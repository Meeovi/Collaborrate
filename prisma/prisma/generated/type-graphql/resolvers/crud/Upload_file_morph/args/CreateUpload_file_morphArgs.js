"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphCreateInput_1 = require("../../../inputs/Upload_file_morphCreateInput");
let CreateUpload_file_morphArgs = class CreateUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCreateInput_1.Upload_file_morphCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphCreateInput_1.Upload_file_morphCreateInput)
], CreateUpload_file_morphArgs.prototype, "data", void 0);
CreateUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateUpload_file_morphArgs);
exports.CreateUpload_file_morphArgs = CreateUpload_file_morphArgs;
