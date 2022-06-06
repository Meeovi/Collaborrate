"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphUpdateManyMutationInput_1 = require("../../../inputs/Upload_file_morphUpdateManyMutationInput");
const Upload_file_morphWhereInput_1 = require("../../../inputs/Upload_file_morphWhereInput");
let UpdateManyUpload_file_morphArgs = class UpdateManyUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphUpdateManyMutationInput_1.Upload_file_morphUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphUpdateManyMutationInput_1.Upload_file_morphUpdateManyMutationInput)
], UpdateManyUpload_file_morphArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereInput_1.Upload_file_morphWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereInput_1.Upload_file_morphWhereInput)
], UpdateManyUpload_file_morphArgs.prototype, "where", void 0);
UpdateManyUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUpload_file_morphArgs);
exports.UpdateManyUpload_file_morphArgs = UpdateManyUpload_file_morphArgs;
