"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUpload_fileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileCreateInput_1 = require("../../../inputs/Upload_fileCreateInput");
let CreateOneUpload_fileArgs = class CreateOneUpload_fileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCreateInput_1.Upload_fileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Upload_fileCreateInput_1.Upload_fileCreateInput)
], CreateOneUpload_fileArgs.prototype, "data", void 0);
CreateOneUpload_fileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUpload_fileArgs);
exports.CreateOneUpload_fileArgs = CreateOneUpload_fileArgs;
