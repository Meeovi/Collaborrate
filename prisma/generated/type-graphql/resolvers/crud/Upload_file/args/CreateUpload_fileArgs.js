"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileCreateInput_1 = require("../../../inputs/Upload_fileCreateInput");
let CreateUpload_fileArgs = class CreateUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCreateInput_1.Upload_fileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileCreateInput_1.Upload_fileCreateInput)
], CreateUpload_fileArgs.prototype, "data", void 0);
CreateUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateUpload_fileArgs);
exports.CreateUpload_fileArgs = CreateUpload_fileArgs;
