"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUpload_file_morphArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphCreateManyInput_1 = require("../../../inputs/Upload_file_morphCreateManyInput");
let CreateManyUpload_file_morphArgs = class CreateManyUpload_file_morphArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Upload_file_morphCreateManyInput_1.Upload_file_morphCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUpload_file_morphArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUpload_file_morphArgs.prototype, "skipDuplicates", void 0);
CreateManyUpload_file_morphArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUpload_file_morphArgs);
exports.CreateManyUpload_file_morphArgs = CreateManyUpload_file_morphArgs;
