"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphUpdateInput_1 = require("../../../inputs/Upload_file_morphUpdateInput");
const Upload_file_morphWhereUniqueInput_1 = require("../../../inputs/Upload_file_morphWhereUniqueInput");
let UpdateUpload_file_morphArgs = class UpdateUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphUpdateInput_1.Upload_file_morphUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphUpdateInput_1.Upload_file_morphUpdateInput)
], UpdateUpload_file_morphArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_file_morphWhereUniqueInput_1.Upload_file_morphWhereUniqueInput)
], UpdateUpload_file_morphArgs.prototype, "where", void 0);
UpdateUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateUpload_file_morphArgs);
exports.UpdateUpload_file_morphArgs = UpdateUpload_file_morphArgs;
